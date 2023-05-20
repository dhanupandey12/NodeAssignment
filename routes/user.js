const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {authenticateToken} = require('../middleware/index.js');

router.get('/users', authenticateToken, (req, res)=> {
    User.find()
       .then((users)=> {
        res.json(users);
       })
       .catch((err)=> {
        res.status(500).json({msg: "internal err"})
       })
})

router.get('/user/:id', authenticateToken, (req, res)=> {
    const id = req.params.id;
    User.findById(id)
       .then((user)=> {
           if(!user){
            return res.status(404).json({message: "user not found"})
           }
           res.json(user)
       })
       .catch((err)=> {
        res.status(500).json({msg: "internal err"})
       })
})

router.post('/user', authenticateToken,  (req, res)=> {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    bcrypt.hash(password, 10)
    .then((hashedPassword)=>{
        const user = new User({
            firstName,
            lastName, 
            email,
            password: hashedPassword
        })

        return user.save();
    }).then((savedUser)=> {
        res.json(savedUser)
    })
    .catch((err)=> {
        res.status(500).json({msg: err})
    })

})


router.put('/user/:id', authenticateToken,  (req, res)=> {
    const id = req.params.id;
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    User.findByIdAndUpdate(id, {firstName,lastName, email, password })
        .then((updateduser)=> {
            if(!updateduser){
                return res.status(404).json({message: "user not found"})
            }

            res.json(updateduser)
        })
        .catch((err)=> {
            res.status(500).json({msg: "internal err"})

        })
})

router.delete('/user/:id',  authenticateToken, (req, res)=> {
    const id = req.params.id;
    User.findByIdAndDelete(id)
         .then((deleteduser)=> {
            if(!deleteduser){
                return res.status(404).json({message: "user not found"})
            }
            res.json(deleteduser)
         }).catch((err)=> {
            res.status(500).json({msg: "internal err"})

        })

})


module.exports = router;

