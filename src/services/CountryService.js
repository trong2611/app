const { where } = require("sequelize")
const db = require("../models/index")
const { raw } = require("body-parser")

let createNewCountry = async (data) => {
    return new Promise( async (resolve, reject) => {
        try {
            await db.Country.create({
                name: data.name
            })
            resolve('Successfuly')
        } catch (error) {
            reject(error)
        }
    })
}

let deleteCountryById = async (countryId) => {
    return new Promise( async (resolve, reject) => {
        try {
            let country = await db.Country.findOne({
                where: {id: countryId}
            })
            if(country) await country.destroy()
            resolve('Successfuly')
        } catch (error) {
            reject(error)
        }
    })
}

let getAllCountry = async () => {
    return new Promise( async (resolve, reject) => {
        try {
            let country = await db.Country.findAll({raw: true});
            resolve(country)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewCountry: createNewCountry,
    deleteCountryById: deleteCountryById,
    getAllCountry: getAllCountry,
}