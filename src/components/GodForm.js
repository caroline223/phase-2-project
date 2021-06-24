
import React from 'react';
import { Form } from 'semantic-ui-react';


class GodForm extends React.Component {

    state = {
        url: '',
        name: '',
        romanname: '',
        symbol: '',
        father: '',
        mother: '',
        power: '',
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


    handleNameChange = (event) => {
        this.setState({name : event.target.value})
    }

    handleRomanNameChange = (event) => {
        this.setState({romanname : event.target.value})
    }

    handleSymbolChange = (event) => {
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

    handleFormSubmit = (event) => {
        event.preventDefault();
        event.target.reset()
    }

render() {
    return (
        <div>
            <h3>Add A God!</h3>
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group widths="equal">
                    <Form.Input fluid label="Name" placeholder="Name" name="name"  value={this.state.name} onChange={this.handleNameChange} />
                    <Form.Input fluid label="Roman Name" placeholder="Roman Name" name="romanname" value={this.state.romanname} onChange={this.handleRomanNameChange} />
                    <Form.Input fluid label="Symbol" placeholder="Symbol" name="symbol" value={this.state.symbol} onChange={this.handleSymbolChange} />
                    <Form.Input fluid label="Father" placeholder="Father" name="father" value={this.state.father} onChange={this.handleFatherChange} />
                    <Form.Input fluid label="Mother" placeholder="Mother" name="mother" value={this.state.mother} onChange={this.handleMotherChange} />
                    <Form.Input fluid label="Power" placeholder="Power" name="power" value={this.state.power} onChange={this.handlePowerChange} />
                    <Form.Input fluid label="Image URL" placeholder="url" name="url" value={this.state.url} onChange={this.handleURLChange} />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
                <Form.Button><a href="http://localhost:3000/">Home</a></Form.Button>
            </Form>
        </div>
    )
}

}

export default GodForm;