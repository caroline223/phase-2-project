import React from 'react';
import LocationCollection from '../components/LocationComponents/LocationCollection';
import LocationSearch from '../components/LocationComponents/LocationSearch'
import NavBar from '../container/NavBar';
import { Container } from 'semantic-ui-react';

class LocationContainer extends React.Component {

    state = {
        locations: [],  
        renderedLocations: [],
        searchInput: ''
    }

    componentDidMount(){
        fetch('http://localhost:5000/locations')
        .then(response => response.json())
        .then(this.setInitialLocations)
    }


    setInitialLocations = (locationCollection) => {
        //upon initial render, shows the entire collection of where the greek/roman heroes lived
        this.setState({
            locations: [...locationCollection],
            renderedLocations: [...locationCollection]
        })
    }

    

    filterSearchByInput = (input) => {
        console.log(input)
        return this.state.locations.filter(location => location.gods.toLowerCase().includes(input.toLowerCase())) 

    }

    handleSearchInput = (event) => {
        //allows the browser to filter the locations search by query. 
        //If empty, all of the gods' homes will show

        this.setState({
            searchInput: event.target.value
        })

        if(event.target.value === '' ) {
            this.setState({ renderedLocations: [...this.state.locations]})
        } else {
            this.setState({ renderedLocations: this.filterSearchByInput(event.target.value)})
        }

    }



render(){
    return (
        <>
            <NavBar />
            <h1>Home Sweet Home!</h1>
            <Container>
                <LocationSearch handleSearchInput={this.handleSearchInput} />
                <br />
                <LocationCollection locations={this.state.renderedLocations} />
            </Container>
            
        </>
    )

}

}

export default LocationContainer;