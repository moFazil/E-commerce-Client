import React, { useState } from 'react'
import {Box, Button, Grid, Paper, Stack, TextField} from '@mui/material'
import axios from 'axios';

const Login = () => {

  const[Email,SetEmail]=useState();
  const[Password,SetPassword]=useState();
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/login',{
      Email : Email,
      Password : Password, 
    })
  }


    const emailEdit = " w-full"
    const passwordEdit = " w-full "
    const container = ' w-[450px] p-10 outline-none h-[70vh] flex flex-col justify-center'

  return (
    <div className=' h-[100vh] flex justify-center items-center'>
       <form onSubmit={handleSubmit}> 
    <Stack 
         sx={{
            "& label.Mui-focused": {
              color: 'black',
            },//styles the label
          }
          
        }
        >
    <Box
    sx={{
       backgroundColor:"#F5F5F5",
        
        "& > :not(style)": { m: 1 },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "black", // Set the default outline color to black
          },
          "&:hover:not(.Mui-disabled) fieldset": {
            borderColor: "black", // Set the outline color to #861B47 on hover
          },
          
         "&.Mui-focused fieldset": {
            borderColor: "black", // Set the outline color to yellow on focus
          },
        },
    }}
    >
    <Paper
    className={container}
    style={{
        backgroundColor:"#F5F5F5"
    }}
    >
        <h1 className=' mb-28 font-extrabold text-6xl underline'>Log In</h1>
        
        <Grid>
<TextField 
label="Email"
id='Email'
name='Email'
variant='outlined'
margin='normal'
required
className={emailEdit}
onChange={(e)=>SetEmail(e.target.value)}
/>
</Grid>
<Grid>
    <TextField 
    label="Password"
    id='Password'
    name='Password'
    variant='outlined'
    margin='normal'
    required
    type='password'
    className={passwordEdit}
    onChange={(e)=>SetPassword(e.target.value)}
    />
</Grid>
<Grid>
    <Button
    type='submit'
    fullWidth
    style={{
        backgroundColor:"#DA0037",
        color:"white",
        marginTop:"20px",
        padding:"10px"
    }}
    >
    Submit
    </Button>
</Grid>
</Paper>  
    
    </Box>
     </Stack>
     
     </form>
     </div>
     
     
   
  )
}

export default Login