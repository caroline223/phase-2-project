import React from 'react'
import { Card } from 'semantic-ui-react'
import HomeInfo from '../HomeComponents/HomeInfo'

class HomeCollection extends React.Component {

    render() {

        <Card.Group itemsPerRow={2}>
             {this.props.home.map(homeObj => <HomeInfo key={homeObj.id} home={homeObj} />)}
        </Card.Group>
    }

}

export default HomeCollection;