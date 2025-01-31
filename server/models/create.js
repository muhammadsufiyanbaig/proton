const mongoose = require("mongoose");
const createschema = new mongoose.Schema({


    username: {
        type: String
    },
    title: {

        type: String
    },
    url:{
        type:String
        },
        postBy:{
            type:String
            },
            profilePic:{
                type:String
                },
    status: {

        type: String
    },
    area: {

        type: String
    },
    userID: {
        type: String
    }


})

module.exports = mongoose.model("createreact", createschema);