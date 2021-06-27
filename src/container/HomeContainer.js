import React from 'react'
import { Image, Card } from 'semantic-ui-react'

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

    

}

export default Home;