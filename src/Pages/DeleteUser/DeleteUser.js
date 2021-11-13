import React from 'react';
import { Button } from 'react-bootstrap';
import useFireBase from '../../Hooks/useFireBase';

const DeleteUser = () => {

    const { usersData, setUsersData } = useFireBase();
    // const reload = () => {
    //     window.location.reload(false);
    // }
    // 

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
                    // reload();
                }

            })
    }
    return (
        <div className="row">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>


                {
                    usersData.map(user =>
                        <tbody
                            key={user._id}
                        >
                            <tr>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><Button className="btn btn-danger" onClick={() => handleDelete(user._id)}>
                                    Delete
                                </Button></td>

                            </tr>

                        </tbody>
                    )
                }
            </table>

        </div>
    );
};

export default DeleteUser;