
import './App.css'
import AddDoctor from './components/AddDoctor'
import DoctorDetails from './components/DoctorDetails'
import EditDoctor from './components/EditDoctor'
import Home from './components/Home'
import Nav from './components/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div>
       <BrowserRouter>
          <Nav/>
          {/* dynamic routes */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/addDoctor' element={<AddDoctor/>}/>
            <Route path='/doctorDetails/:id' element={<DoctorDetails/>}/>
            <Route path='/edit/:id' element={<EditDoctor/>}/>

            <Route path='*' element={<h1>page not found</h1>}/>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App