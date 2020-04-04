import React from 'react';
import styled from 'styled-components';
import { Fighters, PlayerNumber } from '../stores/Models';
import { fighterImages } from '../assets/assets';
import { FighterPortrait } from './FighterPortrait';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '..';
import { ActionCreators } from '../stores/FighterSelectionStore';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { FighterSidePanel } from './FighterSidePanel';

const FighterContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    background-color: #696969;
    padding: 2px;
`;

export const FighterSelectionPage: React.FC = () => {

    const fighters = useSelector((state: IApplicationState) => state.fighter.fighters);
    const activePlayer = useSelector((state: IApplicationState) => state.fighter.activePlayer);
    const dispatch = useDispatch();

    const firstFighter = fighters.find((f) => f.chosenBy === PlayerNumber.PlayerOne);
    const secondFighter = fighters.find((f) => f.chosenBy === PlayerNumber.PlayerTwo);

    return <>
        <MDBContainer>
            <MDBRow>
                <MDBCol size='3'>
                    <FighterSidePanel 
                        fighterName={firstFighter ? firstFighter.name : undefined} 
                        LockIn={() => dispatch(ActionCreators.ChangeActivePlayer(PlayerNumber.PlayerTwo))}
                        isLockedIn={activePlayer === PlayerNumber.PlayerTwo} />
                </MDBCol>
                <MDBCol size='6'>
                    <FighterContainer>
                        {fighters.map((f) => <FighterPortrait imageSource={fighterImages[f.name]} 
                            SelectFighter={() => dispatch(ActionCreators.SelectFighter(f.name, activePlayer))} 
                            chosenBy={f.chosenBy}/>)}
                    </FighterContainer>
                </MDBCol>
                <MDBCol size='3'>
                    <FighterSidePanel 
                        fighterName={secondFighter ? secondFighter.name : undefined}
                        LockIn={() => undefined}
                        isLockedIn={activePlayer === PlayerNumber.PlayerOne} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>;
}