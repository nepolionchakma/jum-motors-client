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
    const [password2, setPassword2] = useState("");
    const history = useHistory();
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [success, setSuccess] = useState();
    const [loginSuccess, setSuccessLogin] = useState();
    const [errorpass, setErrorpass] = useState("");
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://secure-lowlands-87242.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
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
    const handlePassword2 = e => {
        setPassword2(e.target.value);
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
        if (password !== password2) {
            alert("Password Not Match");
            return
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
        setIsLoading(true);
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
            .finally(() => setIsLoading(false));
    }


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
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };
    // auth Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                // clearInput();
                setUser(user);
                // getIdToken(user)
                //     .then(idToken => {
                //         setToken(idToken);
                //     })
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    //Products Data Load
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://secure-lowlands-87242.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
        setIsLoading(false);
    }, []);


    // Review Data Load
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://secure-lowlands-87242.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
        setIsLoading(false);
    }, []);

    // orders Data Load
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("https://secure-lowlands-87242.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
        setIsLoading(false);
    }, []);
    // console.log(orders)

    // UserData Load
    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        fetch("https://secure-lowlands-87242.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUsersData(data))
        setIsLoading(false);
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
        setIsLoading(false);
    }

    return {
        user,
        error,
        nameChange,
        handleEmail,
        handlePassword, handlePassword2,
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
        passwordError, isLoading, orders, setOrders, setIsLoading,
        errorpass, clearError, logInUser, success, reviews, usersData, setUsersData,
        setSuccessLogin, setError, setUser, successLogin, admin,
        // token
    }

}
export default useFireBase;