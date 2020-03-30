import React from 'react'
import { MDBBox, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export interface IDiceProps {
    dieValue: number;
    displayValue: string;
    xPosition: number;
    yPosition: number;
}

export class Dice extends React.Component<IDiceProps> {

    public render() {
        const { displayValue, dieValue } = this.props;
        return (
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size='6'>{displayValue}:</MDBCol> 
                        <MDBCol size='6'>
                            {dieValue}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            )
    }
} 
