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
            description: ''
    }

    handleOnChange = (event) => {
        console.log(this.state)
        this.setState({[event.target.name]: event.target.value})
    }


    handleFormSubmit = event => {
        event.preventDefault()
        this.setState( this.state )
        event.target.reset()
    }
    

    

render() {
    return (
        <div >
            <h3>Add A God!</h3>
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group widths="equal">
                    <Form.Input fluid label="Image URL" placeholder="url" name="url" value={this.state.url} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Name" placeholder="Name" name="name"  value={this.state.name} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Roman Name" placeholder="Roman Name" name="romanname" value={this.state.romanname} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Symbol" placeholder="Symbol" name="symbol" value={this.state.symbol} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Father" placeholder="Father" name="father" value={this.state.father} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Mother" placeholder="Mother" name="mother" value={this.state.mother} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Power" placeholder="Power" name="power" value={this.state.power} onChange={this.handleOnChange} />
                    <Form.Input fluid label="Description" placeholder="Description" name="description" value={this.state.description} onChange={this.handleOnChange} />   
                </Form.Group>
                <Form.Button>Submit</Form.Button>
                <Form.Button><a href="http://localhost:3000/gods">Back</a></Form.Button>
                <Form.Button><a href="http://localhost:3000/">Home</a></Form.Button>
            </Form>
        </div>
    )
}

}

export default GodForm;