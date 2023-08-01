import React, { useEffect, useState } from 'react'
import './App.css'

import { BrowserRouter,Routes, Route  } from 'react-router-dom'
import RingLoader from "react-spinners/RingLoader"
import Home from './components/Home/Home'
import Projects from './components/projects/Projects'
import Signin from './Signin'
import Dashboard from './dashboard/Dashboard'
import AddProject from './dashboard/AddProject'
import UpdateProject from './dashboard/UpdateProject'



// <RingLoader color="#36d7b7" />
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])
  
  return (
    <div>
      {loading ?
        <div className='preloaderr'>
          <RingLoader color={'#f87765'} loading={loading} height={100} margin={10} />
        </div> :
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Projects' element={<Projects />} />
              <Route path='/Signin' element={<Signin/>} />
              <Route path='/Dashboard' element={<Dashboard />} />
              <Route path='/AddProject' element={<AddProject />} />
              <Route path='/UpdateProject/:id' element={<UpdateProject />} />
            </Routes>
        </BrowserRouter>
       
      }




    </div>
  )
}

export default App
