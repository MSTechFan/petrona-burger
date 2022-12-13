const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { apiSecret } = require('../config')

const verifyToken = (req, res, next) => {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], apiSecret, function(err, decode){
            if(err) req.user = undefined
            if(!decode) {
                res.status(403)
                    .send({
                        message: 'Invalid JWT token'
                    })
            }
            User.findOne({
                _id: decode.id
            })
            .exec((err, user) => {
                if(err) {
                    res.status(500)
                        .send({
                            message: err
                        })
                } else {
                    req.user = user
                    next()
                }
            })
        })
    } else {
        req.user = undefined
        next()
    }
}

module.exports = verifyToken