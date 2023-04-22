import { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface ProfileQueryHistory {
    profileId: string;
    query: string;
    response: string;
}

interface Props {
    id: string;
}

function ProfileQueryHistoryTable(props: Props) {
    const [queryHistory, setQueryHistory] =
        useState<ProfileQueryHistory>({profileId: "",query: "", response: ""});


    useEffect(() => {
        const fetchQueryHistory = async () => {
            try {
                const response = await axios.get<ProfileQueryHistory>(`http://localhost:8080/profile/${props.id}`);
                setQueryHistory(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchQueryHistory();
    }, [props.id]);


    const renderQueryHistoryRows = () => {
        return  (
            <tr key={queryHistory.profileId}>
                <td>{queryHistory.profileId}</td>
                <td>{queryHistory.query}</td>
                <td>{queryHistory.response}</td>
            </tr>
        );
    };

    return (
        <Container>
            <Table striped bordered hover variant="white" className="my-table">
                <thead>
                <tr>
                    <th>Profile ID</th>
                    <th>Query</th>
                    <th>Response</th>
                </tr>
                </thead>
                <tbody>
                {renderQueryHistoryRows()}
                </tbody>
            </Table>
        </Container>
    );
}

export default ProfileQueryHistoryTable;
