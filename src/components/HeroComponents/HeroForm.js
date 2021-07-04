import React from 'react';
import { Form } from 'semantic-ui-react';

const defaultState = {
    url: '',
    name: '',
    herotype: '',
    home: '',
    father: '',
    mother: '',
    power: '',
    description: ''
}

class HeroForm extends React.Component {

    state = {...defaultState}

    handleOnChange = (event) => {
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        //creating a fetch request to add a new god to the collection of gods
        event.preventDefault()
        fetch('http://localhost:5000/heroes', this.postObjectFromHeroCollection())
        .then(response => response.json)
        .then(data => this.props.history.push('/heroes'))
        this.setState(defaultState)
    }

    postObjectFromHeroCollection = (collection) => {
        return {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify(this.state)
        }
    }

render() {
    return (
        <div>
            <h1>Build A Hero</h1>
            <Form onSubmit={this.handleFormSubmit}>
                <div className="formField"> 
                <Form.Field>
                    <label style={{color: 'white'}}>Image URL</label>
                    <input
                        placeholder="url"
                        name="url"
                        value={this.state.url}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label style={{color: 'white'}}>Name</label>
                    <input 
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label style={{color: 'white'}}>Hero Type</label>
                    <input 
                        placeholder="Hero Type"
                        name="herotype"
                        value={this.state.herotype}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label style={{color: 'white'}}>Home</label>
                    <input 
                        placeholder="Home"
                        name="home"
                        value={this.state.home}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                    
                <Form.Field>
                    <label style={{color: 'white'}}>Father</label>
                    <input 
                        placeholder="Father"
                        name="father"
                        value={this.state.father}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                    
                <Form.Field>
                    <label style={{color: 'white'}}>Mother</label>
                    <input 
                        placeholder="Mother"
                        name="mother"
                        value={this.state.mother}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>

                <Form.Field>
                    <label style={{color: 'white'}}>Power</label>
                    <input 
                        placeholder="Power"
                        name="power"
                        value={this.state.power}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>

                <Form.Field>
                    <label style={{color: 'white'}}>Description</label>
                    <textarea
                        placeholder="Description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
            </div>
              
                <div className="formButtonPosition">
                    <button className="formButton">Submit</button>
                    <br />
                        <button className="formButton"><a href="http://localhost:3001/heroes">Back</a></button>
                        <button className="formButton"><a href="http://localhost:3001/">Home</a></button>
                </div>
            </Form>
        </div>
    )
}

}

export default HeroForm;