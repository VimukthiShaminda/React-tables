const mongoose = require('mongoose')

const Schema = mongoose.Schema


    const tableDataSchema = new Schema({

        id:{
            type:String,
            required:true
        },
        firstName:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        Gender:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        },
    },{timestamps:true})
    
module.exports = mongoose.model('tableData',tableDataSchema)