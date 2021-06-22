import React from 'react';
import GodCollection from '../components/GodCollection';

class GodContainer extends React.Component {

    state = {
        gods: [],
        
    }

    componentDidMount(){
        fetch('http://localhost:5000/gods')
        .then(response => response.json())
        .then(data => this.setState({
            gods: data
        }))
    }

   /* godsToRender = () => {
        return this.state.gods.map((god) => {
            return <p key={god.id}>{god.name}: {god.romanname}</p>
        })
    }
    */



render(){
    return (
        <>
            <h1>Welcome to the Gods!</h1>
            <h2><a href="http://localhost:3000/form">Click here to add a God!</a></h2>
            <GodCollection />
            {/* {this.godsToRender()} */}
        </>
    )

}

}

export default GodContainer;