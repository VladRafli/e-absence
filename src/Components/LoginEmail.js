import React from 'react';
import { Link } from 'react-router-dom';

function LoginEmail(props) {
    return (
        <div className="content">
            <div className="layer">
                <div className="container">
                    <div className="banner">
                        <img src={props.logo} alt="Bina Nusantara University" className="logo" />
                        <p className="title">E-Absence</p>
                    </div>
                    <div className="form">
                        <form>
                            <input type="email" name="email" id="email" autoComplete="off" placeholder=" "/>
                            <label htmlFor="email">
                                <span>Email</span>
                            </label>
                        </form>
                    </div>
                    <div className="link">
                        <p>Don't have an account?</p>
                        <a href="#">Create an account</a>
                    </div>
                    <div className="button">
                        <Link to='password'>
                            <button>Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginEmail;