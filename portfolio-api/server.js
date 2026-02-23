require('dotenv').config();
require('./config/db')();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
  
// routes
app.use('/api/references', require('./routes/references'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/services', require('./routes/services'));
app.use('/api/users', require('./routes/users'));

// 404
app.use((req, res, next) => {
  next(createError(404, 'Not Found'));
});

// global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
