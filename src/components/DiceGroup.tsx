import React from 'react';
import { IPlayer, Players } from '../stores/Models';
import { MDBBtn } from 'mdbreact';
import styled from 'styled-components';
import { COLORS_MAP } from '../Constants';

interface IContainerProps {
    borderColor: string;
    backgroundColor: string;
}

const PlayerContainer = styled.div`
    position: relative;
    border-style: solid;
    border-radius: 5px;
    border-color: ${(props: IContainerProps) => props.borderColor};
    background-color: ${(props: IContainerProps) => props.backgroundColor}
`

export interface IDiceGroupProps {
    player: IPlayer;
    activePlayer: Players;
    hasWon: boolean;
    Roll: () => void;
}

export class DiceGroup extends React.Component<IDiceGroupProps> {

    public render() {
        const { activePlayer, player } = this.props;
        const isActive = activePlayer === player.name;
        const colors = COLORS_MAP[player.name];
        return <>
            <PlayerContainer {...colors}>
                <h3>{player.name}</h3>
                {/*player.dice.map((dv) => <Dice {...dv} />)*/}
                {this.buttonColoring(isActive, this.props)}
            </PlayerContainer>
        </>;
    }

    private buttonColoring(isActive: boolean, props: IDiceGroupProps): any {
        if (!isActive || props.hasWon) {
            return <MDBBtn color='mdb-color'
                onClick={() => props.Roll()}
                disabled={true}>
                    Roll
            </MDBBtn>
        } else {
            return <MDBBtn color='success'
                onClick={() => props.Roll()}>
                    Roll
            </MDBBtn>
        }
        
    }
}