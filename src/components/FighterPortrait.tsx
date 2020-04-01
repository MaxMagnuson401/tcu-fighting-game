import React from 'react';
import styled from 'styled-components';

const PortraitContainer = styled.div`
    width: 80px;
    height: 80px;
`

export interface IImageProps {
    isSelected: boolean;
}

const StyledImage = styled.img`
    border: 5px solid ${(props: IImageProps) => props.isSelected? 'purple' : 'black'};
    height: 75px;
    width: 75px;
`;

export interface IFighterPortraitProps {
    imageSource: string;
    isSelected: boolean;
    SelectFighter: () => void;
}

export class FighterPortrait extends React.Component<IFighterPortraitProps> {

    public render() {
        const { imageSource, isSelected } = this.props;
        return <>
            <PortraitContainer onClick={() => this.props.SelectFighter()}>
                <StyledImage isSelected={isSelected} 
                    src={imageSource} />
            </PortraitContainer>
        </>;
    }
}