import {Link} from 'react-router-dom'

const Navigation = () => {
  return(
    <nav>
      <ul className= "nav">
      <Link to='/'> The Shop </Link>
      <Link to='/auth'> Welcome </Link>
      <Link to='/products'> Products </Link>
      <Link to='/cart'> Shopping Cart </Link>
    </ul>
    </nav>
  )
}

export default Navigation;