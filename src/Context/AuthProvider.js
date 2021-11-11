import React, { createContext } from 'react';
import useFireBase from '../Hooks/useFireBase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // call all context
    const allContext = useFireBase();

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;