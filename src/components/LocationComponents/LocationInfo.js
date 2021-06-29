import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class LocationInfo extends React.Component {

    render () {
        
        const {name, altname, myth, locationtype, gods, url } = this.props.locations
        return(
            <Card>
                <Image src={ url } wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                       { name } 
                    </Card.Header>
                    <Card.Description>
                        a.k.a. { altname }
                        <br />
                        Myth: { myth }
                        <br />
                        Location Type: { locationtype }
                        <br />
                        Gods: { gods }
                        <br />
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }

}

export default LocationInfo;