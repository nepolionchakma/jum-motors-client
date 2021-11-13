import React from 'react';
// import useFireBase from '../../Hooks/useFireBase';
import DeleteUser from '../DeleteUser/DeleteUser';

const AllUsers = () => {
    // const { usersData } = useFireBase();
    // console.log(usersData)
    return (
        <div>
            <h4 className="my-5 fw-bold text-danger">All Users</h4>
            <DeleteUser></DeleteUser>
        </div>
    );
};

export default AllUsers;