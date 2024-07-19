const mongoose=require('mongoose')
const blogSchema=new mongoose.Schema({
    name:String,
    discribtion:String,
    date:String,
    image:String,
});


const blogDB=mongoose.model("blogTBL",blogSchema)
console.log(blogDB)

module.exports={blogDB};

