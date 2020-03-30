import React from 'react'
import { IDiceProps } from '../components/Dice';
import { Action } from 'redux';
import { IPlayer, Players } from './Models';

export interface IDiceState {
    activePlayer: Players;
    hasWon: boolean;
    players: IPlayer[];
}

export const defaultState = {
    activePlayer: Players.Raymond,
    hasWon: false,
    players: [
        {
            name: Players.Robert,
            dice: [],
        }, {
            name: Players.Raymond,
            dice: [],
        }
    ]
}

export enum ActionTypes {
    UPDATE_DICE = 'UPDATE_DICE',
    CHANGE_ACTIVE_PLAYER = 'CHANGE_ACTIVE_PLAYER',
    GAME_OVER = 'GAME_OVER',
    RESET = 'RESET',
}

export interface IUpdateDice extends Action {
    type: ActionTypes.UPDATE_DICE,
    payload: {dice: IDiceProps[], player: Players};
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

export const ActionCreators = {
    Roll: (playerName: Players) => (dispatch: any) => {
        const diceValues: IDiceProps[] = [];
        diceValues.push({dieValue: randomInt(6), displayValue: 'D6', xPosition: randomInt(1200), yPosition: randomInt(1000)});
        diceValues.push({dieValue: randomInt(6), displayValue: 'D6', xPosition: randomInt(1200), yPosition: randomInt(1000)});
        diceValues.push({dieValue: randomInt(20), displayValue: 'D20', xPosition: randomInt(1200), yPosition: randomInt(1000)});
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
            dispatch({
                type: ActionTypes.CHANGE_ACTIVE_PLAYER,
            });
        }
    },
    Reset: () => (dispatch: any) => {
        dispatch({type: ActionTypes.RESET});
    }
}

export function randomInt(maxValue: number) {
    return Math.floor(Math.random() * maxValue) + 1;
}

export type acceptedActions = IUpdateDice | IChangeActivePlayer | IGameOver | IReset;

export const diceReducer = function (state: IDiceState = defaultState, action: acceptedActions) {
    if (typeof state === 'undefined') {
        return defaultState;
    }
    switch (action.type) {
        case ActionTypes.UPDATE_DICE:
            return {
                ...state,
                players: [...state.players.map((p) => 
                    p.name === action.payload.player ?
                    {...p, dice: action.payload.dice} :
                    {...p}
                )],
            }
        case ActionTypes.CHANGE_ACTIVE_PLAYER:
            return {
                ...state,
                activePlayer: state.activePlayer === Players.Raymond ?
                    Players.Robert :
                    Players.Raymond
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
        default:
            return state;
    }
}