import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Navbar from './Navbar/Navbar'
import UserData from './pages/UserData'

function App() {
 
  return (
    <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/user-data' element={<UserData/>}/>
          </Routes> 
    </BrowserRouter>


  )
}

export default App
