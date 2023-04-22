import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ProfilesView, {Profile} from "./ProfilesView";
import {Profiler} from "inspector";
import {Alert, Modal} from "react-bootstrap";


// @ts-ignore
const ProfileForm = ({display}) => {
    const [validated, setValidated] = useState(false);
    const [age, setAge] = useState<number | null>(null);
    const [gender, setGender] = useState('')
    const [showModal, setShowModal] = useState(display);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        const profile: { gender: string; age: number | null } = {
            age, gender
        }
        setValidated(true);
        console.log(JSON.stringify(profile))


        try {
            const response = await fetch('http://localhost:8080/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profile)
            });

            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }

            console.log('Form data submitted successfully');
        } catch (error) {
            // @ts-ignore
            console.log('Error submitting form data:', error.message);
        }
        setShowModal(false);
    };

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAge = parseInt(e.target.value);
        if (newAge < 1 || newAge > 65) {
            setAge(null);
        } else {
            setAge(newAge);
        }
    };

    const isFormValid = () => {
        return age !== null && gender !== '';
    };

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Age and Gender</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="Enter age" value={age === null ? '' : age} onChange={handleAgeChange} isInvalid={age === null} />
                            <Form.Control.Feedback type="invalid">Age must be a number between 0 and 120</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicGender">
                            <Form.Label>Gender</Form.Label>
                            <div key={`inline-radio`} className="mb-3">
                                <Form.Check inline label="Male" name="gender" type="radio" id={`inline-radio-1`} value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                                <Form.Check inline label="Female" name="gender" type="radio" id={`inline-radio-2`} value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                            </div>
                            <Form.Control.Feedback type="invalid">Please select a gender</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={!isFormValid()}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            {!showModal && (
                <Alert variant="success">
                    Form data submitted successfully!
                </Alert>
            )}
        </>
    );
}

export default ProfileForm