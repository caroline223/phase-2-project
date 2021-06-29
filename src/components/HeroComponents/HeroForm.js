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

    handleOnChange = (event) => {
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
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
                    <Form.Input fluid label="Image URL" placeholder="url" name="url" value={this.state.url} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Name" placeholder="Name" name="name"  value={this.state.name} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Hero Type" placeholder="Hero Type" name="herotype" value={this.state.herotype} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Home" placeholder="Home" name="home" value={this.state.home} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Father" placeholder="Father" name="father" value={this.state.father} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Mother" placeholder="Mother" name="mother" value={this.state.mother} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Power" placeholder="Power" name="power" value={this.state.power} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Description" placeholder="Description" name="description" value={this.state.description} onChange={this.handleOnChange} />
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