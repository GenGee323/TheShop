import {useEffect} from 'react'
import './App.css'
import routes from './routes'
import Header from './components/Header'
import {useDispatch} from 'react-redux'
import {setUser} from './redux/authReducer'
import {setCart} from './redux/cartReducer'
import axios from 'axios'
import GlobalStyle from './styles/globalStyle'

function App() {
 
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('/api/me').then(res => {
      dispatch(setUser(res.data.user))
      dispatch(setCart(res.data.cart))
    }).catch((err) => {
      console.log(err.response)
    })
  }, [dispatch])// not working without dispatch
  return (
    <div className="App">
      <Header/>
      {routes}
      <GlobalStyle/>
    </div>
  )
}

export default App