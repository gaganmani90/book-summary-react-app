import Accordion from "react-bootstrap/Accordion";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Profile, ProfileTable} from "../component/ProfileTable";

const ProfilePage = () => {
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


export default ProfilePage