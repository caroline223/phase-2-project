import React from 'react'
import { Card, Image } from 'semantic-ui-react'


class ResidenceInfo extends React.Component {
    

    render() {

        const layout = {
            card : {
                backgroundColor: "#bec7a6", 
                opacity: "0.8",
                borderRadius: "40px"
            }
        }
        
        const { name, altname, myth, locationtype, gods, url } = this.props.residences
        
        return(
                <Card style={layout.card}>
                    <Image src={ url } className="cardImage"  />
                    <Card.Content className="cardDescription">
                        <Card.Header >
                        { name } 
                        </Card.Header>
                        <Card.Description >
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

export default ResidenceInfo;