const { hashSync, compareSync } = require('bcrypt')
const userModel = require('../models/User')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const userExists = await userModel.findOne({ username: req.body.username })
  if(userExists) {
    res.status(400).send('User already exists')
  } else {
    const user = new userModel({
      ...req.body,
      password: hashSync(req.body.password, 10),
    })

    user.save().then(user => {
      res.status(200).send({
        success: true,
        message: 'User registered successfully.',
        user: {
          id: user._id,
          username: user.username,
        },
      })
    }).catch(error => {
      res.status(400).send({
        success: false,
        message: error,
      })
    })
  }
}

const login = async (req, res) => {
    userModel.findOne({username: req.body.username}).then((user) => {
      if (!user) {
        return res.status(401).send({
          success: false,
          message: 'User not found'
        })
      }

      if(!compareSync(req.body.password, user.password)) {
        return res.status(401).send({
          success: false,
          message: 'Incorrect password',
        })
      }

      const token = jwt.sign({ ...user }, process.env.JWT_SECRET, {expiresIn: "1d"});
      const userObj = { ...user };
      delete userObj.password;
      return res.status(200).send({
        success: true,
        message: 'Login successful',
        token: `Bearer ${token}`,
        user: userObj._doc,
        expiresIn: '1d'
      })
    })
}
// app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
//   res.status(200).send({
//     success: true,
//     user: {
//       id: req.user._id,
//       username: req.user.username,
//     },
//   })
// })


module.exports = {
  register,
  login,
};