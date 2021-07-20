import React from 'react'
import { Card } from 'semantic-ui-react'
import HomeInfo from '../HomeComponents/HomeInfo'

function HomeCollection() {

        return (
            <Card.Group itemsPerRow={2}>
                {this.props.home.map((homeObj, index) => <HomeInfo key={index} home={homeObj} />)}
            </Card.Group>

            
        )

}

export default HomeCollection;