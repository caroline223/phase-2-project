import React from 'react';

class GodContainer extends React.Component {

    state = {
        gods: []
    }

    componentDidMount(){
        fetch('http://localhost:5000/gods')
        .then(response => response.json())
        .then(data => this.setState({
            gods: data
        }))
    }
    godsToRender = () => {
        return this.state.gods.map((god) => {
            return <p>{god.name}: {god.romanname}</p>
        })
    }

render(){
    return (
        <>
            <h1>Welcome to the Gods!</h1>
            {this.godsToRender()}
        </>
    )

}

}

export default GodContainer;