require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
// const aws = require('aws-sdk')

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env


// const {
//   S3_BUCKET,
//   AWS_ACCESS_KEY_ID,
//   AWS_SECRET_ACCESS_KEY
// } = process.env

// CONTROLLERS

const authCtrl = require('./controllers/authController')
const productCtrl = require('./controllers/productController')
const cartCtrl = require('./controllers/cartController')


// APP INSTANCE CREATED

const app = express()


// TOP LEVEL MIDDLEWARE

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000 *60 *60 *24}
}))

// DATABASE CONNECTION

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
})
.then(db =>{
  app.set('db', db)
  console.log("Database is Connected")
  app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
}).catch(err => console.log(err))


// ENDPOINTS
//Auth

app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.get('/api/logout', authCtrl.logout)
app.get('/api/me', authCtrl.getUser)

// PRODUCTS

app.get('/api/products', productCtrl.getProducts)

// CART

app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:product_id', cartCtrl.addToCart)
app.delete('/api/cart/:product_id', cartCtrl.deleteItemFromCart)
app.put('/api/cart/:product_id', cartCtrl.changeCartQty)


// app.get('/sign-s3', (req, res) => {

//   aws.config = {
//     region: 'us-west-1',
//     accessKeyId: AWS_ACCESS_KEY_ID,
//     secretAccessKey: AWS_SECRET_ACCESS_KEY
//   }
  
//   const s3 = new aws.S3();
//   const fileName = req.query['file-name'];
//   const fileType = req.query['file-type'];
//   const s3Params = {
//     Bucket: S3_BUCKET,
//     Key: fileName,
//     Expires: 60,
//     ContentType: fileType,
//     ACL: 'public-read'
//   };

//   s3.getSignedUrl('putObject', s3Params, (err, data) => {
//     if(err){
//       console.log(err);
//       return res.end();
//     }
//     const returnData = {
//       signedRequest: data,
//       url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
//     };

//     return res.send(returnData)
//   });
// });