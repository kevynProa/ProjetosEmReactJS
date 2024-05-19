import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const SubNav = () => {
  return (

<nav className='container-nav'>
    <ul className='container-list'>
    <li>
      <Link to="/projeto01">exercicio 1</Link>
    </li>
    <li>
      <Link to="/projeto02">exercicio 2</Link>
    </li>
    <li>
      <Link to="/projeto03">exercicio 3</Link>
    </li>
    <li>
      <Link to="/projeto04"> exercicio 4</Link>
    </li>
    <li>
      <Link to="/projeto05"> exercicio 5</Link>
    </li>
    <li>
      <Link to="/projeto06"> exercicio 6</Link>
    </li>
    <li>
      <Link to="/profile"> exercicio 7</Link>
    </li>
    <li>
      <Link to="/profile"> exercicio 8</Link>
    </li>
    <li>
      <Link to="/profile"> exercicio 9</Link>
    </li>
    <li>
      <Link to="/profile"> exercicio 10</Link>
    </li>
  </ul>
</nav>
  )
}

export default SubNav
