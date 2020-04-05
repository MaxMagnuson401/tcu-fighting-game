import { IFighterSelection, Fighters, PlayerNumber, Page } from "./Models";
import { Action } from "redux";
import {ActionTypes as BattleScreenActions} from './DiceReducer';

export interface IFighterSelectionState {
    activePlayer: PlayerNumber,
    currentScreen: Page,
    fighterSelections: IFighterSelection[];
}

export const defaultFighterState: IFighterSelectionState = {
    activePlayer: PlayerNumber.PlayerOne,
    currentScreen: Page.CharacterSelection,
    fighterSelections: [
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
    CHANGE_SCREENS = 'CHANGE_SCREENS',
}

export interface ISelectFighter extends Action {
    type: ActionTypes.SELECT_FIGHTER,
    payload: {fighter: Fighters, playerNumber: PlayerNumber},
}
export interface IChangeActivePlayer extends Action {
    type: ActionTypes.CHANGE_ACTIVE_PLAYER;
    payload: PlayerNumber;
}
export interface IChangeScreens extends Action {
    type: ActionTypes.CHANGE_SCREENS;
    payload: Page;
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
    ChangeScreens: (page: Page) => (dispatch: any, getState: any) => {
        const fighters = [...getState().fighter.fighterSelections];
        const firstFighter = fighters.find((f: IFighterSelection) => 
            f.chosenBy === PlayerNumber.PlayerOne);
        const secondFighter = fighters.find((f: IFighterSelection) => 
            f.chosenBy === PlayerNumber.PlayerTwo);
        dispatch({
            type: BattleScreenActions.LOAD_SELECTION_DATA,
            payload: [firstFighter, secondFighter],
        });
        dispatch({
            type: ActionTypes.CHANGE_SCREENS,
            payload: page,
        });
    },
}

type FighterSelectionActions = ISelectFighter  | IChangeActivePlayer | IChangeScreens;

export const FighterSelectionReducer = 
    function (state: IFighterSelectionState = defaultFighterState, action: FighterSelectionActions) {
        if (typeof state === 'undefined') {
            return defaultFighterState;
        }
        switch(action.type) {
            case ActionTypes.SELECT_FIGHTER:
                return {...state,
                    fighterSelections: [...state.fighterSelections.map((f: IFighterSelection) =>
                        f.name === action.payload.fighter ?
                            {...f, chosenBy: f.chosenBy ? undefined: action.payload.playerNumber} :
                            {...f, chosenBy: f.chosenBy === action.payload.playerNumber ? undefined : f.chosenBy}
                    )],
                }
            case ActionTypes.CHANGE_ACTIVE_PLAYER:
                return {...state,
                    activePlayer: action.payload,
                }
            case ActionTypes.CHANGE_SCREENS:
                return {...state,
                    currentScreen: action.payload,
                }

            default:
                return {...state};
        }
    }