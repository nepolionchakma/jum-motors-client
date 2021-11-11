import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
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

            })
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="email"
                    variant="standard"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <Button type="submit">Make admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;