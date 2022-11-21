import React, {useState} from 'react'; 
import { Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
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

const Register = () => {
    const handleSubmit =() =>{

    };
    const handleChange =() =>{
        
    };
    const [errMsg, setErrMsg]= useState(null);

    return (
       <Container maxWidth="xs">
        <StyledPaper>
            <Typography variant='h5'>
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Input name="name" label="Name" handleChange={handleChange} type="text" />
                    <Input name="uid" label="UID" handleChange={handleChange} type="text" />
                    <Input name="email" label="Email" handleChange={handleChange} type="text" />
                    <Input name="password" label="Password" handleChange={handleChange} type={"password"} />

                </Grid>
                <SubmitButton type="submit" fullWidth variant="contained">
                    Register
                </SubmitButton>

            </form>
            <Grid>
                {errMsg ?
                <Alert severity='error'>{errMsg}</Alert> :null}
            </Grid>
        </StyledPaper>
       </Container>
    )
}

export default Register; 
