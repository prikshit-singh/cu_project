import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"
import links from '../links';
import Navbar from '../components/homecomponents/Navbar';
import Navcontact from '../components/homecomponents/Navcontact';
import Footer from '../components/homecomponents/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css'

function Login(props) {
    const [phone, setPhone] = useState()
    const [otp, setOtp] = useState()
    var navigate = useNavigate()
    // console.log(links.loginLink)
    const userLogin = () => {
        if(!otp){
            alert("enter otp")
        }
       var intotp = parseInt(otp)
        fetch("http://localhost:8080/userlogin", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone:phone,
                otp:intotp
            })
        })
            .then((response) => {
                // console.log(response.status)
                if (response.status !== 200) {
                    alert('invalid otp');
                    return 0;
                }
                //do something awesome that makes the world a better place
                alert("you are logged in ")
                return response.json()
            }).catch(err => {
                console.log(err)
            })
    }

    const getOtp = () => {
        fetch("http://localhost:8080/sendotp", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone
            })
        }).then((response) => {
            // console.log(response.status)
            if (response.status !== 200) {
                alert('invalid credential');
                return 0;
            }
            return response.json()
        }).then(async (data) => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }

    const userName = (e) => {
        // console.log(e.target.value)
        setPhone(`+91${e.target.value}`)
    }
    const userPassword = (e) => {
        // console.log(e.target.value)
        setOtp(e.target.value)
        console.log(typeof(e.target.value))
    }
    return (
        <>
            <Navcontact />
            <Navbar />
            <div className='mainDiv'>
                <div className="subdiv">

                </div>
                <div className="subdiv1">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="string" placeholder="Enter phone" onChange={(e) => userName(e)} />
                            <Form.Text className="text-muted">
                                We'll never share your details with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>OTP</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => userPassword(e)} />
                            <Form.Text className="text-muted" onClick={(e) => { getOtp(e) }}>
                                click here to get otp
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={() => { userLogin() }}>
                            Submit
                        </Button>
                    </Form>
                </div>

            </div>
            <Footer />

        </>
    );
}

export default Login;