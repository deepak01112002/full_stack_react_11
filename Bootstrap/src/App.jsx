import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicExample from './Components/Accordion'
import NavbarCom from './Components/Navbar'
import SkeletonCom from './Components/Skeleton'
import AlertCom from './Components/AlertCom'

function App() {

  return (
    <>
      <SkeletonCom/>
      <NavbarCom/>
      <BasicExample/>
      <AlertCom/>
    </>
  )
}

export default App
