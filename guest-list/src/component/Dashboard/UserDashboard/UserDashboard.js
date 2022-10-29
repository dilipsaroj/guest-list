import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const UserDashboard = () => {

const [commonState,setCommonState] = useState({
    name:'',
    email_id:'',
    phone_number:'',
    adult_count:'',
    children_count:'',
    fromdate:'',
    todate:''
})
const [room, setroom] = React.useState('');

const handleChange = (event) => {
    setroom(event.target.value);
  };

const commonHandleChange = (e)=>{
    setCommonState({
      ...commonState,
      [e.target.name]:e.target.value
    })
  } 


const submitHandle =()=>{

    let jsonData = {
        name:commonState.name,
        email_id:commonState.email_id,
        phone_number:commonState.phone_number,
        adult_count:commonState.adult_count,
        room_type:room,
        children_count:commonState.children_count,
        fromdate:commonState.fromdate,
        todate:commonState.todate
    }
    console.log("jsonData",jsonData)
    if(jsonData){
        // debugger
        let data = JSON.stringify(jsonData)
        alert(data)
        localStorage.setItem('userdata', JSON.stringify(data));
    }
}  

  return (
    <div>
    <Header />
        <div className='wrapper'>
            <div className="login_card">
                
                <div className="login_content">
                <Grid className="title_header">
                            <h3>Enter Details</h3>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                            <TextField
                            style={{width:'80%'}}
                                variant="outlined"
                                required
                                onChange={(e)=>commonHandleChange(e)}
                                size="small"
                                label="Name"
                                id="name"
                                name="name"
                                value={commonState.name}
                                />
                    </Grid>
                    <Grid item xs={12} style={{marginTop:'20px'}}>
                            <TextField
                            style={{width:'80%'}}
                                variant="outlined"
                                required
                                type="email"
                                onChange={(e)=>commonHandleChange(e)}
                                size="small"
                                label="Email"
                                id="email_id"
                                name="email_id"
                                value={commonState.email_id}
                                />
                    </Grid>
                    <Grid item xs={12} style={{marginTop:'20px'}}>
                            <TextField
                            style={{width:'80%'}}
                                variant="outlined"
                                required
                                type="number"
                                onChange={(e)=>commonHandleChange(e)}
                                size="small"
                                label="Phone number"
                                id="phone_number"
                                name="phone_number"
                                value={commonState.phone_number}
                                />
                    </Grid>
                    <Grid item xs={12} style={{marginTop:'20px',width:'80%'}}>
                        <FormControl size="small" style={{width:'80%'}}>
                            <InputLabel id="demo-select-small">Select Room</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={room}     
                                label="Select Room"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Normal"}>Normal</MenuItem>
                                <MenuItem value={"Deluxe"}>Deluxe</MenuItem>
                                <MenuItem value={"Deluxe_AC"}>Deluxe AC</MenuItem>
                                <MenuItem value={"Super_Deluxe"}>Super Deluxe </MenuItem>
                                <MenuItem value={"Super_Deluxe_Family"}>Super Deluxe Family</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container flexDirection="row" style={{margin:'0 auto',width:'89%'}}>
                        <Grid item xs={6} style={{marginTop:'20px'}}>
                                <TextField
                                style={{width:'80%'}}
                                    variant="outlined"
                                    required
                                    type="number"
                                    onChange={(e)=>commonHandleChange(e)}
                                    size="small"
                                    label="Adult count"
                                    id="adult_count"
                                    name="adult_count"
                                    value={commonState.adult_count}
                                    />
                        </Grid>
                        <Grid item xs={6} style={{marginTop:'20px',}}>
                                <TextField
                                style={{width:'80%'}}
                                    variant="outlined"
                                    required
                                    type="number"
                                    onChange={(e)=>commonHandleChange(e)}
                                    size="small"
                                    label="Children count"
                                    id="children_count"
                                    name="children_count"
                                    value={commonState.children_count}
                                    />
                        </Grid>
                    </Grid>
                    <Grid container flexDirection="row" style={{margin:'20px auto',  width:'80%'}}>
                        <Grid item xs={3} style={{textAlign:'left'}}>
                                <label style={{fontSize:"13px",verticalAlign:"sub",margin:"4px",color:"rgb(149, 156, 182)"}}>From date</label>
                        </Grid>
                        <Grid item xs={9}>
                        <TextField 
                            style={{width:'100%'}}
                            type="datetime-local"
                            onChange={(e)=>commonHandleChange(e)}
                            size="small"
                            id="fromdate"
                            name="fromdate"
                            value={commonState.fromdate}
                        /> 
                        </Grid>
                     
                    </Grid>
                    <Grid container flexDirection="row" style={{margin:'0px auto',  width:'80%'}}>
                        <Grid item xs={3} style={{textAlign:'left'}}>
                            <label style={{fontSize:"13px",verticalAlign:"sub",margin:"4px",color:"rgb(149, 156, 182)"}}>To Date</label>
                        </Grid>    
                        <Grid item xs={9}>
                        <TextField 
                            style={{width:'100%'}}
                            type="datetime-local"
                            onChange={(e) => commonState.fromdate == "" ? alert("first pick from date"): commonHandleChange(e)  }
                            size="small"
                            id="todate"
                            name="todate"
                            value={commonState.todate}
                            
                        />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{marginTop:'20px'}}>
                            <Button onClick={submitHandle} variant="contained">Submit</Button>
                    </Grid>
                </Grid>
                </div>
            </div>
    </div>  
    <Footer />
    </div>
  )
}

export default UserDashboard;