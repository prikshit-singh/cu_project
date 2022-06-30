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

 function Login(props) {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
var navigate = useNavigate()
// console.log(links.loginLink)
  const userLogin =  () => {
        

        fetch("http://localhost:8080/userlogin", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: name,
                password: password
            })
        })
            .then((response) => {
                // console.log(response.status)
                if (response.status !== 200) {
                    alert('invalid credential');
                    return 0;
                }
                //do something awesome that makes the world a better place
                return response.json()
            }).then(async (data) => {
                // console.log(data)
                window.localStorage.setItem('token',data.token);
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
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => userName(e)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => userPassword(e)} />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={() => { userLogin() }}>
                        Submit
                    </Button>
                </Form>
            </div>
           
        </div>
        <Footer/>

        </>
    );
}

export default Login;