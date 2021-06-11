import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Cart from './components/Cart'
import Dash from './components/Dash'
import Products from './components/Products'
import About from './components/About'

// SET UP ROUTES FOR OUR COMPONENTS
export default (
  <Switch>
    <Route exact path='/' component={Dash} />
    <Route path='/auth' component={Auth} />
    <Route path='/cart' component={Cart} />
    <Route path='/about' component={About}/>
    <Route path='/products' component={Products} />
  </Switch>
)