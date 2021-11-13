import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch("https://secure-lowlands-87242.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // setEmail("");
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <input
                    placeholder="Email"
                    label="email"
                    required
                    variant="standard"
                    type="email"
                    onBlur={handleOnBlur}
                    style={{ padding: "8px", border: "1px solid blue" }}
                ></input>
                <Button className="btn btn-primary" type="submit">Make admin</Button>
            </form>
            {success && <Alert className="my-4" severity="success">Make Admin successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;