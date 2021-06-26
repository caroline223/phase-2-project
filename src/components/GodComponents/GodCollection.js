import React from 'react';
import GodInfo from '../GodComponents/GodInfo';
import { Card } from 'semantic-ui-react'

class GodCollection extends React.Component {
    
    render() {

        return (
            <Card.Group itemsPerRow={3}>
                {this.props.gods.map(godObj => <GodInfo key={godObj.id} gods={ godObj }/>)}
            </Card.Group>
        )
    }

}

export default GodCollection;