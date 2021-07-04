import React from 'react'
import HomeCollection from '../components/HomeComponents/HomeCollection';
import { Container } from 'semantic-ui-react'

class Home extends React.Component {

    state = {
        home: [],
    }

    componentDidMount(){
        fetch('http://localhost:3000/home')
        .then(response => response.json())
        .then(this.setHomePage)
    }

    setHomePage = (homeCollection) => {
        this.setState({
            home: [...homeCollection]
        })
    }

    

    render() {
        return (
            <>
            <h1>Ancient Greek Gods</h1>
            <h2>Click on a card below to learn more about the gods!</h2>
            <br />
                <Container >
                    <HomeCollection home={this.state.home}  />
                </Container>
            </>
        )
    }

    

}

export default Home;