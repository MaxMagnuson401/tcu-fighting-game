import React from 'react';
import raymondimage from '../assets/raymondimage.png';
import { MDBCol, MDBRow, MDBContainer, MDBBtn } from 'mdbreact';
import { useSelector, useDispatch } from 'react-redux';
import { IDiceState, ActionCreators } from '../stores/DiceReducer';
import { DiceGroup } from './DiceGroup';
import styled from 'styled-components'
import { Dice } from './Dice';
import {COLORS_MAP} from '../Constants';

export interface IContainerProps {
    xPosition: number,
    yPosition: number,
    borderColor: string,
    backgroundColor: string,
}

const RandomDieContainer = styled.div`
    position: absolute;
    left: ${(props: IContainerProps) => props.xPosition}px;
    top: ${(props: IContainerProps) => props.yPosition}px;
    z-index: 1;
    border-style: solid;
    border-color: ${(props: IContainerProps) => props.borderColor};
    background-color: ${(props: IContainerProps) => props.backgroundColor}
`

const StyledImage = styled.img`
    border: 5px solid black;
    border-radius: 25px;
    box-shadow: 0 0 10px #000000;
`

export const Home: React.FC = () => {

    const players = useSelector((state: IDiceState) => state.players);
    const activePlayer = useSelector((state: IDiceState) => state.activePlayer);
    const hasWon = useSelector((state: IDiceState) => state.hasWon);
    const dispatch = useDispatch();

    return <>
        {players.map((p) => p.dice.map((d) =>
            {
            const colors = COLORS_MAP[p.name];
            return <RandomDieContainer xPosition={d.xPosition} 
                yPosition={d.yPosition}
                {...colors}>
                    <Dice {...d}/>
            </RandomDieContainer>
            }
        ))}
        
        <h1>Welcome Duelist, to the twelves world finals!</h1>

        <MDBContainer>
            <MDBRow>
                <MDBCol size='2'>
                    <DiceGroup player={players[0]} 
                        Roll={() => dispatch(ActionCreators.Roll(players[0].name))}
                        activePlayer={activePlayer}
                        hasWon={hasWon}/>
                </MDBCol>
                <MDBCol size='8'>
                    <StyledImage src={raymondimage} width={750} />
                </MDBCol>
                <MDBCol size='2'>
                    <DiceGroup player={players[1]} 
                        Roll={() => dispatch(ActionCreators.Roll(players[1].name))}
                        activePlayer={activePlayer}
                        hasWon={hasWon}/>
                </MDBCol>
            </MDBRow>
            {hasWon &&
            <>
                <MDBRow>
                    <MDBCol size='2'/>
                    <MDBCol size='8'>Congratulations {activePlayer}! You have won the affection of your brother.</MDBCol>
                    <MDBCol size='2'/>
                </MDBRow>
                <MDBBtn onClick={() => dispatch(ActionCreators.Reset())}>Reset Game</MDBBtn>
            </>
            }
        </MDBContainer>
    </>
}