import React from 'react';
import styled from 'styled-components';

const PortraitContainer = styled.div`
    width: 80px;
    height: 80px;
`

const StyledImage = styled.img`
    border: 5px solid black;
    height: 75px;
    width: 75px;
`;

export interface IFighterPortraitProps {
    imageSource: string;
}

export class FighterPortrait extends React.Component<IFighterPortraitProps> {

    public render() {
        const {imageSource} = this.props;
        return <>
            <PortraitContainer>
                <StyledImage src={imageSource} />
            </PortraitContainer>
        </>;
    }
}