import React from 'react';
import styled from 'styled-components';
import { COLORS_MAP } from '../Constants';
import { PlayerNumber } from '../stores/Models';

const PortraitContainer = styled.div`
    width: 80px;
    height: 80px;
`

export interface IImageProps {
    borderColor: string;
}

const StyledImage = styled.img`
    border: 5px solid ${(props: IImageProps) => props.borderColor};
    height: 75px;
    width: 75px;
`;

export interface IFighterPortraitProps {
    imageSource: string;
    chosenBy?: PlayerNumber;
    SelectFighter: () => void;
}

export class FighterPortrait extends React.Component<IFighterPortraitProps> {

    public render() {
        const { imageSource, chosenBy } = this.props;
        return <>
            <PortraitContainer onClick={() => this.props.SelectFighter()}>
                <StyledImage borderColor={chosenBy ? COLORS_MAP[chosenBy].borderColor : 'black'} 
                    src={imageSource} />
            </PortraitContainer>
        </>;
    }
}