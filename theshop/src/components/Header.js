import {Link} from 'react-router-dom'
import axios from 'axios'
import './Header.css'



const Header = () => {

  const handleLogout= ()=>{
    axios.get('/api/logout')}

  return(
    <div className="nav_main">
  <nav>            
      <ul>
      <br/>
      <br/>
      <Link to='/'> Home </Link>
      <Link to='/about'>About Us</Link>
      <Link to='/products'> Products </Link>
      <Link to='/cart'> Shopping Cart </Link>
      <Link to='/auth'> Sign In </Link>
      <Link to ='/auth' onclick={handleLogout}> Logout</Link>
   </ul>
    </nav>
    </div>
  )
}

export default Header