import React from 'react';
import GodCollection from '../components/GodCollection';
import GodSearch from '../components/GodSearch'
import { Container } from 'semantic-ui-react';

class GodContainer extends React.Component {

    state = {
        gods: [],  
        renderedGods: [],
        searchInput: ''
    }

    componentDidMount(){
        fetch('http://localhost:5000/gods')
        .then(response => response.json())
        .then(this.setInitialGods)
    }

  

   /* godsToRender = () => {
        return this.state.gods.map((god) => {
            return <p key={god.id}>{god.name}: {god.romanname}</p>
        })
    }
    */

    setInitialGods = (godCollection) => {
        //upon initial render, shows the entire collection of greek/roman gods
        this.setState({
            gods: [...godCollection],
            renderedGods: [...godCollection]
        })
    }

    

    addNewGodToCollection = (godObj) => {
        //receiving a god object as json and adding this god to the collection

        this.setState({gods: [...this.state.gods, godObj]})
        if(this.state.searchInput === ''){
            this.setState({ renderedGods: [...this.state.gods]})
        }
        else {
            this.setState({ renderedGods: [this.filterSearchByInput(this.state.searchInput)]})
        }
    }

    filterSearchByInput = (input) => {
        console.log(input)
        return this.state.gods.filter(god => god.name.toLowerCase().includes(input.toLowerCase()))

    }

    handleSearchInput = (event) => {
        //allows the browser to filter the gods search by query. 
        //If empty, all of the gods will show

        this.setState({
            searchInput: event.target.value
        })

        if(event.target.value === '' ) {
            this.setState({ renderedGods: [...this.state.gods]})
        } else {
            this.setState({ renderedGods: this.filterSearchByInput(event.target.value)})
        }

    }



render(){
    return (
        <>
            <h1>Welcome to the Gods!</h1>
            <h2><a href="http://localhost:3000/form">Click here to add a God!</a></h2>
            <Container>
                <GodSearch handleSearchInput={this.handleSearchInput} />
                <br />
                <GodCollection gods={this.state.renderedGods} />
                {/* {this.godsToRender()} */}  
            </Container>
            
        </>
    )

}

}

export default GodContainer;