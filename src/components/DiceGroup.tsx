import React from 'react';
import { IPlayer, Players, PlayerControl } from '../stores/Models';
import { MDBBtn, MDBFormInline, MDBInput } from 'mdbreact';
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
    SetPlayerControl: (player: Players, controller: PlayerControl) => void;
}

export class DiceGroup extends React.Component<IDiceGroupProps> {

    public render() {
        const { activePlayer, player, SetPlayerControl } = this.props;
        const isActive = activePlayer === player.name;
        const colors = COLORS_MAP[player.name];
        return <>
            <PlayerContainer {...colors}>
                <h3>{player.name}</h3>
                {this.buttonColoring(isActive, this.props)}
                <MDBFormInline>
                    <MDBInput
                        onClick={() => SetPlayerControl(player.name, PlayerControl.Player)}
                        checked={player.controller === PlayerControl.Player}
                        label='Player'
                        type='radio'
                        id='radio1'
                        containerClass='mr-5'
                    />
                    <MDBInput
                        onClick={() => SetPlayerControl(player.name, PlayerControl.CPU)}
                        checked={player.controller === PlayerControl.CPU}
                        label='CPU '
                        type='radio'
                        id='radio2'
                        containerClass='mr-5'
                    />
                </MDBFormInline>
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