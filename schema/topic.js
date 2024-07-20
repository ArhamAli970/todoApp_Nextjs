const mongoose =require("mongoose");

const schema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
    ,
    description:{
        type:String,
        required:true
    }


})

const Topic= mongoose.models.Topic || mongoose.model('Topic',schema);

export default Topic;