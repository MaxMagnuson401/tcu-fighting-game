import { IDiceProps } from "../components/Dice";

export interface IPlayer {
    name: Players;
    controller: PlayerControl;
    dice: IDiceProps[];
}

export enum Players {
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

export interface IFighter {
    name: Players;
    isSelected: boolean;
}