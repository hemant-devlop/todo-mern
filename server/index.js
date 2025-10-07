const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000
const taskRoutes = require('./routes/tasks')
app.use('/app/tasks', taskRoutes);
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mern-todo')
app.get('/', (req, res) => res.send('server is runnning'));
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
