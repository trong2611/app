const { where } = require("sequelize")
const db = require("../models/index")

let createNewFeature = async (data) => {
    return new Promise( async (resolve, reject) => {
        try {
            await db.Feature.create({
                name: data.name
            })
            resolve('Successfuly')
        } catch (error) {
            reject(error)
        }
    })
}

let deleteFeatureById = async (featureId) => {
    return new Promise( async (resolve, reject) => {
        try {
            let feature = await db.Feature.findOne({
                where: {id: featureId}
            })
            if(feature) await feature.destroy()
            resolve('Successfuly')
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewFeature: createNewFeature,
    deleteFeatureById: deleteFeatureById
}