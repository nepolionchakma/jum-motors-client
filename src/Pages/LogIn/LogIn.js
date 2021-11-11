import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory, useLocation } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../Hooks/useAuth";

const LogIn = () => {
    // destructuring
    const {
        handleGoogleSignIn, handleGithubSignIn, handleSignIn,
        handleEmail, handlePassword, forgetPassword, emailError, passwordError, loginSuccess, setUser, setSuccessLogin, setError
    } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || "/";

    // sign in with email and password
    const signInUser = (email, password) => {
        handleSignIn(email, password)
            .then(result => {
                setUser(result.user);
                history.replace(redirect_url);
                setSuccessLogin();
            })
            .catch((error) => {
                // Handle Errors here.
                setError(error.message);

            })
    }

    // Google Log in & Redirect
    const googleLogIn = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName);
                setSuccessLogin();
                history.replace(redirect_url);
            })
            .catch((error) => {
                // Handle Errors here.
                setError(error.message);

            })
    }
    // Github Log in & Redirect
    const githubLogIn = () => {
        handleGithubSignIn()
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName);
                setSuccessLogin();
                history.replace(redirect_url);
            })
            .catch((error) => {
                // Handle Errors here.
                setError(error.message);
            })
    }
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch("https://secure-lowlands-87242.herokuapp.com/users", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return (
        <div className="row p-5 m-0">
            <div className="col-lg-5 mx-auto">
                <div className=" shadow p-5">
                    <br />
                    <div className=" p-3">
                        <div className="text-danger fw-bold">{loginSuccess}{emailError}{passwordError}</div>
                        <form onSubmit={signInUser}>
                            <FontAwesomeIcon className="text-danger fs-1" icon={faUserCircle} />
                            <h3 className="py-4">Please Log-In</h3>

                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                    <input onChange={handleEmail} required placeholder="Email" type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                                <div className="col-sm-9">
                                    <input onChange={handlePassword} required placeholder="Password" type="password" className="form-control" id="inputPassword3" />
                                </div>
                            </div>

                            <input type="submit" className="btn btn-primary fw-bold m-2" value="Log-In" />
                            <Link to="/signup" className="btn btn-primary fw-bold m-2">Sign Up</Link>
                        </form>

                    </div>
                    <br />
                    <Link className="text-danger " to="" onClick={forgetPassword}>Forget Password?</Link>
                    <br />
                    <div className="text-danger fw-bold">{emailError}{passwordError}</div>
                    <hr />
                    <br />
                    <div>
                        <div>
                            <button onClick={googleLogIn} className="btn btn-danger"> <FontAwesomeIcon className="text-white fs-5" icon={faGoogle} /> Google</button>
                            <button onClick={githubLogIn} className="btn btn-danger ms-3"> <FontAwesomeIcon className="text-white fs-5" icon={faGithub} /> Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;