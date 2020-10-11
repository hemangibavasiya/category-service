const { saveData, getData, updateData, deleteData} = require('../repository/commonRepo'),
_ = require('lodash')



const categoryInsert = (body) => {
    return new Promise(async (resolve, reject) => {
        const insertData = {}
        insertData['name'] = body.name
        const savedData = await saveData(insertData, 'category')
        return resolve(savedData)
    })
}

const getAllData = () => {
    return new Promise(async (resolve, reject) => {
        const data = await getData({}, {}, 'category')
        return resolve(data)
    })
}

const updateCatData = (id , body) => {
    return new Promise(async (resolve, reject) => {
        const data = await updateData({'id': id}, body, 'category')
        return resolve(data)
    })
}

const deleteCatData = (id) => {
    return new Promise(async (resolve, reject) => {
        const data = await deleteData({'id': id}, 'category')
        return resolve(data)
    })
}

const getCatForMenu = () => {
    return new Promise(async (resolve, reject) => {
        const data = await getData({}, {}, 'category')
        const response = _.map(data, 'name')
        return resolve(response)
    })
}


module.exports = {
    categoryInsert,
    getAllData,
    updateCatData,
    deleteCatData,
    getCatForMenu
}