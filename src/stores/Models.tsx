import { IDiceProps } from "../components/Dice";

export interface IPlayer {
    name: Players;
    dice: IDiceProps[];
}

export enum Players {
    Raymond = 'Raymond',
    Robert = 'Robert',
}

export interface IDiceColorProps {
    backgroundColor: string;
    borderColor: string;
} 