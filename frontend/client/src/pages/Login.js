import React, {useState} from 'react'; 
import {Paper, Grid, Typography, Container, Button} from '@material-ui/core'; 
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import Input from '../components/Authentication/Input'; 

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

const Login = () => {

    const initialState = {
        uid: '',
        password: '' 
    }; 

    //state to keep track of showing password 
    const [showPassword, setShowPassword] = useState(false); 

    //sets field data of login form 
    const [loginData, setLoginData] = useState(initialState); 

    //toggle state of password 
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword); 

    //used by each input 
    const handleChange = (e) => {
        const value = e.target.value;
        setLoginData({ 
            ...loginData, 
            [e.target.name]: value 
        });  //change the ones according to the input 
    }; 

    //handles button submission of login 
    const handleSubmit = (e) => {
        e.preventDefault(); 
    }

    return (
        <Container maxWidth="xs">
            <StyledPaper>
                <Typography variant="h5"> 
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Input name="uid" label="UID" handleChange={handleChange} type="text" /> 
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    </Grid>
                    <SubmitButton type="submit" fullWidth variant="contained"> 
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
            </StyledPaper>
        </Container>
    )
}

export default Login; 