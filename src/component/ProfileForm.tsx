import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function ProfileForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        defaultValue="30"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Check
                        inline
                        label="male"
                        name="group1"
                        type='radio'
                        id={`inline-radio-1`}
                    />
                    <Form.Check
                        inline
                        label="female"
                        name="group1"
                        type='radio'
                        id={`inline-radio-2`}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

            </Row>

            <Button type="submit">Go</Button>
        </Form>
    );
}

export default ProfileForm