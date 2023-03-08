const express = require("express");
const {
    createTableData,
    getTableDatas,
    getTableData,
    deleteTableData,
    updateTableData
} = require('../controllers/tableDataControllers')

const router = express.Router()

//Get all Data
router.get('/',getTableDatas)

//Get a single Data
router.get('/:id',getTableData)

//Post a data
router.post('/',createTableData)

//Delete a data
router.delete('/:id',deleteTableData)


//Update a data
router.patch('/:id',updateTableData)


module.exports = router