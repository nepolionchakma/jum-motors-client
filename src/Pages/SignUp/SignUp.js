import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {
    const {
        nameChange,
        handleEmail,
        handlePassword, handlePassword2,
        handleGoogleSignIn,
        handleGithubSignIn,
        handleSignUp,
        success, forgetPassword, errorpassempty,
        errorpass,
        errorEmail,
    } = useAuth();
    return (
        <div className="p-5 row m-0 ">
            <div className="col-lg-6 shadow py-4 mx-auto">
                <form onSubmit={handleSignUp}>
                    <FontAwesomeIcon className="text-danger fs-1" icon={faUserCircle} />
                    <h3>Please Sign Up</h3>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm-9">
                            <input onChange={nameChange} required type="text" placeholder="Your Name" className="form-control" id="name" />
                        </div>
                    </div>

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
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">ReType Password</label>
                        <div className="col-sm-9">
                            <input onChange={handlePassword2} required placeholder="Password" type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div className="text-danger fw-bold">{success}{errorpassempty}{errorpass}{errorEmail}</div>
                    <input type="submit" className="btn btn-primary fw-bold m-2" value="Sign Up" />
                    <button className="btn btn-danger fw-bold m-2" type="reset">Reset</button>
                    <Link to="/login" className="btn btn-primary fw-bold m-2">Log-In</Link>
                </form>
                <br />
                <Link className="text-danger " to="" onClick={forgetPassword}>Forget Password?</Link>
                <hr />
                <div>
                    <div>
                        <button onClick={handleGoogleSignIn} className="btn btn-danger"> <FontAwesomeIcon className="text-white fs-5" icon={faGoogle} /> Google</button>
                        <button onClick={handleGithubSignIn} className="btn btn-danger ms-3"> <FontAwesomeIcon className="text-white fs-5" icon={faGithub} /> Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;