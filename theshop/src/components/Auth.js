import {useState} from 'react'
import axios from 'axios'
import {setUser} from '../redux/authReducer'
import {setCart} from '../redux/cartReducer'
import {useDispatch} from 'react-redux'

const Auth = (props) => {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 //axios call
  const dispatch = useDispatch()


  const handleRegister = () => {
    axios.post('/api/register', {email, password})
    .then((res) => {
      dispatch(setUser(res.data))
      axios.get('/api/cart').then((response) =>{
        dispatch(setCart(response.data))
        props.history.push('/products')
      })
    })
    .catch(err => console.log(err))
  }


  const handleLogin = () => {
    axios.post('/api/login', {email, password})
    .then((res) => {
      console.log(res.data)
      dispatch(setUser(res.data))
      axios.get('/api/cart').then((response) => {
        dispatch(setCart(response.data))
        props.history.push('/products')
      })
    })
    .catch(err => console.log(err))
  }



  return(
    <div className="login_main">
      <h1>Welcome</h1>
  <body>
    <br/>
    <section>
      <article>
    <br/>
    <p>Email</p>
      <input value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Test@theshop.com' />
      <p>Password</p>
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
      <br/>
      <br/>
      <button onClick={handleLogin}>Login</button>
      <br/>
      <br/>
      <button onClick={handleRegister}>Sign Up</button>
      </article>
      </section>
  </body>
    </div>
  )
}

export default Auth