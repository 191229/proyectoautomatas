import { useState } from 'react'
import NavBar from './components/modules/particiones/nav-bar'
import Baner from './components/modules/particiones/banner'
import Footer from './components/modules/particiones/footer'
import Cuerpo from './components/modules/particiones/body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    
    <Baner />

    <Cuerpo/>
    
    <Footer />
    </>

  )
}

export default App
