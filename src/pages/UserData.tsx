import {Box, Container, Typography} from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import {useEffect, useState} from 'react'
import UserInfo from '../models/UserDataModel';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'userId',
    headerName: 'userId',
    type:'number',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    type:'string',
    width: 210,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Body',
    type: 'string',
    width: 210,
    editable: true,
  }
];



 function UserData() {
     const [userData, setUserData] = useState<UserInfo[]>([]);
     const [errorLoad, setErrorLoad] = useState("")
    useEffect(()=>{
      getData();
    },[])
    const getData = async ():Promise<void>=>{
        try {
          const {data, status} = await axios.get("https://jsonplaceholder.typicode.com/posts"); 
             if(status==200){
              setUserData(data)
             }else{
              setErrorLoad("Bad request, try again")
             }
            
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.log("Data fetching failed", error.message);
          } else {
            console.log('unexpected error: ', error);
          }
        }

           
    }
  return (
    <Container sx={{display:'flex', justifyContent:'center'}}>
    <Box sx={{ height:'80vh', width:{xs:'90%', sm:'80%', md:'70%'}, mt:3 }}>
      {
        userData?(
        <DataGrid
        rows={userData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[4]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }} />
        ):<Typography>{errorLoad}</Typography>
      }
       
    </Box>
    </Container>
  );
}
export default UserData;