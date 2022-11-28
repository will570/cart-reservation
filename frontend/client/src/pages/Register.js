import React, {useState} from 'react'; 
import { Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import Input from '../components/Authentication/Input';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../image/Cartgoers-logos.jpeg';

const REGISTER_URL = '/user/signUp';
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

const Register = () => {
    const {setAuth}=useAuth();
    const navigate = useNavigate();
    const initialState ={
        name:"",
        uid:"",
        email:"",
        password:''
    }
    const [registerData, setRegisterData]= useState(initialState);
    const handleChange =(e) =>{
        const value = e.target.value;
        setRegisterData({
            ...registerData,
            [e.target.name]: value
        })
    };

    const handleSubmit =async(e) =>{
        e.preventDefault();
        console.log(registerData);

        const name=registerData.name;
        const uid=registerData.uid;
        const email=registerData.email;
        const password=registerData.password;

        try{
            const response =await axios.post(REGISTER_URL,
                JSON.stringify({name, uid, email, password}),
                {
                    headers: { 'Content-Type': 'application/json'},
                });
            const token =response.data.token;
            setAuth({ name, uid, email,password,token});
            console.log(JSON.stringify(response.data.token));
            console.log(JSON.stringify(response));
            navigate("/login", {replace :true});
        }
        catch(err){
            if (!err.response) {
                setErrMsg('No server response'); //if there is no response 
            } else if (err.response.status === 400) 
            {
                setErrMsg('Invalid input fields'); 
            } else if(err.response.status === 401)
            {
                setErrMsg('User already exists');
            }
            else if (err.response.status === 500)
            {
                setErrMsg('Server error'); 
            } else {
                setErrMsg('Register Failed'); 
            } 
        }

    };
    
    const [errMsg, setErrMsg]= useState(null);

    return (
        <>
        <div style={logoStyle}>
        </div>
       <Container maxWidth="xs">
        <StyledPaper>
            <Typography variant='h5'>
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Input name="name" label="Name" handleChange={handleChange} type="text" value={registerData.name }/>
                    <Input name="uid" label="UID" handleChange={handleChange} type="text" value={registerData.uid }/>
                    <Input name="email" label="Email" handleChange={handleChange} type="text" value={registerData.email }/>
                    <Input name="password" label="Password" handleChange={handleChange} type={"password"} value={registerData.password }/>

                </Grid>
                <SubmitButton type="submit" fullWidth variant="contained">
                    Register
                </SubmitButton>
                <Grid container justify="flex-end">
                        <Grid item>
                            <Button component={Link} to="/login"> 
                                Already have an account? Sign In 
                            </Button>
                        </Grid>
                    </Grid>
            </form>
            <Grid>
                {errMsg ?
                <Alert severity='error'>{errMsg}</Alert> :null}
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
export default Register; 
