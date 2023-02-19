const mongoose= require('mongoose')

const schemas=mongoose.Schema(
    {
        NewText:String
    }
)

module.exports=mongoose.model('Lists', schemas);