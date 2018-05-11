const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const models = require("../models");

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const secret = "Oreo is the best dog."
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secret,
}

const strategy = new JwtStrategy(jwtOptions, (payload, next) => {
    console.log("Payload received", payload);
    models.Users.findById(payload.id)
    .then(result => {
        if(result) {
            next(null, result);
        } else {
            next(null, false);
        }
    });
});

passport.use(strategy);

const login = (username, password) => {
    if (!username || !password) {
        return new Promise((resolve, reject) => {
            resolve({message: "missing username or password"});
        })
    }
    return models.Users.findOne({
        where : { username }
    })
    .then( result => {
        if (result === null) {
            return {message: "Username does not exist."};
        } else if (result.password !== password) {
            return {message: "Invalid password."};
        } else {
            let payload = {id: result.id};
            let token = jwt.sign(payload, secret);
            return {message: "ok", token};
        }
    });
}

module.exports = {
    guard : passport.authenticate('jwt', {session : false}),
    strategy : strategy,
    login : login,
}