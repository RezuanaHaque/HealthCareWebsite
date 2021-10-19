import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import Register from '../Register/Register';
import "./Login.css"

const Login = () => {
    const [email,password]=Register()
    const { googleSignin,emailSignin } = UseAuth()
    const handleReg = (e) => {
        e.preventDefault()
        // console.log(email, password);
        emailSignin(email, password)
    }
    return (
        <div className="login-form text-center">
            <div className="border shadow-lg p-3 mb-5 bg-body rounded p-5">
                <div className="d-flex justify-content-center align-items-center fw-bold fs-4 "><i class="fas fa-user"></i>
                    <p className="mt-4 ">  Login</p></div>
                <form onSubmit={handleReg}>
                    <input type="email" name="" placeholder="Enter your email" id="" />
                    <br />
                    <input type="password" name="" placeholder="password" id="" />
                    <br />
                    <input className="my-3 bg-info fw-bold" type="submit" value="Login" />
                </form>
                <p>New to Health-Care? <Link to="/register">Create Acount</Link></p>
                <Button variant="warning" onClick={googleSignin} className=" text-black fw-bold fw-2">Signin with google</Button>{' '}
            </div>
        </div>
    );
};

export default Login;