import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StepOne from './pages/StepOne'
import Steptwo from './pages/Steptwo'
import StepThree from './pages/StepThree'
import StepFour from './pages/StepFour'
import Success from './pages/Success'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<StepOne/>}/>
      <Route path='/steptwo' element={<Steptwo/>}/>
      <Route path='/stepThree' element={<StepThree/>}/>
      <Route path='/stepFour' element={<StepFour/>}/>
      <Route path='/success' element={<Success/>}/>
    </Routes>
  )
}

export default App