import { IFighterSelection, Fighters, PlayerNumber } from "./Models";
import { Action } from "redux";

export interface IFighterSelectionState {
    fighters: IFighterSelection[];
}

export const defaultFighterState: IFighterSelectionState = {
    fighters: [
        {name: Fighters.Raymond},
        {name: Fighters.Robert},
    ],
}

export enum ActionTypes {
    SELECT_FIGHTER = 'SELECT_FIGHTER',
}

export interface ISelectFighter extends Action {
    type: ActionTypes.SELECT_FIGHTER,
    payload: {fighter: Fighters, playerNumber: PlayerNumber},
}

export const ActionCreators = {
    SelectFighter: (fighter: Fighters, playerNumber: PlayerNumber) => (dispatch: any) => {
        dispatch({
            type: ActionTypes.SELECT_FIGHTER,
            payload: {fighter, playerNumber},
        });
    },
}

type acceptedActions = ISelectFighter;

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
                            {...f}
                    )],
                }
            default:
                return defaultFighterState;
        }
    }