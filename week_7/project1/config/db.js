const {connect} = require("mongoose")


const startDB = async()=>{
    await connect("mongodb://localhost:27017/VendingMachine")
    console.log("Database Connected Successfully...")
}

module.exports = {
    startDB
}