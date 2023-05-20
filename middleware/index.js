const jwt = require('jsonwebtoken');

 function authenticateToken(req, res, next){
    const token = req.headers['authorization'];
    if(!token) {
        return res.status(401).json({message: 'No token, authorization denied'});
    }

    jwt.verify(token, 'key', (err, user)=> {
        if(err){
            return res.status(403).json({message: 'ivalid token'});
        }

        req.user = user;
        next()
    })
}

//module.export = authenticateToken
module.exports = {
    authenticateToken: authenticateToken
};