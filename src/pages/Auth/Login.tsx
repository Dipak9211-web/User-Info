import { Card, Box, Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import LoginModel from '../../models/LoginModel'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){
    const [user, setUser] = useState<LoginModel>({
        name:"",
        phone:+91,
        email:""
      })
      const navigate = useNavigate()
   const inputChangeHandler =(e:React.ChangeEvent<HTMLInputElement>):void => {
                         setUser((preState)=>{
                            return {...preState, [e.target.name]:e.target.value}
                         })
   }
   const onSubmitData = ():void=>{
                console.log(user)
                if(user.name && user.phone && user.email){
                    localStorage.setItem("User", JSON.stringify(user))
                    setUser({...user, name:"", phone:91, email:""});
                    navigate("/user-data")
                }else{
                    alert("All field mandatory")
                }
                
   }
    return (
        <>  
        <div className="container">
           
            <Card sx={{ width:{xs:'90%', sm:'60%', md:'50%', lg:'40%'}, p:3, bgcolor:'#85CDFD', boxShadow:3}}> 
                <h3>Login</h3>
            <Box component="form" sx={{display:"flex", flexDirection:"column", borderRedius:"4px"}} >
            <TextField type="text" name='name' value={user.name} onChange={inputChangeHandler} id="standard-basic" sx={{mt:1}} label="Name" variant="standard" />
            <TextField type="number" name='phone' value={user.phone} onChange={inputChangeHandler} id="standard-basic" sx={{mt:1}} label="Phone No" variant="standard" />
            <TextField type="email" name='email' value={user.email} onChange={inputChangeHandler} id="standard-basic" sx={{mt:1}} label="Email" variant="standard" />
            <Button variant="contained" onClick={onSubmitData} sx={{mt:3}}>Submit</Button>
            </Box>
            </Card>
            
        </div>

        </>
    )
}

export default Login;