const mongoose=require('mongoose');
taskSchema= new mongoose.Schema({
    title:String,
    taskdate: { type: Date, default: Date.now },
    completed:Boolean
});

module.exports = mongoose.model('task',taskSchema)