import React from 'react';
import { Form } from 'semantic-ui-react';


class HeroForm extends React.Component {

    state = {
        url: '',
        name: '',
        herotype: '',
        home: '',
        father: '',
        mother: '',
        power: '',
        description: ''
    }

    handleFormSubmit = (heroCollection) => {
        //creating a fetch request to add a new god to the collection of gods
        fetch('http://localhost:5000/heroes', this.postObjectFromHeroCollection(heroCollection))
        .then(response => response.json)
        .then(this.addNewHeroToCollection)
    }

    postObjectFromHeroCollection = (collection) => {
        return {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                name: collection.name,
                herotype: collection.herotype,
                home: collection.home,
                father: collection.father,
                mother: collection.mother,
                power: collection.power, 
                url: collection.url
            })
        }
    }


    handleNameChange = (event) => {
        this.setState({name : event.target.value})
    }

    handleHeroTypeChange = (event) => {
        this.setState({romanname : event.target.value})
    }

    handleHomeChange = (event) => {
        this.setState({symbol : event.target.value})
    }

    handleFatherChange = (event) => {
        this.setState({father : event.target.value})
    }

    handleMotherChange = (event) => {
        this.setState({mother : event.target.value})
    }

    handlePowerChange = (event) => {
        this.setState({power : event.target.value})
    }
    handleURLChange = (event) => {
        this.setState({url: event.target.value})
    }
    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        event.target.reset()
    }

render() {
    return (
        <div>
            <h3>Build A Hero</h3>
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group widths="equal">
                    <Form.Input fluid label="Image URL" placeholder="url" name="url" value={this.state.url} onChange={this.handleURLChange} />
                    <Form.Input fluid label="Name" placeholder="Name" name="name"  value={this.state.name} onChange={this.handleNameChange} />
                    <Form.Input fluid label="Hero Type" placeholder="Hero Type" name="herotype" value={this.state.herotype} onChange={this.handleHeroTypeChange} />
                    <Form.Input fluid label="Home" placeholder="Home" name="home" value={this.state.home} onChange={this.handleHomeChange} />
                    <Form.Input fluid label="Father" placeholder="Father" name="father" value={this.state.father} onChange={this.handleFatherChange} />
                    <Form.Input fluid label="Mother" placeholder="Mother" name="mother" value={this.state.mother} onChange={this.handleMotherChange} />
                    <Form.Input fluid label="Power" placeholder="Power" name="power" value={this.state.power} onChange={this.handlePowerChange} />
                    <Form.Input fluid label="Description" placeholder="Description" name="description" value={this.state.description} onChange={this.handleDescriptionChange} />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
                <Form.Button><a href="http://localhost:3000/heroes">Back</a></Form.Button>
                <Form.Button><a href="http://localhost:3000/">Home</a></Form.Button>
            </Form>
        </div>
    )
}

}

export default HeroForm;