const { saveData, getData, updateData, deleteData} = require('../repository/commonRepo')


const productInsert = (body) => {
    return new Promise(async (resolve, reject) => {
        const insertData = {}
        insertData['name'] = body.name
        insertData['description'] = body.description
        insertData['category'] = body.category
        const savedData = await saveData(insertData, 'product')
        return resolve(savedData)
    })
}

const getAllData = () => {
    return new Promise(async (resolve, reject) => {

        const data = await getData({}, {}, 'product')
        return resolve(data)
    })
}

const updateProductData = (id , body) => {
    return new Promise(async (resolve, reject) => {
        const data = await updateData({'id': id}, body, 'product')
        return resolve(data)
    })
}

const deleteProductData = (id) => {
    return new Promise(async (resolve, reject) => {
        const data = await deleteData({'id': id}, 'product')
        return resolve(data)
    })
}

module.exports = {
    productInsert,
    getAllData,
    updateProductData,
    deleteProductData
}