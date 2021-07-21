import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import HeroVote from '../HeroComponents/HeroVote';

class  HeroInfo extends React.Component {

    state = {
        count: 0
    }

    increaseVote = () => {
        this.setState(({count}) => ({
            count: count + 1
        }))
    }

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
                        <HeroVote count={this.state.count} increaseVote={this.increaseVote} />
                    </Card.Description>
                </Card.Content>
            </Card>
                
        )
    }
   
}

export default HeroInfo;