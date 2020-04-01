import { IDiceProps } from '../components/Dice';
import { Action } from 'redux';
import { IFighter, Fighters, PlayerControl } from './Models';

export interface IDiceState {
    activePlayer: Fighters;
    hasWon: boolean;
    fighters: IFighter[];
}

export const defaultState: IDiceState = {
    activePlayer: Fighters.Raymond,
    hasWon: false,
    fighters: [
        {
            name: Fighters.Robert,
            controller: PlayerControl.Player,
            dice: [],
        }, {
            name: Fighters.Raymond,
            controller: PlayerControl.Player,
            dice: [],
        }
    ]
}

export enum ActionTypes {
    UPDATE_DICE = 'UPDATE_DICE',
    CHANGE_ACTIVE_PLAYER = 'CHANGE_ACTIVE_PLAYER',
    GAME_OVER = 'GAME_OVER',
    RESET = 'RESET',
    SET_PLAYER_CONTROL = 'SET_PLAYER_CONTROL',
}

export interface IUpdateDice extends Action {
    type: ActionTypes.UPDATE_DICE,
    payload: {dice: IDiceProps[], player: Fighters};
}
export interface IChangeActivePlayer {
    type: ActionTypes.CHANGE_ACTIVE_PLAYER,
}
export interface IGameOver {
    type: ActionTypes.GAME_OVER;
}
export interface IReset {
    type: ActionTypes.RESET;
}
export interface ISetPlayerControl {
    type: ActionTypes.SET_PLAYER_CONTROL;
    payload: { player: Fighters, controller: PlayerControl};
}

export const ActionCreators = {
    Roll: (playerName: Fighters) => (dispatch: any, getState: any) => {
        const diceValues: IDiceProps[] = [];
        diceValues.push({dieValue: randomInt(6), displayValue: 'D6', xPosition: randomInt(800), yPosition: randomInt(600)});
        diceValues.push({dieValue: randomInt(6), displayValue: 'D6', xPosition: randomInt(800), yPosition: randomInt(600)});
        diceValues.push({dieValue: randomInt(20), displayValue: 'D20', xPosition: randomInt(800), yPosition: randomInt(600)});
        const payload = { player: playerName, dice: diceValues};
        dispatch ({
            type: ActionTypes.UPDATE_DICE,
            payload: payload,
        });
        

        const total = diceValues.map((d) => d.dieValue)
            .reduce((a, b) => a+b);
        if (total === 12) {
            dispatch({type: ActionTypes.GAME_OVER});
        } else {
            const nextActivePlayer = getState().dice.fighters.find((p: IFighter) => p.name !== playerName);
            if (nextActivePlayer && nextActivePlayer.controller === PlayerControl.CPU) {
                dispatch(ActionCreators.Roll(nextActivePlayer.name));
            }
            dispatch({
                type: ActionTypes.CHANGE_ACTIVE_PLAYER,
            });
        }
    },
    Reset: () => (dispatch: any) => {
        dispatch({type: ActionTypes.RESET});
    },
    SetPlayerControl: (player: Fighters, controller: PlayerControl) => (dispatch: any) => {
        dispatch({
            type: ActionTypes.SET_PLAYER_CONTROL,
            payload: {player, controller},
        });
    },
}

export function randomInt(maxValue: number) {
    return Math.floor(Math.random() * maxValue) + 1;
}

export type acceptedActions = IUpdateDice | 
    IChangeActivePlayer | 
    IGameOver | 
    IReset| 
    ISetPlayerControl;

export const diceReducer = function (state: IDiceState = defaultState, action: acceptedActions) {
    if (typeof state === 'undefined') {
        return defaultState;
    }
    switch (action.type) {
        case ActionTypes.UPDATE_DICE:
            return {
                ...state,
                fighters: [...state.fighters.map((p) => 
                    p.name === action.payload.player ?
                    {...p, dice: action.payload.dice} :
                    {...p}
                )],
            }
        case ActionTypes.CHANGE_ACTIVE_PLAYER:
            return {
                ...state,
                activePlayer: state.activePlayer === Fighters.Raymond ?
                    Fighters.Robert :
                    Fighters.Raymond
            }
        case ActionTypes.GAME_OVER:
            return {
                ...state,
                hasWon: true,
            }
        case ActionTypes.RESET:
            return {
                ...defaultState,
            }
        case ActionTypes.SET_PLAYER_CONTROL:
            return {
                ...state, 
                fighters: state.fighters.map((p) => {
                    return p.name === action.payload.player ?
                        {...p, controller: action.payload.controller} :
                        {...p}
                })
            }
        default:
            return state;
    }
}