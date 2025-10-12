const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://todo-mern-be91.onrender.com"],
  credentials: true
}));
const PORT = process.env.PORT || 5000
const taskRoutes = require('./routes/tasks')
app.use('/app/tasks', taskRoutes);
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
app.get('/', (req, res) => res.send('server is runnning'));
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
