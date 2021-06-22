
import React from 'react';
import { Form } from 'semantic-ui-react';


class GodForm extends React.Component {

render() {
    return (
        <div>
            <h3>Add A God!</h3>
            <Form>
                <Form.Group widths="equal">
                    <Form.Input fluid label="Name" placeholder="Name" name="name" />
                    <Form.Input fluid label="Roman Name" placeholder="Roman Name" name="romanname"/>
                    <Form.Input fluid label="Power" placeholder="Power" name="power"/>
                    <Form.Input fluid label="Symbol" placeholder="Symbol" name="symbol"/>
                    <Form.Input fluid label="Mother" placeholder="Mother" name="mother"/>
                    <Form.Input fluid label="Father" placeholder="Father" name="father"/>
                    <Form.Input fluid label="Image URL" placeholder="url" name="url"/>
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

}

export default GodForm;