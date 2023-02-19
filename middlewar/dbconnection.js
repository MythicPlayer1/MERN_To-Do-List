const mongoose= require('mongoose')
const dbconnect=()=>{
    mongoose.set('strictQuery',true);
    return(mongoose.connect("mongodb://localhost:27017/TO-Do-List"))
}
module.exports=dbconnect;