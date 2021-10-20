import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import "./Register.css"
const Register = () => {
    const { emailSignin,setError,error } = UseAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleReg = (e) => {
        e.preventDefault()
        if(password.length<6)
        {
            setError("Please enter a valid password which is greater than 6 characters")

            
            return;

        }
        emailSignin(email, password,name)

    }

    return (
        <div className="register-form text-center">
        <div className="border shadow-lg p-3 mb-5 bg-body rounded p-5">
            <p className=" fw-bold fs-4">Create Acount</p>

            <form onSubmit={handleReg}>
                <input onBlur={(e) => { setName(e.target.value) }} type="text" placeholder="Username" required/> 
                <br />
                <input onBlur={e => { setEmail(e.target.value) }}
                    type="email"
                    placeholder="Enter your email"
                    required/>
                <br />
                <input onBlur={e => { setPassword(e.target.value) }}
                    type="Password"
                    placeholder="password"
                    required 
                />
                <br />
                <br />
                <div className="text-danger"> {error} </div>
                <input className="bg-info my-3" type="submit" value="Submit" />
            </form>
            <p>Already have an acount? <Link to="/login">Login</Link></p>
        </div>
    </div>
    )
};

export default Register;