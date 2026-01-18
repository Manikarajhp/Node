const mongoose = require("mongoose")

const ConnetDB = async () =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/jobportal");
        console.log("Connected Successfully");
    }catch(error){
        console.log("error on connection");
        process.exit(1);
    }
}

module.exports = ConnetDB;