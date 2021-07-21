import React from 'react'
import { Card } from 'semantic-ui-react'
import HomeInfo from '../HomeComponents/HomeInfo'

class HomeCollection extends React.Component {

    render() {
        return (
            <Card.Group itemsPerRow={2}>
                {this.props.home.map((homeObj, index) => <HomeInfo key={index} home={homeObj} />)}
            </Card.Group>

            
        )
    }

        

}

export default HomeCollection;