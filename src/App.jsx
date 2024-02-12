
import About from './Pages/About'
import Contact from './Pages/Contact'
import Exemples from './Pages/Exemples'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import './index.css'
import './App.css'
import {Route , BrowserRouter as Router , Routes} from 'react-router-dom'

function App() {


  return (
  <main className='bg-slate-300/20'>
    <Router>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/exemples' element={<Exemples/>}/>
        <Route path='/contact' element={<Contact/>}/>


      </Routes>
    </Router>

  </main>
  )
}

export default App
