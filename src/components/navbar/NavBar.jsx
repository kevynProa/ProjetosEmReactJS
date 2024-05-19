//MY IMPORTS
import './style.css'


//CONFIG REACT LINK
import { Link } from 'react-router-dom'

//MY FUNCTIONS
function NavBar() {
  return (
    
    <header className='container'>
        <nav className='nav-container'>
            <h2>Kevyn Equipe 04</h2>
            <ul className='nav-container-list'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
        </nav>
    </header>
  )
}

//MY EXPORTS
export default NavBar
