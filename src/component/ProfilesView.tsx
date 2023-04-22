import Accordion from "react-bootstrap/Accordion";
import React from "react";

// @ts-ignore
function ProfilesView(props) {
    return <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
                {JSON.stringify(props.data)}
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
}

export default ProfilesView