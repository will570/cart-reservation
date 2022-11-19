import axios from "axios";
import { Form, Button } from "react-bootstrap";
import React from 'react'
import { useState } from 'react' 

// https://nathan-nodejs-mongodb-auth-app.herokuapp.com/register


export default function Register() {

    const [email, setEmail] = useState("");
    const [uname, setName] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // set configurations
        const configuration = {
            method: "post",
            url: "https://nathan-nodejs-mongodb-auth-app.herokuapp.com/register",
            data: {
                email: email,
                name: uname,
                password: password,
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                setRegister(true);
                console.log(result);

                window.location.href = "/Login";
            })
            .catch((error) => {
                //error = new Error();
                console.log(error.response.data);
            });
    }

    return (
        <>
        <h2>Register</h2>
        <Form onSubmit={(e)=>handleSubmit(e)}>
            {/* name */}
            <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        name="name"
                        value={uname}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name" />
            </Form.Group>
                
            {/* email */}
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email" />
            </Form.Group>

            {/* password */}
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
            </Form.Group>

            {/* submit button */}
                <Button
                    variant="primary"
                    type="submit"
                    onClick={(e)=>handleSubmit(e)}
                >
                Register
                </Button>
            {/* display success message */}
                {register ? (
                    <p className="text-success">You Are Registered Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Registered</p>
                )}
        </Form>
        </>
    )
}
