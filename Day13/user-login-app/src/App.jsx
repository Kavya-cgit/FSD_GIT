import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";
import Logout from "./component/Logout";
import { useState } from 'react';
const App = () => {
  const[data ,setData] =useState();
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route path='/login' element={<Login/>}/>
           < Route path='/register' element={<Register/>}/>
        </Route>
        <Route path='/dashbpard' element={<Dashboard/>}/>
        < Route path='/logout' element={<Logout/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;