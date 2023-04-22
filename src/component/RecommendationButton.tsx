import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import ProfileForm from "./ProfileForm";
import IpAddressView from "./IpAddressView";
import {Container} from "react-bootstrap";

function RecommendationButton() {
    const [showForm, setShowForm] = useState(false);

    function handleOnClick() {
        setShowForm(!showForm)
    }

    return (
        <>
            <Container>
                <IpAddressView/>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <Button variant="primary" size="lg" onClick={handleOnClick}>Recommend 5 Books</Button>
                </div>
                {showForm && <ProfileForm display={true}/>}
            </Container>
        </>
    );
}


export default RecommendationButton;