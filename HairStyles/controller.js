const db = require('./mongoDB/manager')

const getAll = async() => {
    response = {}
    const data = await db.getAll()
    return data
}
async function insertOne(item) {
    db.insertOne(item)
}
module.exports = {
    getAll,
    insertOne
};