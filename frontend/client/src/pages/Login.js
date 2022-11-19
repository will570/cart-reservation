import axios from "axios";
import { Form } from "react-bootstrap";
import React, { Component } from 'react'
import { useState } from 'react' 

import Button from '@mui/material/Button';

//import Cookies from "universal-cookie";
//const cookies = new Cookies();

// https://nathan-nodejs-mongodb-auth-app.herokuapp.com/login

export default function Login() {
    const [data, setData] = useState({
       uid: "",
       password: "" 
    });


    //const [myuid, setUid] = useState("");
    //const [mypassword, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            uid: data.uid,
            password: data.password
        }
        axios.post("localhost:8800/api/user/signIn", userData)
        .then((result) => {
            //setLogin(true);
            console.log(result.response.data);
            //cookies.set("TOKEN", result.data.token, {
            //    path: "/",
            //});

            //window.location.href = "/About";
        })
        .catch((error) => {
            console.log(error.response.data);
        });

        // set configurations
        /*const configuration = {
            method: "post",
            //url: "https://nathan-nodejs-mongodb-auth-app.herokuapp.com/login",
            url: "localhost:8800/api/user/signIn",
            data: {
                uid: uid,
                password: password,
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                setLogin(true);
                console.log(result);
                //cookies.set("TOKEN", result.data.token, {
                //    path: "/",
                //});

                window.location.href = "/About";
            })
            .catch((error) => {
                //error = new Error();
                console.log(error.response.data);
            });*/
    }

    return (
        <>
            <h2>Login</h2>
        <Form onSubmit={(e)=>handleSubmit(e)}>
            {/* uid */}
            <Form.Group controlId="formBasicEmail">
            <Form.Label>uid</Form.Label>
                    <Form.Control
                        type="uid"
                        name="uid"
                        value={data.uid}
                        onChange={handleChange}
                        placeholder="Enter uid" />
            </Form.Group>

            {/* password */}
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        placeholder="Password" />
            </Form.Group>

            {/* login button */}
            <Button
                    variant="primary"
                    type="submit"
                    onClick={(e)=>handleSubmit(e)}
                >
            Login
                </Button>

                
            {/* display success message */}
                {login ? (
                    <p className="text-success">You Are logged in Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not logged in!</p>
                )}
        </Form>
        </>
    )
}

