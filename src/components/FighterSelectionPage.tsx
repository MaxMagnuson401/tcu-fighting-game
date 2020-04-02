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
    grid-template-columns: auto auto auto auto;
    background-color: #696969;
    padding: 2px;
`;

export const FighterSelectionPage: React.FC = () => {

    const fighters = useSelector((state: IApplicationState) => state.fighter.fighters);
    const dispatch = useDispatch();

    return <>
        <FighterContainer>
            {fighters.map((f) => <FighterPortrait imageSource={fighterImages[f.name]} 
                SelectFighter={() => dispatch(ActionCreators.SelectFighter(f.name, PlayerNumber.PlayerOne))} 
                isSelected={f.chosenBy !== undefined}/>)}
        </FighterContainer>
    </>;
}