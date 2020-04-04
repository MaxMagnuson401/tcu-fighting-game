import { IFighterSelection, Fighters, PlayerNumber } from "./Models";
import { Action } from "redux";

export interface IFighterSelectionState {
    activePlayer: PlayerNumber,
    fighters: IFighterSelection[];
}

export const defaultFighterState: IFighterSelectionState = {
    activePlayer: PlayerNumber.PlayerOne,
    fighters: [
        {name: Fighters.Raymond},
        {name: Fighters.Robert},
        {name: Fighters.Yugi},
        {name: Fighters.Teferi},
        {name: Fighters.Lenny},
        {name: Fighters.Kaiba},
        {name: Fighters.Debra},
        {name: Fighters.Booze},
    ],
}

export enum ActionTypes {
    SELECT_FIGHTER = 'SELECT_FIGHTER',
    CHANGE_ACTIVE_PLAYER = 'CHANGE_ACTIVE_PLAYER',
}

export interface ISelectFighter extends Action {
    type: ActionTypes.SELECT_FIGHTER,
    payload: {fighter: Fighters, playerNumber: PlayerNumber},
}
export interface IChangeActivePlayer extends Action {
    type: ActionTypes.CHANGE_ACTIVE_PLAYER;
    payload: PlayerNumber;
}

export const ActionCreators = {
    SelectFighter: (fighter: Fighters, playerNumber: PlayerNumber) => (dispatch: any) => {
        dispatch({
            type: ActionTypes.SELECT_FIGHTER,
            payload: {fighter, playerNumber},
        });
    },
    ChangeActivePlayer: (player: PlayerNumber) => (dispatch: any) => {
        dispatch({
            type: ActionTypes.CHANGE_ACTIVE_PLAYER,
            payload: player,
        });
    },
}

type acceptedActions = ISelectFighter  | IChangeActivePlayer;

export const FighterSelectionReducer = 
    function (state: IFighterSelectionState = defaultFighterState, action: acceptedActions) {
        if (typeof state === 'undefined') {
            return defaultFighterState;
        }
        switch(action.type) {
            case ActionTypes.SELECT_FIGHTER:
                return {...state,
                    fighters: [...state.fighters.map((f: IFighterSelection) =>
                        f.name === action.payload.fighter ?
                            {...f, chosenBy: f.chosenBy ? undefined: action.payload.playerNumber} :
                            {...f, chosenBy: f.chosenBy === action.payload.playerNumber ? undefined : f.chosenBy}
                    )],
                }
            case ActionTypes.CHANGE_ACTIVE_PLAYER:
                return {...state,
                    activePlayer: action.payload,
                }

            default:
                return defaultFighterState;
        }
    }