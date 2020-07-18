import React from 'react';
import { Link } from 'react-router-dom';

function LoginPassword(props) {
    return (
        <div className="content">
            <div className="layer">
                <div className="container">
                    <div className="banner">
                        <img src={props.logo} alt="Bina Nusantara University" className="logo" />
                        <p className="title">E-Absence</p>
                    </div>
                    <div className="back-menu">
                        <Link to="/email">
                            <i className="fas fa-arrow-left"></i>
                        </Link>
                        <p>Your Name</p>
                    </div>
                    <div className="form">
                        <form>
                            <input type="password" name="password" id="password" autoComplete="off"/>
                            <label htmlFor="password">
                                <span>Password</span>
                            </label>
                        </form>
                    </div>
                    <div className="forgot-pass">
                        <input type="checkbox" name="forgot-pass" id="forgot-pass" />
                        <label htmlFor="forgot-pass"> Keep signed in</label>
                    </div>
                    <div className="link">
                        <a href="#">Forgot Password</a>
                    </div>
                    <div className="button">
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPassword;