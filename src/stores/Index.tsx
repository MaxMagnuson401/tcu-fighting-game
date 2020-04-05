import { combineReducers } from 'redux';
import { diceReducer } from './DiceReducer';
import { FighterSelectionReducer } from './FighterSelectionStore';


export default combineReducers({
    dice: diceReducer,
    fighter: FighterSelectionReducer,
});