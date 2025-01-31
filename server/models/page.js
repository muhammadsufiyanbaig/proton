const mongoose=require("mongoose");
 const pageschema=new mongoose.Schema({

title:{

    type:String
},
slug:{

    type:String
},
content:{

    type:String
},
sidebar:{

    type:String
}


 })

 module.exports=mongoose.model("pages",pageschema);