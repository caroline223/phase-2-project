import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class GodInfo extends React.Component {



    render() {

        const {name, romanname, power, symbol, father, mother, url, description } = this.props.gods
        return(
            <Card>
                <Image src={ url } wrapped ui={false} />
                <Card.Content>
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