
const express = require('express');
const cors = require('cors');

const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Kavelt backend is running'
  });
});

app.use('/api/order', orderRoutes);

module.exports = app;
