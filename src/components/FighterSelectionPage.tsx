import React from 'react';
import styled from 'styled-components';
import { Fighters, PlayerNumber } from '../stores/Models';
import { fighterImages } from '../assets/assets';
import { FighterPortrait } from './FighterPortrait';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '..';
import { ActionCreators } from '../stores/FighterSelectionStore';

const FighterContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    background-color: #696969;
    padding: 2px;
`;

export const FighterSelectionPage: React.FC = () => {

    const fighters = useSelector((state: IApplicationState) => state.fighter.fighters);
    const dispatch = useDispatch();

    return <>
        <FighterContainer>
            <FighterPortrait imageSource={fighterImages[Fighters.Raymond]} 
                SelectFighter={() => dispatch(ActionCreators.SelectFighter(Fighters.Raymond, PlayerNumber.PlayerOne))} 
                isSelected={fighters.find((f) => f.name === Fighters.Raymond)?.chosenBy === PlayerNumber.PlayerOne}/>
            <FighterPortrait imageSource={fighterImages[Fighters.Robert]} 
                SelectFighter={() => dispatch(ActionCreators.SelectFighter(Fighters.Robert, PlayerNumber.PlayerOne))} 
                isSelected={fighters.find((f) => f.name === Fighters.Robert)?.chosenBy === PlayerNumber.PlayerOne}/>
        </FighterContainer>
    </>;
}