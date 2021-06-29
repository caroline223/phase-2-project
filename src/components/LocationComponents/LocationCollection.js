import React from 'react';
import LocationInfo from '../LocationComponents/LocationInfo'
import { Card } from 'semantic-ui-react'


class LocationCollection extends React.Component {

    render() {

        return (
            <Card.Group itemsPerRow={3}>
                {this.props.locations.map((locationObj, index) => <LocationInfo key={index} locations={ locationObj }/>)}
            </Card.Group>
        )
    }


}

export default LocationCollection;