import React from 'react';
import { Button } from 'react-bootstrap';
import useFireBase from '../../Hooks/useFireBase';

const DeleteUser = () => {
    const { usersData, setUsersData } = useFireBase();
    const reload = () => {
        window.location.reload(false);
    }
    const handleDelete = id => {

        const url = `https://secure-lowlands-87242.herokuapp.com/users/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = usersData.filter(user => usersData._id !== id);
                    setUsersData(remaining);
                    reload();
                }

            })
    }
    return (
        <div className="row">
            {
                usersData.map(user =>
                    <div
                        key={user._id}
                        className="my-3 col-lg-4"
                    >

                        <h5>{user.displayName}</h5>
                        <h5>{user.email}</h5>
                        <Button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</Button>
                    </div>
                )
            }
        </div>
    );
};

export default DeleteUser;