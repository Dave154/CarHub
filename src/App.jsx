import {Routes,Route} from 'react-router-dom'
import Nav from './components/Navbar'
import Home from './components/Home'

function App() {
  return <>
  <Nav/>
 
  <Routes>
  <Route path='/'  element={ <Home/>}/>
  </Routes>
 
    </>
}

export default App
