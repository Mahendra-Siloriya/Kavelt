
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{10}$/
  },
  bottleSize: {
    type: String,
    required: true,
    enum: ['200ml', '500ml', '1 Liter', '2 Liter', '5 Liter', '20 Liter']
  },
  quantity: {
    type: Number,
    required: true,
    min: 100,
    max: 100000
  },
  address: {
    type: String,
    default: '',
    maxlength: 2000
  }
}, {
  timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model('Order', OrderSchema);
