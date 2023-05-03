import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import ProfileForm from "./ProfileForm";
import IpAddressView from "./IpAddressView";
import {Container} from "react-bootstrap";
import BookRecommendationsView from "./BookRecommendationsView";


function RecommendationButton() {
    const [showForm, setShowForm] = useState(false);
    const [response, setResponse] = useState('')

    function handleOnClick() {
        setShowForm(!showForm)
    }

    function handleBooksResponse(data: string) {
        console.log(`handlebook response data: ${data}`)
        setResponse(data)
    }

    return (
        <>
            <Container>
                <IpAddressView/>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <Button variant="primary" size="lg" onClick={handleOnClick}>Recommend 5 Books</Button>
                </div>
                {showForm && <ProfileForm display={true} onData={handleBooksResponse}/>}
                <BookRecommendationsView response={response} />
            </Container>
        </>
    );
}


export default RecommendationButton;