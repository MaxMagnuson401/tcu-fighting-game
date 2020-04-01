import { IDiceProps } from "../components/Dice";

export interface IFighter {
    name: Fighters;
    controller: PlayerControl;
    dice: IDiceProps[];
}

export enum Fighters {
    Raymond = 'Raymond',
    Robert = 'Robert',
}

export enum PlayerControl {
    Player = 'Player',
    CPU = 'CPU',
}

export interface IDiceColorProps {
    backgroundColor: string;
    borderColor: string;
}

export interface IFighterSelection {
    name: Fighters;
    chosenBy?: PlayerNumber;
}

export enum PlayerNumber {
    PlayerOne = 'PlayerOne',
    PlayerTwo = 'PlayerTwo',
}