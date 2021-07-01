import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class HeroInfo extends React.Component {

    render() {

        const {name, herotype, power, father, mother, url, home, description } = this.props.heroes
        return(
            <Card >
                <Image src={ url } wrapped ui={false} />
                <Card.Content>
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