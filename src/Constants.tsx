import { IDiceColorProps, Players } from './stores/Models';

export const RAYMOND_COLORS: IDiceColorProps = { backgroundColor: '#3498db', borderColor: '#1b4f72'}
export const ROBERT_COLORS: IDiceColorProps = {backgroundColor: '#FF0000', borderColor: '#8B0000'}
export const COLORS_MAP: {[player in Players]: IDiceColorProps} = {
    [Players.Raymond] : RAYMOND_COLORS,
    [Players.Robert] : ROBERT_COLORS,
} 
