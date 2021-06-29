import React from 'react';
import GodCollection from '../components/GodComponents/GodCollection';
import GodSearch from '../components/GodComponents/GodSearch'
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
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

    handleFormSubmit = (godCollection) => {
        //creating a fetch request to add a new god to the collection of gods
        fetch('http://localhost:5000/gods', this.postObjectFromGodCollection(godCollection))
        .then(response => response.json)
        .then(this.addNewGodToCollection)
    }

    postObjectFromGodCollection = (collection) => {
        return {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                name: collection.name,
                romanname: collection.romanname,
                symbol: collection.symbol,
                father: collection.father,
                mother: collection.mother,
                power: collection.power, 
                url: collection.url
            })
        }
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
            <NavBar />
            <h1>Land Of the Gods!</h1>
            <Link to={"/godform"}>Build A God!</Link>
            <Container>
                <GodSearch handleSearchInput={this.handleSearchInput} />
                <br />
                <GodCollection gods={this.state.renderedGods} />
            </Container>
            
        </>
    )

}

}

export default GodContainer;