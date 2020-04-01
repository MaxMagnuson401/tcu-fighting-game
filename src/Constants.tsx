import { IDiceColorProps, Fighters } from './stores/Models';

export const RAYMOND_COLORS: IDiceColorProps = { backgroundColor: '#3498db', borderColor: '#1b4f72'}
export const ROBERT_COLORS: IDiceColorProps = {backgroundColor: '#FF0000', borderColor: '#8B0000'}
export const COLORS_MAP: {[player in Fighters]: IDiceColorProps} = {
    [Fighters.Raymond] : RAYMOND_COLORS,
    [Fighters.Robert] : ROBERT_COLORS,
} 
