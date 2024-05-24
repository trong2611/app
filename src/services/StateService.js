const { where } = require("sequelize")
const db = require("../models/index")
const { raw } = require("body-parser")

let createNewState = async (data) => {
    return new Promise( async (resolve, reject) => {
        try {
            await db.State.create({
                name: data.name,
                countryId: data.countryId
            })
            resolve('Successfuly')
        } catch (error) {
            reject(error)
        }
    })
}

let deleteStateById = async (stateId) => {
    return new Promise( async (resolve, reject) => {
        try {
            let state = await db.State.findOne({
                where: {id: stateId}
            })
            if(state) await state.destroy()
            resolve('Successfuly')
        } catch (error) {
            reject(error)
        }
    })
}

let getAllState = async () => {
    return new Promise( async (resolve, reject) => {
        try {
            let state = await db.State.findAll({raw: true});
            resolve(state)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewState: createNewState,
    deleteStateById: deleteStateById,
    getAllState: getAllState,
}