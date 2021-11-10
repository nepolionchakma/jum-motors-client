import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFireBase';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // call all context
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;