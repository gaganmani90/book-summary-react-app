import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Alert, Modal} from "react-bootstrap";

interface FormData {
    age: number,
    email: string,
    gender: string
}

// @ts-ignore
const ProfileForm = ({display, onData}) => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState<FormData>(
        {age: 21, email:'', gender: ""}
    )
    const [profileId, setProfileId] = useState('')
    const [books, setBooks] = useState('')
    const [showModal, setShowModal] = useState(display);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        console.log(JSON.stringify(formData))


        try {
            const response = await fetch('http://localhost:8080/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then((response) => response.json())
                .then((data) => setProfileId(data.id));

            /**
             * Make GET api call to fetch query response by profile-id
             */
            handleFetchProfile()
            console.log('Form data submitted successfully');
        } catch (error) {
            // @ts-ignore
            console.log('Error submitting form data:', error.message);
        }
        setShowModal(false);
    };

    const handleFetchProfile = () => {
        if (profileId) {
            fetch(`http://localhost:8080/profile/${profileId}`)
                .then((response) => response.json())
                .then((data) => setBooks(data.response)); // Handle the profile data here
        }
        onData(books)
    };

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAge = parseInt(e.target.value);
        if (newAge < 1 || newAge > 65) {
            setFormData({...formData, age: -1})
        } else {
            setFormData({...formData, age: newAge} )
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };


    const isFormValid = () => {
        return formData.gender !== '';
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
                            <Form.Control type="number" placeholder="Enter age" value={formData.age === null ? '' : formData.age}
                                          onChange={handleAgeChange} isInvalid={formData.age === null}/>
                            <Form.Control.Feedback type="invalid">Age must be a number between 0 and
                                120</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicGender">
                            <Form.Label>Gender</Form.Label>
                            <div key={`inline-radio`} className="mb-3">
                                <Form.Check inline label="Male" name="gender" type="radio" id={`inline-radio-1`}
                                            value="male" checked={formData.gender === 'male'}
                                            onChange={handleChange}/>
                                <Form.Check inline label="Female" name="gender" type="radio" id={`inline-radio-2`}
                                            value="female" checked={formData.gender === 'female'}
                                            onChange={handleChange}/>
                            </div>
                            <Form.Control.Feedback type="invalid">Please select a gender</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                            />
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