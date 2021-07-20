import React from 'react';
import GodInfo from '../GodComponents/GodInfo';
import { Card } from 'semantic-ui-react'

function GodCollection() {
    
        return (
            <Card.Group itemsPerRow={3}>
                {this.props.gods.map((godObj, index) => <GodInfo key={index} gods={ godObj }/>)}
            </Card.Group>
        )
    
}

export default GodCollection;