import React from 'react';
import { useSelector } from 'react-redux';
import { IApplicationState } from '..';
import { Page } from '../stores/Models';
import { FighterSelectionPage } from './FighterSelectionPage';
import { BattleScreen } from './BattleScreen';


export const Home: React.FC = () => {

    const currentPage = useSelector((state: IApplicationState) => state.fighter.currentScreen);
   
    return <>
        {currentPage === Page.CharacterSelection ? <FighterSelectionPage /> : <BattleScreen />}
    </>
}