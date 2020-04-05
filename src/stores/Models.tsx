import { IDiceProps } from "../components/Dice";

export interface IFighter {
    name: Fighters;
    controller: PlayerControl;
    playerNumber: PlayerNumber;
    dice: IDiceProps[];
}

export enum Fighters {
    Raymond = 'Raymond',
    Robert = 'Robert',
    Debra = 'Debra',
    Lenny = 'Lenny',
    Kaiba = 'Kaiba',
    Yugi = 'Yugi',
    Teferi = 'Teferi',
    Booze = 'Booze',
}

export enum PlayerControl {
    Player = 'Player',
    CPU = 'CPU',
}

export interface IDiceColorProps {
    backgroundColor: string;
    borderColor: string;
    portraitColor: string;
}

export interface IFighterSelection {
    name: Fighters;
    chosenBy?: PlayerNumber;
}

export enum PlayerNumber {
    PlayerOne = 'PlayerOne',
    PlayerTwo = 'PlayerTwo',
}

export enum Page {
    CharacterSelection = 'Character Seletion',
    BattleScreen = 'Battle Screen',
}
