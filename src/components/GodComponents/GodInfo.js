import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class GodInfo extends React.Component {

    render() {

        const layout = {
            card : {
                backgroundColor: "#bec7a6", 
                opacity: "0.8",
                borderRadius: "40px"
            }
        }

        const {name, romanname, power, symbol, father, mother, url, description } = this.props.gods
        return(
            <Card style={layout.card}>
                <Image src={ url } className="cardImage" />
                <Card.Content className="cardDescription" >
                    <Card.Header>
                       { name } 
                    </Card.Header>
                    <Card.Description>
                        a.k.a. { romanname }
                        <br />
                        Symbol: {symbol}
                        <br />
                        Parents: { father } , { mother }
                        <br />
                        Power: { power }
                        <br />
                        Description: { description }
                        <br />
                    </Card.Description>
                </Card.Content>
            </Card>
                
        )
    }

}

export default GodInfo;