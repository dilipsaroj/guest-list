import React from 'react'
import Grid from '@mui/material/Grid';


const Footer = () => {
  return (
    <Grid className="footer">
            <Grid className="wrapper footer_content">
            <Grid container >
                <Grid item xs={12}  className="" style={{float:'left',color:'#fff',fontSize:'14px',paddingTop:'5px'}}>
                    <p>Copyrights 2022 All Rights Reserved</p>
                </Grid>
               
            </Grid>
        </Grid>

    </Grid>
  )
}
export default Footer