const mongoose=require('mongoose');
taskSchema= new mongoose.Schema({
    title:String,
    date:Date.now(),
    completed:Boolean
});

module.exports = mongoose.model('task',taskSchema)