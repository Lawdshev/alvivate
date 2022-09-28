import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Link,useNavigate } from 'react-router-dom';
import { useUserAuth } from '../utilities/UserAuthContextProvider';
import { useState } from 'react';
import GoogleButton from "react-google-button";

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const {logIn,googleSignIn} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit= async (e) => {
    e.preventDefault();
    setError('')
     try {
       await logIn(email,password)
       navigate('/Home/Home/TvShows')
     } catch (err) {
      setError(err.message)
     }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
        <>
        <div className="formbody">
          <div className="p-4 box">
            <h2 className="mb-3">Login</h2>
            {error && <Alert variant = 'danger'>{error}</Alert> }
            <Form onSubmit={handleSubmit} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  onChange= {(e)=>{setEmail(e.target.value)}}
                  required
                />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange= {(e)=>{setPassword(e.target.value)}}
                  required
                />
              </Form.Group>
    
              <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                  Log In
                </Button>
              </div>
            </Form>
            <hr />
            <div>
              <GoogleButton
                className="g-btn w-100"
                type="dark"
                onClick={handleGoogleSignIn}
              />
            </div>
            <div className="p-3 box mt-3 text-center">
            Don't have an account? <Link to="/Signup">Sign up</Link> 
          </div>
          </div>
          
          </div>
        </>
      );
}

export default Login;