import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewLeisureActivityForm(){
    return(
        <Form>
            
            <Form.Group>
                <Form.Label>Pseudonym</Form.Label>
                <Form.Control type="text"/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Activity Type</Form.Label>
                <Form.Select size="text">
                    <option>Picnic at the Park</option>
                    <option>Picnic at the Beach</option>
                    <option>Frisbee</option>
                    <option>Pickup Soccer</option>
                    <option>Other Outdoor Sports</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Activity Description</Form.Label>
                <Form.Control type="text"/>
                <Form.Text>Please limit text to no more than N characters.</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>

            <Button type="submit">Submit</Button>

        </Form>
    )
}

export default NewLeisureActivityForm;