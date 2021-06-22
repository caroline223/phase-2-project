import React from 'react';
import GodInfo from './GodInfo';
import { Card } from 'semantic-ui-react'

class GodCollection extends React.Component {


    renderGodInfo = () => {
        return this.props.gods.map(god => {
            return <GodInfo key={god.id} gods={ god } />
        })
    }

    render() {
        return (
            <Card.Group itemsPerRow={5}>
                {this.renderGodInfo()}
            </Card.Group>
        )
    }

}

export default GodCollection;