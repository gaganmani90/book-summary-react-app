import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
export interface Profile {
    // define the response data types here
    age: number | null
    email: string
    _id: string
    gender: string
}

export const ProfileTable = (props: { response: any; }) => {
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
                        <td><Link to={`/profiles/${item._id}`}>{item._id}</Link></td>
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