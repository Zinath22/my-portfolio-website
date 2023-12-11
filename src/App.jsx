
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Home></Home>
      </BrowserRouter>
      
     
      
    </div>
  )
}

export default App
