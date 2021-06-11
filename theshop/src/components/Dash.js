import './Dash.css'

const Dash = () => {
  return(
    <div>
      <h1>The Shop</h1>
      <body>
        <img className="dasImg" width='30%' height='40%' src='https://theshopitems.s3.us-west-1.amazonaws.com/bikesaddles.jpg' alt='bike saddles'/>
         <img className="dasImg" width='30%' height='40%' src='https://theshopitems.s3.us-west-1.amazonaws.com/bookcase.jpg' alt='bookcase'/>
         <img className="dasImg" width='30%' height='40%' src='https://theshopitems.s3.us-west-1.amazonaws.com/carinterior.jpg' alt='car interior'/>
        </body>
    </div>
  )
}
export default Dash