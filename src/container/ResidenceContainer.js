import React from 'react';
import ResidenceCollection from '../components/ResidenceComponents/ResidenceCollection';
import ResidenceSearch from '../components/ResidenceComponents/ResidenceSearch'
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';

class ResidenceContainer extends React.Component {

    state = {
        residences: [],  
        renderedResidences: [],
        searchInput: ''
    }

    componentDidMount(){
        fetch('http://localhost:3000/residences')
        .then(response => response.json())
        .then(this.setInitialResidences)
    }


    setInitialResidences = (residenceCollection) => {
        //upon initial render, shows the entire collection of where the greek/roman heroes lived
        this.setState({
            residences: [...residenceCollection],
            renderedResidences: [...residenceCollection]
        })
    }

    

    filterSearchByInput = (input) => {
        console.log(input)
        return this.state.residences.filter(residence => residence.gods.toLowerCase().includes(input.toLowerCase())) 

    }

    handleSearchInput = (event) => {
        //allows the browser to filter the locations search by query. 
        //If empty, all of the gods' homes will show

        this.setState({
            searchInput: event.target.value
        })

        if(event.target.value === '' ) {
            this.setState({ renderedResidences: [...this.state.residences]})
        } else {
            this.setState({ renderedResidences: this.filterSearchByInput(event.target.value)})
        }

    }



render(){
    return (
        <>
            <NavBar />
            <br />
            <h1>Home Sweet Home!</h1>
            <br />
            <Container>
                <ResidenceSearch handleSearchInput={this.handleSearchInput} />
                <br />
                <br />
                <ResidenceCollection residences={this.state.renderedResidences} />
            </Container>
            
        </>
    )

}

}

export default ResidenceContainer;