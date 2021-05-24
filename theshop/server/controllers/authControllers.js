const bcrypt = require('bcryptjs')

module.export= {
    register:async (req, res) =>{ c
    const db = req.app.get('db')
    const {email, password} = req.body
    const [result] = await db.auth.check_email(email)
    if(result){
      return res.status(409).send('Email is already taken.')
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const [user] = await db.auth.register_user(email, hash)
    const [cart] = await db.cart.create_cart(user.user_id)
    delete user.password
    req.session.user = user
    req.session.user.cart_id = cart.cart_id
    return res.status(200).send(req.session.user)
},

    login:async (req, res) =>{},
    logout: (req, res) => {},
    getUser: (req, res) => {}
}