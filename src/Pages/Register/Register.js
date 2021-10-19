import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import "./Register.css"
const Register = () => {
    const { emailSignin } = UseAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleReg = (e) => {
        e.preventDefault()
        // console.log(email, password);
        emailSignin(email, password)
    }

    return [(
        <div className="register-form text-center">
            <div className="border shadow-lg p-3 mb-5 bg-body rounded p-5">
                <p className=" fw-bold fs-4">Create Acount</p>
                <form onSubmit={handleReg}>
                    <input onBlur={e => { setEmail(e.target.value) }}
                        type="email" name=""
                        placeholder="Enter your email"
                        required id="" />
                    <br />
                    <input onBlur={e => { setPassword(e.target.value) }}
                        type="Password" name=""
                        placeholder="password"
                        required id=""
                    />
                    <br />
                    <input type="password" name="" placeholder="Confirm password" required id="" />
                    <br />
                    <input className="bg-info my-3" type="submit" value="Submit" />
                </form>
                <p>Already have an acount? <Link to="/login">Login</Link></p>
            </div>
        </div>
    ),email,password]
};

export default Register;