import React from 'react';
import useFireBase from '../../Hooks/useFireBase';
import DeleteUser from '../DeleteUser/DeleteUser';

const AllUsers = () => {
    const { usersData } = useFireBase();
    console.log(usersData)
    return (
        <div>
            <h6>all Users</h6>
            {/* {
                usersData.map(user =>
                    <div
                        key={user._id}
                    >
                        <li>{user.displayName}</li>
                        
                    </div>
                )
            } */}
            <DeleteUser></DeleteUser>
        </div>
    );
};

export default AllUsers;