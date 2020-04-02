import { IDiceColorProps, Fighters, PlayerNumber } from './stores/Models';

export const PLAYER_ONE_COLORS: IDiceColorProps = { backgroundColor: '#3498db', borderColor: '#1b4f72'}
export const PLAYER_TWO_COLORS: IDiceColorProps = {backgroundColor: '#FF0000', borderColor: '#8B0000'}
export const COLORS_MAP: {[player in PlayerNumber]: IDiceColorProps} = {
    [PlayerNumber.PlayerOne] : PLAYER_ONE_COLORS,
    [PlayerNumber.PlayerTwo] : PLAYER_TWO_COLORS,
} 
