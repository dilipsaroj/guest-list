import React,{useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'
import MaterialTable from 'material-table';
import { Search } from '@material-ui/icons';

export const AdminDashboard = () => {

  useEffect(() => {
    let data = localStorage.getItem('userdata');
    console.log("data",data)
    setdisplayData(display);
  }, []);

  const [displayData, setdisplayData] = React.useState([]);
  const empList = [
    {
      id: 1,
      name: "Neeraj",
      email: "neeraj@gmail.com",
      phone: 9876543210,
      city: "Bangalore"
    },
    {
      id: 2,
      name: "Raj",
      email: "raj@gmail.com",
      phone: 9812345678,
      city: "Chennai"
    },
    {
      id: 3,
      name: "David",
      email: "david342@gmail.com",
      phone: 7896536289,
      city: "Jaipur"
    },
    {
      id: 4,
      name: "Vikas",
      email: "vikas75@gmail.com",
      phone: 9087654321,
      city: "Hyderabad"
    }
  ];
  

  const BasicFiltering = ()=>{
    return (
      <MaterialTable
        title="User details"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Email', field: 'email' },
          { title: 'Phone no', field: 'phono_number', type: 'numeric' },
          { title: 'Adult Count', field: 'adult_ct',type: 'numeric' },
          { title: 'Child Count', field: 'child_ct',type: 'numeric' },
          { title: 'Room Type', field: 'room_type' },
          { title: 'From Date', field: 'from_date',type: 'date' },
          { title: 'To Date', field: 'to_date',type: 'date' },
        ]}
        data={[
          { name: 'Dilip', email: 'dilipkumar@gamil.com', phono_number: 8898720264, adult_ct: 2,child_ct:1 ,room_type:"Super_Deluxe_Family",from_date:"8/10/2022",to_date:"10/10/2022"},
          { name: 'Prashant', email: 'prashantkumar@gamil.com', phono_number: 8898728583, adult_ct: 2,child_ct:5 ,room_type:"Deluxe",from_date:"1/10/2022",to_date:"11/10/2022"},
          { name: 'rakesh', email: 'rakesh@gamil.com', phono_number: 680828222, adult_ct: 2,child_ct:1 ,room_type:"Normal",from_date:"15/10/2022",to_date:"18/10/2022"},
          { name: 'Rahul', email: 'rahul@gamil.com', phono_number: 984848483, adult_ct: 2,child_ct:4 ,room_type:"Super_Deluxe",from_date:"12/10/2022",to_date:"22/10/2022"},
          { name: 'Sagar', email: 'sagarku@gamil.com', phono_number: 8988720264, adult_ct: 2,child_ct:0 ,room_type:"Super_Deluxe_Family",from_date:"25/10/2022",to_date:"28/10/2022"},
        ]}        
        options={{
          filtering: true,
          search:true,
          exportButton:true
        }}
      />
    )
  }
//hard code data as API integration didn't handle
  const display = [
      {
        name:"Dilip",
        email_id:"dilipkumar@gamil.com" ,
        phone_number:"8898720264",
        adult_count:2,
        room_type:"Super_Deluxe_Family",
        children_count:1,
        fromdate:"8/10/2022",
        todate:"10/10/2022",
    },
      {
        name:"Prashant",
        email_id:"prashantkumar@gamil.com" ,
        phone_number:"8898728583",
        adult_count:2,
        room_type:"Deluxe",
        children_count:5,
        fromdate:"8/10/2022",
        todate:"10/10/2022",
    },
      {
        name:"rakes",
        email_id:"rakesh@gamil.com" ,
        phone_number:"680828222",
        adult_count:2,
        room_type:"Normal",
        children_count:1,
        fromdate:"8/10/2022",
        todate:"10/10/2022",
      },
      {
        name:"Rahul",
        email_id:"rahul@gamil.com" ,
        phone_number:"984848483",
        adult_count:2,
        room_type:"Super_Deluxe",
        children_count:3,
        fromdate:"8/10/2022",
        todate:"10/10/2022",
      },
      {
        name:"Sagar",
        email_id:"sagarku@gamil.com" ,
        phone_number:"8988720264",
        adult_count:2,
        room_type:"Super_Deluxe_Family",
        children_count:0,
        fromdate:"8/10/2022",
        todate:"10/10/2022",
      }
  ]

  return (
    
    <div>
      <Header />
          <Grid className="wrapper">

          <Grid style={{margin:'100px 0 '}}>
          {BasicFiltering()}
          </Grid>
          </Grid>
      <Footer />
    </div>
  )
}
export default AdminDashboard
