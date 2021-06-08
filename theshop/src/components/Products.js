import {useState, useEffect} from 'react'
import axios from 'axios'

import {useSelector, useDispatch} from 'react-redux'
import {setCart} from '../redux/cartReducer'

const Products = (props) => {
  
  const [products, setProducts] = useState([])

  const {user} = useSelector((store) => store.auth)
  const {cart} = useSelector((store) => store.cartReducer)
  const dispatch = useDispatch()

  useEffect(() => {
   
    axios.get('/api/products')
    .then((res) => {
      setProducts(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  const handleAddToCart = (product_id) => {
   
    const product = cart.find((product) => product.product_id === product_id)
    console.log(product)
    
    if(!product){
      axios.post(`/api/cart/${product_id}`)
      .then((res) => {
       
        dispatch(setCart(res.data))
      })
      .catch((err) => {
       
        console.log(err)
        if(err.response.status === 511){
          props.history.push('/auth')
        }
      })
    }else{
     
      axios.put(`/api/cart/${product_id}`, {quantity: product.quantity + 1})
      .then((res) => {
       
        dispatch(setCart(res.data))
      })
      .catch(err => {
        
        console.log(err)
        
        if(err.response.status === 511){
          props.history.push('/auth')
        }
      })
    }
  }
  return(
    <div>
      <h1>Products</h1>
    
      {products.map((products) => {
        return (
          <div key={products.product_id}>
            <h4>{products.product_name}</h4>
            <p>{products.product_description}</p>
            {user && <button onClick={() => handleAddToCart(products.product_id)}>Add To Cart</button>}
          </div>
        )
      })}
    </div>
  )
}


export default Products