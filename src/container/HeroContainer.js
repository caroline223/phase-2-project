import React from 'react';
import HeroCollection from '../components/HeroComponents/HeroCollection';
import HeroSearch from '../components/HeroComponents/HeroSearch'
import NavBar from '../container/NavBar';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class HeroContainer extends React.Component {

    state = {
        heroes: [],  
        renderedHeroes: [],
        searchInput: ''
    }

    componentDidMount(){
        fetch('http://localhost:5000/heroes')
        .then(response => response.json())
        .then(this.setInitialHeroes)
    }


    setInitialHeroes = (heroCollection) => {
        //upon initial render, shows the entire collection of greek/roman heroes
        this.setState({
            heroes: [...heroCollection],
            renderedHeroes: [...heroCollection]
        })
    }

    

    addNewHeroToCollection = (heroObj) => {
        //receiving a god object as json and adding this god to the collection

        this.setState({heroes: [...this.state.heroes, heroObj]})
        if(this.state.searchInput === ''){
            this.setState({ renderedHeroes: [...this.state.heroes]})
        }
        else {
            this.setState({ renderedHeroes: [this.filterSearchByInput(this.state.searchInput)]})
        }
    }

    filterSearchByInput = (input) => {
        console.log(input)
        return this.state.heroes.filter(hero => hero.name.toLowerCase().includes(input.toLowerCase())) 

    }

    handleSearchInput = (event) => {
        //allows the browser to filter the heroes search by query. 
        //If empty, all of the gods will show

        this.setState({
            searchInput: event.target.value
        })

        if(event.target.value === '' ) {
            this.setState({ renderedHeroes: [...this.state.heroes]})
        } else {
            this.setState({ renderedHeroes: this.filterSearchByInput(event.target.value)})
        }

    }



render(){
    return (
        <>
            <NavBar />
            <h1>Mighty Heroes!</h1>
           <Link to={'/heroform'}>Build a Hero!</Link>
            <Container>
                <HeroSearch handleSearchInput={this.handleSearchInput} />
                <br />
                <HeroCollection heroes={this.state.renderedHeroes} />
            </Container>
            
        </>
    )

}

}

export default HeroContainer;