const { where } = require("sequelize")
const db = require("../models/index")

let createNewStateFeature = async (data) => {
    return new Promise( async (resolve, reject) => {
        try {
            await db.StateFeature.create({
                stateId: data.stateId,
                featureId: data.featureId
            })
            resolve('Successfuly')
        } catch (error) {
            reject(error)
        }
    })
}

let deleteStateFeatureById = async (stateFeatureId) => {
    return new Promise( async (resolve, reject) => {
        try {
            let stateFeature = await db.StateFeature.findOne({
                where: {id: stateFeatureId}
            })
            if(stateFeature) await stateFeature.destroy()
            resolve('Successfuly')
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewStateFeature: createNewStateFeature,
    deleteStateFeatureById: deleteStateFeatureById
}