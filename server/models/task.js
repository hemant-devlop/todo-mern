const mongoose=require('mongoose');
taskSchema= new mongoose.Schema({
    title:String,
    completed:Boolean
});

module.exports = mongoose.model('task',taskSchema)