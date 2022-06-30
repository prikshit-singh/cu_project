import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"
import links from '../links';
import Navbar from '../components/homecomponents/Navbar';
import Navcontact from '../components/homecomponents/Navcontact';
import Footer from '../components/homecomponents/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css'

 function Signup(props) {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
var navigate = useNavigate()
// console.log(links.SignupLink)
  const userSignup =  () => {
        

        fetch("http://localhost:8080/usersignup", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:name,
                email: email,
                password_hash: password
            })
        })
            .then((response) => {
                // console.log(response.status)
                if (response.status !== 200) {
                    alert('user not created');
                    return 0;
                }
                //do something awesome that makes the world a better place
                return response.json()
            }).then(async (data) => {
                console.log(data)
                // window.localStorage.setItem('token',data.token);
                // navigate('/dashboard')
                // window.location.href = '/dashboard'
            }).catch(err => {
                console.log(err)
            })
    }

    const userName = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    }

    const userEmail = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    const userPassword = (e) => {
        // console.log(e.target.value)
        setPassword(e.target.value)
    }
    return (
        <>
        <Navcontact/>
        <Navbar/>
        <div className='mainDiv'>
            <div className="subdiv">

            </div>
            <div className="subdiv1">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="tect" value={name} placeholder="Enter Username" onChange={(e) => userName(e)} />
                      
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => userEmail(e)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} placeholder="Password" onChange={(e) => userPassword(e)} />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={() => { userSignup() }}>
                        Submit
                    </Button>
                </Form>
            </div>
           
        </div>
        <Footer/>

        </>
    );
}

export default Signup;