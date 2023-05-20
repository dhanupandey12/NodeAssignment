const { default: mongoose } = require('mongoose');

const connectDB = () => {

    mongoose.connect('mongodb://localhost:27017/user', {
        useNewUrlParser: true
    }).then(()=> {
        console.log('connected to mongodb')
    }).catch((err)=> {
        console.log('connection failed', err)
    })

}


module.exports = connectDB;