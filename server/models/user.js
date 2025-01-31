const mongoose=require("mongoose");
 const userschema=new mongoose.Schema({

firstname:{

    type:String
},
lastname:{
    type:String
},
url:{
type:String
},

email:{
    type:String
},
password:{

    type:String
},
confirmPassword:{

    type:String
},
date:{

    type:String
},
gender:{

    type:String
},

 })

 module.exports=mongoose.model("loginreact", userschema);