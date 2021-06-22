import React from 'react';
import { Card } from 'semantic-ui-react'

class GodInfo extends React.Component {


    state = {
        side: 'front'
    }

    handleClick = () => {
        //toggle between the front and back of each card
        this.state.side === 'front' ? this.setState({side: 'back'}) : this.setState({side: 'front'})
    }


    render() {

        const {name, romanname, power, symbol, father, mother, url } = this.props.gods
        return(
            <Card>
                <div onClick={ this.handleClick }>
                    <div className="image">
                        <img src={url} alt="Not Available" />
                    </div> {/* put a conditional to differentiate between front info and back info */}
                    if (this.state.side === 'front') {
                    <div className="content">
                        <div className="header">{ name } </div>
                        <div className="header2">{ romanname } </div>
                        <div className="symbol"> { symbol }</div>
                    </div>
                    }
                else {
                    <div className="extra content">
                    <div className="parent1">{ father }</div>
                    <div className="parent2">{ mother }</div>
                    <div className="power"> { power }</div>
                </div>
                } 
                </div>   
            </Card>
        )
    }

}

export default GodInfo;