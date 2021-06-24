import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class GodInfo extends React.Component {


    state = {
       side: 'front'
    }

   /* handleClick = () => {
        //toggle between the front and back of each card
        this.state.side === 'front' ? this.setState({side: 'back'}) : this.setState({side: 'front'})
    }
    */

    


    render() {

        const {name, romanname, power, symbol, father, mother, url } = this.props.gods
        return(
            <Card>
                <Image src={url} wrapped ui={false} alt="Not Available" />
                <Card.Content>
                    <Card.Header>
                        Greek name: { name } 
                        <br />
                        Roman name: { romanname } 
                    </Card.Header>
                    <Card.Description>
                        {symbol}
                        <br />
                        Father: { father }
                        <br />
                        Mother: { mother }
                        <br />
                        Power: { power }
                        <br />
                    </Card.Description>
                </Card.Content>
            </Card>
                
        )
    }

}

export default GodInfo;