require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT3;
const MONGODB_URI = 'mongodb+srv://vimukthi:1234pwd@lasttable.hywr4rc.mongodb.net/?retryWrites=true&w=majority'; //  MongoDB connection string

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req,res,next)=>{
  console.log(req.path,req.method)
  next()
})

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error', err));

// Define routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

