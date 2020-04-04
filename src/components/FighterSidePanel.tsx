import React from 'react';
import { Fighters } from '../stores/Models';
import { fighterImages } from '../assets/assets';

export interface IFighterSidePanelProps {
    fighterName?: Fighters;
    isLockedIn: boolean;
    LockIn: () => void;
}

export class FighterSidePanel extends React.Component<IFighterSidePanelProps> {

    public render() {
        const { fighterName, isLockedIn, LockIn } = this.props;
        
        return <>
            {fighterName && fighterName}
            {fighterName && <img src={fighterImages[fighterName]} width={75} height={75} />}
            <button onClick={() => LockIn()} disabled={isLockedIn}>Lock in Selection</button>
        </>;
    }
}