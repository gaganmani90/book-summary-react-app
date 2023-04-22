import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ProfilesView, {Profile} from "./ProfilesView";
import {Profiler} from "inspector";


function ProfileForm() {
    const [validated, setValidated] = useState(false);
    const [age, setAge] = useState<number | null>(null);
    const [gender, setGender] = useState('')

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        const profile: { gender: string; age: number | null } = {
            age, gender
        }
        setValidated(true);
        console.log(JSON.stringify(profile))
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
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" value={age === null ? '' : age} onChange={handleAgeChange} isInvalid={age === null} />
                    <Form.Control.Feedback type="invalid">Age must be a number between 20 and 65</Form.Control.Feedback>
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
        </>
    );
}

export default ProfileForm