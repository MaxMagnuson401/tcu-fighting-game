import React from 'react';
import styled from 'styled-components';
import { Players } from '../stores/Models';
import { fighterImages } from '../assets/assets';
import { FighterPortrait } from './FighterPortrait';

const FighterContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    background-color: #696969;
    padding: 2px;
`;

export const FighterSelectionPage: React.FC = () => {

    return <>
        <FighterContainer>
            <FighterPortrait imageSource={fighterImages[Players.Raymond]} />
            <FighterPortrait imageSource={fighterImages[Players.Robert]} />
        </FighterContainer>
    </>;
}