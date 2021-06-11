import {Link} from 'react-router-dom'
import axios from 'axios'
import './Header.css'



const Header = () => {

  const handleLogout= ()=>{
    axios.get('/api/logout')}

  return(
    <section>
      <header>
      <ul className= "nav">
      <Link to='/'> The Shop </Link>
      <Link to='/auth'> Welcome </Link>
      <Link to='/products'> Products </Link>
      <Link to='/cart'> Shopping Cart </Link>
      <Link to='/about'>About Us</Link>
      <Link to ='/auth' onclick={handleLogout}> Logout</Link>
    </ul>
    </header>
    </section>
  )
}

export default Header