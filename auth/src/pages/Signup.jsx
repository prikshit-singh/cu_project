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
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
var navigate = useNavigate()
// console.log(links.SignupLink)
  const userSignup =  () => {
        if(!phone){
            alert('enter phone')
            return 0;
        }
        if(!name){
            alert('enter username')
            return 0;
        }
        if(!password){
            alert('enter password')
            return 0;
        }
        var origphone = `+91${phone}`
        fetch("http://localhost:8080/usersignup", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:name,
                phone: origphone,
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
                alert("user created, please log in now")
                return response.json()
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
        setPhone(e.target.value)
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
                        <Form.Control type="text" value={name} placeholder="Enter Username" onChange={(e) => userName(e)} />
                      
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={phone} placeholder="Enter email" onChange={(e) => userEmail(e)} />
                        <Form.Text className="text-muted">
                            We'll never share your details with anyone else.
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