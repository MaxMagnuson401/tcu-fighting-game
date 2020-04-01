import { IFighterSelection, Fighters } from "./Models";
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
    payload: Fighters,
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
                        f.name === action.payload ?
                            {...f, isSelected: true} :
                            {...f}
                    )],
                }
            default:
                return defaultFighterState;
        }
    }