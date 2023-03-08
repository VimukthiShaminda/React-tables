const TableData = require('../models/tableDataModels')
const mongoose = require('mongoose')

//get all tableData
const getTableDatas = async (req,res) =>{
    const tableDatas = await TableData.find({}).sort({createdAt: -1})

    res.status(200).json(tableDatas)
}

//get a single tableData
    const getTableData = async (req,res)=>{
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'No such data'})
        }

        const tableData = await TableData.findById(id)

        if(!tableData){
            return res.status(404).json({error:'No such data'})
        }
        res.status(200).json(tableData)

    }

//create new tableData
const createTableData = async (req,res) =>{
    const {id,firstName,city,email,phone,Gender,status} = req.body
    
    //add doc to db
    try{
        const tableData = await TableData.create({id,firstName,city,email,phone,Gender,status})
        res.status(200).json(tableData)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete a tableData
const deleteTableData = async (req,res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such data'})

    }

    const tableData = await TableData.findByIdAndDelete({_id:id})

    if(!tableData){
        return res.status(404).json({error:'No such data'})
    }

    res.status(200).json(tableData)
} 

//update a tableData
const updateTableData = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such data'})

    }

    const tableData = await TableData.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if(!tableData){
        return res.status(404).json({error:'No such data'})
    }
    res.status(200).json(tableData)


}

module.exports = {
    
    getTableDatas,
    getTableData,
    createTableData,
    deleteTableData,
    updateTableData
    
}