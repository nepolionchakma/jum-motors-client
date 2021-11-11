import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import initializeAuthentication from "../FireBase/firebase.initialize";

initializeAuthentication();


const useFireBase = () => {

    const auth = getAuth();
    const [name, setName] = useState();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [success, setSuccess] = useState();
    const [loginSuccess, setSuccessLogin] = useState();
    const [errorpass, setErrorpass] = useState("");


    // provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    //provide Sign Up Email,Password,name
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const nameChange = e => {
        setName(e.target.value);
    }

    // clear error
    const clearError = () => {
        setEmailError("");
        setPasswordError("");
    }
    // successLogin
    const successLogin = () => {
        setSuccessLogin("Successfully LogIn.");
    }

    // confirm SignUp
    const handleSignUp = e => {
        e.preventDefault();
        if (password.length < 6) {
            setErrorpass('Password at least 6 ');
            setSuccess("");
        }
        else {
            createNewUser(email, password, history);
            setErrorpass("");
            setSuccess("");
        }
    }


    // create new user
    const createNewUser = (email, password, displayName, history) => {
        clearError("");
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, password, name, "POST")
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => { })
                verifyEmail();
                setSuccess('Successfully sign up And Now Check Mail for Verify');
                history.replace("/");
            })
            .catch(error => {
                setError(error.code)
                setError(error.message)
            })
    }

    // user setup
    // const setUserName = () => {
    //     updateProfile(auth.currentUser, { displayName: name })
    //         .then(result => { })
    // }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => { })
    }
    const forgetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }
    // confirm Login
    const handleSignIn = e => {
        e.preventDefault();
        return logInUser(email, password)
    }
    // login email and password
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google log in
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    };

    // github login
    const handleGithubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    };

    // sign out
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    };
    // auth Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                // clearInput();
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, []);

    // Data Load
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://secure-lowlands-87242.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const saveUser = (email, password, displayName, method) => {
        const user = { email, password, displayName };
        fetch("https://secure-lowlands-87242.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        error,
        nameChange,
        handleEmail,
        handlePassword,
        handleSignUp,
        handleGoogleSignIn,
        handleGithubSignIn,
        handleSignOut,
        products,
        setProducts,
        forgetPassword,
        handleSignIn,
        loginSuccess,
        emailError,
        passwordError,
        errorpass, clearError, logInUser, success,
        setSuccessLogin, setError, setUser, successLogin,
    }

}
export default useFireBase;