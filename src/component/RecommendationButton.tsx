import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ProfileForm from "./ProfileForm";

function RecommendationButton() {
    const [showForm, setShowForm] = useState(false);
    function handleOnClick() {
        setShowForm(!showForm)
    }
    return (
        <>
            <Button variant="primary" onClick={handleOnClick}>Recommend 5 Books</Button>
            {showForm && <ProfileForm />}
        </>
    );
}



export default RecommendationButton;