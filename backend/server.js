require('dotenv').config()
const cors = require("cors");
const express = require ('express')
const mongoose= require('mongoose')
const tableRoutes = require('./routes/tableData')


//express app
const app = express()

//middleware
app.use(cors());
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
// routes
app.use('/api/tables',tableRoutes)
//app.use('/api/data',formRoutes)

//Connect to the db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen foor request
    app.listen(process.env.PORT,()=>{
    console.log('connect to the db and listen on port 4000')
})
})
.catch((error)=>{
    console.log(error)
})


