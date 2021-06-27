import React from 'react'
import HomeCollection from '../components/HomeComponents/HomeCollection';
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Home extends React.Component {

    state = {
        home: [],
    }

    componentDidMount(){
        fetch('http://localhost:5000/home')
        .then(response => response.json())
        .then(this.setHomePage)
    }

    setHomePage = (homeCollection) => {
        this.setState({
            home: [...homeCollection]
        })
    }

    handleClick = () => {
        if(this.state.home.type === "heroes"){
            <Link></Link>
        }
    }

    render() {
        return (
            <>
            <h1>Ancient Greek Gods</h1>
                <Container>
                    <HomeCollection home={this.state.home} onClick={this.handleClick} />
                </Container>
            </>
        )
    }

    

}

export default Home;