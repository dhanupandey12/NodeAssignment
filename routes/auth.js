const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/login', (req, res)=> {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
    .then((user)=> {
        if(!user){
            return res.status(400).json({message:"user not found"})
        }

        bcrypt.compare(password, user.password, (err, result)=> {
            if(err || !result)
            {
                return res.status(401).json({message:"auth fail"})
            }

            const token = jwt.sign({email:user.email}, 'key', {expiresIn:'1h'})
            res.json({token})
        })
    }).catch((err)=> {
        return res.status(500).json({message:"internal server error"})
    })
    
})


module.exports = router;