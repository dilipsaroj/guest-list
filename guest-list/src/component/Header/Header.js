import React,{useEffect,useState} from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

const Header = () => {
    let navigate = useNavigate()
useEffect(() => {
    let data = localStorage.getItem('userName');
    console.log("data",data)

    let new_str = data.replaceAll('"', '')
    setuserName(new_str)
}, []);   

const [userName,setuserName] = useState('')

const logoutHandle =()=>{
    navigate('/')
}
  return (
    <header className="head_style">
        <Grid className="wrapper header_content">
            <Grid container flexDirection="row">
                <Grid item xs={6}  className="" style={{float:'left',textAlign:'left'}}>
                    <h4>Welcome, {userName}</h4>
                </Grid>
                <Grid item xs={6}  className="" style={{float:'right',textAlign:'right'}}>
                    <Button onClick={logoutHandle} variant="contained">Logout</Button>
                </Grid> 
            </Grid>
        </Grid>

    </header>
  )
}

export default Header
