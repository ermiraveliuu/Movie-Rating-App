require('dotenv').config()
const UserModel = require('../models/User')
const passport = require('passport');


const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
// passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//   UserModel.findOne({id: jwt_payload.id}, function(err, user) {
//     if (err) {
//       return done(err, false);
//     }
//     if (user) {
//       return done(null, user);
//     } else {
//       return done(null, false);
//       // or you could create a new account
//     }
//   });
// }));

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  console.log(jwt_payload._doc._id, 'id')
  UserModel.findById(jwt_payload._doc._id).then((user, err) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
      // or you could create a new account
    }
  })
}));