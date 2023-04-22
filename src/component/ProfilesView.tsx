import Accordion from "react-bootstrap/Accordion";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

export interface Profile {
    // define the response data types here
    age: number | null
    email: string
    _id: string
    gender: string
}

const ProfilesView = () => {
    const [data, setData] = useState<Profile[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Profile[]>('http://localhost:8080/profile');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <Container fluid className="my-container">
            <Row>
                <Col style={{ backgroundColor: 'black' }}>
                    <h1>Profiles Table</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProfileTable response={data} />
                </Col>
            </Row>
        </Container>
    );
};

// @ts-ignore
const ProfileTable = (props) => {
    const data = props.response
    return (
        <div>
            <Table striped bordered hover variant="white" className="my-table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item: Profile, index: number) => (
                    <tr key={index}>
                        <td>{item._id}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ProfilesView