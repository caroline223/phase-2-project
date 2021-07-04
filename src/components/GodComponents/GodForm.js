import React from 'react';
import { Form } from 'semantic-ui-react';

const defaultState = {
    url: '',
    name: '',
    romanname: '',
    symbol: '',
    father: '',
    mother: '',
    power: '',
    description: ''
}

class GodForm extends React.Component {

    state = {...defaultState}


    handleOnChange = (event) => {
        console.log(this.state)
        this.setState({[event.target.name]: event.target.value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        //creating a fetch request to add a new god to the collection of gods
        fetch('http://localhost:3000/gods', this.postObjectFromGodCollection())
        .then(response => response.json())
        .then(data => this.props.history.push('/gods'))
        this.setState(defaultState)
    }

    postObjectFromGodCollection = () => {
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
        <div >
            <br />
            <h1>Add A God!</h1>
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
                    <label style={{color: 'white'}}>Roman Name</label>
                    <input 
                        placeholder="Roman Name"
                        name="romanname"
                        value={this.state.romanname}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label style={{color: 'white'}}>Symbol</label>
                    <input 
                        placeholder="Symbol"
                        name="symbol"
                        value={this.state.symbol}
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
                
               <div className="formButton">
                <Form.Button style={{color: "black"}}>Submit</Form.Button>
               </div>
                <br />
               <div className="formButton">
                <Form.Button><a href="http://localhost:3000/gods">Back</a></Form.Button>
                <Form.Button><a href="http://localhost:3000/">Home</a></Form.Button>
               </div>
               
                
            </Form>
        </div>
    )
}

}

export default GodForm;