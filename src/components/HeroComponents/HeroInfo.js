import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class  HeroInfo extends React.Component {

    render() {
        const layout = {
            card : {
                backgroundColor: "#bec7a6", 
                opacity: "0.8",
                borderRadius: "40px"
            }
        }

        const {name, herotype, power, father, mother, url, home, description } = this.props.heroes
        return(
            <Card style={layout.card}>
                <Image src={ url } className="cardImage"  />
                <Card.Content className="cardDescription">
                    <Card.Header>
                       { name } 
                    </Card.Header>
                    <Card.Description>
                        Herotype: { herotype }
                        <br />
                        Home: { home }
                        <br />
                        Parents: { father } , { mother }
                        <br />
                        Power: { power }
                        <br />
                        Description: { description }
                    </Card.Description>
                </Card.Content>
            </Card>
                
        )
    }
   
}

export default HeroInfo;