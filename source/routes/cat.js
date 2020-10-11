const router = require('express').Router()
const { categoryInsert, getAllData, updateCatData, deleteCatData, getCatForMenu } = require('../services/category')
const status  = require('http-status')
const comCon = require('../constants/comCon')


router.post('/insert', async (req, res) => {
    try {
        const body = req.body
        const response = await categoryInsert(body)
        res.status(status.OK).send(response)
    } catch (error) {
        if (error.status) res.status(error.status).send({"error_message": error.message})
        res.status(status.INTERNAL_SERVER_ERROR).send({"error_message": error})
    }
})

router.get('/get', async (req, res) => {
    try {
        const response = await getAllData()
        res.status(status.OK).send(response)
    } catch (error) {
        if (error.status) res.status(error.status).send({"error_message": error.message})
        res.status(status.INTERNAL_SERVER_ERROR).send({"error_message": error})
    }
})


router.post('/update', async (req, res) => {
    try {
        const body = req.body
        const id = req.query.id
        const response = await updateCatData( id , body)
        res.status(status.OK).send(response)
    } catch (error) {
        if (error.status) res.status(error.status).send({"error_message": error.message})
        res.status(status.INTERNAL_SERVER_ERROR).send({"error_message": error})
    }
})

router.delete('/delete', async (req, res) => {
    try {
        const id = req.query.id
        const response = await deleteCatData(id)
        res.status(status.OK).send(response)
    } catch (error) {
        if (error.status) res.status(error.status).send({"error_message": error.message})
        res.status(status.INTERNAL_SERVER_ERROR).send({"error_message": error})
    }
})

router.get('/get/menu', async (req, res) => {
    try {
        const response = await getCatForMenu()
        res.status(status.OK).send(response)
    } catch (error) {
        if (error.status) res.status(error.status).send({"error_message": error.message})
        res.status(status.INTERNAL_SERVER_ERROR).send({"error_message": error})
    }
})

module.exports = router