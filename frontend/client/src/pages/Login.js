import React, {useState} from 'react'; 
import {Paper, Grid, Typography, Container, Button} from '@material-ui/core'; 
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

import Input from '../components/Authentication/Input'; 
import useAuth from '../hooks/useAuth';
import logo from '../image/Cartgoers-logos.jpeg';

const LOGIN_URL = '/user/signIn';

//Styling 
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.light,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(8)
  }));

const SubmitButton = styled(Button) (({ theme }) => ({
    margin: theme.spacing(3, 0, 2), 
    color: theme.palette.text.primary
})); 

//Login function 
const Login = () => {

    //set auth, auth data needed for login component 
    //if successfully authenticated when login, set new auth state and store in context
    const { setAuth } = useAuth();  

    //navigation 
    const navigate = useNavigate(); 
    
    //set initial field data of login form 
    const initialState = {
        uid: '',
        password: '', 
        isAdmin: false 
    }; 

    //sets field data of login form 
    const [loginData, setLoginData] = useState(initialState); 

    //error message 
    const [errMsg, setErrMsg] = useState(null); 

    //used by each input 
    const handleChange = (e) => {
        const value = e.target.value;
        setLoginData({ 
            ...loginData, 
            [e.target.name]: value 
        });  //change the ones according to the input 
    }; 

    //handles button submission of login 
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        console.log(loginData); 

        const uid = loginData.uid; 
        const password = loginData.password; 

        if (uid === "000000000")
        {
            loginData.isAdmin = true; 
        }

        const isAdmin = loginData.isAdmin; 

        try { //LOGIN_URL will attach itself to baseURL 
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({uid, password}),
                {
                    headers: { 'Content-Type': 'application/json'}, 
                    //withCredentials: true
                }
            );
            
            const token = response.data.token; 
            localStorage.setItem("userToken", JSON.stringify(response.data.token));
            localStorage.setItem("userID", uid); 
            localStorage.setItem("adminStatus", JSON.stringify(isAdmin)); 

            setAuth({ uid, password, token, isAdmin }); 
            
            console.log(JSON.stringify(response.data.token));
            console.log(JSON.stringify(response));

            navigate("/reservation", {replace : true}); 
        } catch (err) {

            if (!err.response) {
                setErrMsg('No server response'); //if there is no response 
            } else if (err.response.status === 400) 
            {
                setErrMsg('Invalid input fields'); 
            } else if (err.response.status === 404)
            {
                setErrMsg('User not found'); 
            } else if (err.response.status === 500)
            {
                setErrMsg('Server error'); 
            } else {
                setErrMsg('Login Failed'); 
            }

        }
    }

    return (
        <>
        <div style={logoStyle}>
        </div>
        <Container maxWidth="xs">
            <StyledPaper>
                <Typography variant="h5"> 
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Input name="uid" label="UID" handleChange={handleChange} type="text" value={loginData.uid}/> 
                        <Input name="password" label="Password" handleChange={handleChange} type={"password"} value={loginData.password}/>
                    </Grid>
                    <SubmitButton 
                        type="submit" fullWidth variant="contained" 
                    > 
                        Login 
                    </SubmitButton>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button component={Link} to="/register"> 
                                Don't have an account? Sign Up 
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Grid>
                    {errMsg ? 
                    <Alert severity='error'> {errMsg} </Alert> : null}
                </Grid>
            </StyledPaper>
        </Container>
        </>
    )
}
const logoStyle = {
    margin: '0 auto',
    marginTop: '50px',
    marginBottom: '0px',
    backgroundImage: `url(${logo})`,
    width: '250px',
    height: '250px',
    backgroundSize: '250px 250px',
    borderRadius: '30px',
}

export default Login; 