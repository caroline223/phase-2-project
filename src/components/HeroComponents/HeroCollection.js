import React from 'react';
import HeroInfo from '../HeroComponents/HeroInfo';
import { Card } from 'semantic-ui-react'

class HeroCollection extends React.Component {
    
    render() {

        return (
            <Card.Group itemsPerRow={3}>
                {this.props.heroes.map(heroObj => <HeroInfo key={heroObj.id} heroes={ heroObj }/>)}
            </Card.Group>
        )
    }

}

export default HeroCollection;