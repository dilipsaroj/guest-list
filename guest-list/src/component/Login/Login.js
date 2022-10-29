import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

export const Login = (props) => {

let navigate = useNavigate()
const [commonState,setCommonState] = useState({
    username:'',
    password:'',

})


const getLogin =()=>{
    //   console.log("hi")
    localStorage.setItem('userName', JSON.stringify(commonState.username));
    if(commonState.password !== ""){
        if(commonState.username == "admin"){
            navigate('/adminDash')
        }
        else{
            navigate('/userdash')
        }
    }
    else{
        alert("Please enter password")
    }
  }  

  const commonHandleChange = (e)=>{
    setCommonState({
      ...commonState,
      [e.target.name]:e.target.value
    })
  } 
  return (
    <div className="login_style">
            <div className='wrapper'>
                    <div className="login_card">
                       
                        <div className="login_content">
                        <Grid className="title_header">
                                    <h3>Login</h3>
                                </Grid>
                        <Grid container>

                               
                            <Grid item xs={12}>
                                    <TextField
                                    style={{width:'80%'}}
                                        variant="outlined"
                                        required
                                        onChange={(e)=>commonHandleChange(e)}
                                        size="small"
                                        label="User Name"
                                        id="User"
                                        name="username"
                                        value={commonState.username}
                                        />
                            </Grid>
                            <Grid item xs={12} style={{marginTop:'20px'}}>
                                    <TextField
                                    style={{width:'80%'}}
                                        variant="outlined"
                                        required
                                        type="password"
                                        onChange={(e)=>commonHandleChange(e)}
                                        size="small"
                                        label="Password"
                                        id="password"
                                        name="password"
                                        value={commonState.password}
                                        />
                            </Grid>
                            <Grid item xs={12} style={{marginTop:'20px'}}>
                                    <Button onClick={getLogin} variant="contained">Submit</Button>
                            </Grid>
                        </Grid>
                        </div>
                    </div>
                    
            </div>  
    </div>

  )
}

export default Login