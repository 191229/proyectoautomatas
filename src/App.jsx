import { useState } from 'react'
import NavBar from './components/nav-bar'
import Baner from './components/banner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    
    <Baner/>
    
    </>

  )
}

export default App
