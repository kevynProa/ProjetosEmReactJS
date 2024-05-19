//MY IMPORTS
import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'




//CONFIG REACT ROUTES
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './routes/AppRoutes'
import SubNav from './components/subnav/SubNav'

//MY FUNCTIONS
function App() {


  return (
    <>
    <Router>
      <NavBar/>
      <br/>
      <SubNav/>
        <AppRouter/>
          <br/>
      <Outlet/>
    </Router>
    </>
  )
}

//MY EXPORTS
export default App
