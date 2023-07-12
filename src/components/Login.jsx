import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

  //  axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault()
   

        let result = await fetch(
            'http://localhost:5000/login', {
                method: "post",
                body: JSON.stringify({email, password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            result = await result.json();
            console.warn(result);
            if (result.Status=='Success') {
                alert("Your login is successful.");
                navigate('/Menu');
                setEmail("");
                setPassword("");
            }else{
                alert(result);
            }
    }

    return(
        <div className="d-flex justify-content-center align-items-center xbg-secondary p-5 ">
      <div className="bg-white p-3  w-25 mb-5 mt-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          </form>
           <br></br>
          <p>If you don't have an account, please register below</p>
          <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            New Registration
          </Link>
        
      </div>
    </div>
    )
}

export default Login;