import { useState } from 'react'
import NavBar from './components/nav-bar'
import Baner from './components/banner'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    
    <Baner />
    
    <Footer />
    </>

  )
}

export default App
