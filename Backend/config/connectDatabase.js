const mongoose = require('mongoose')

const createConnection = ()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log('MongoDB connected to host: '+con.connection.host)
    }).catch((err)=>{
        console.error('Occured error: '+err)
    })   
}

module.exports = createConnection