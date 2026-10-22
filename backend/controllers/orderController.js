
const Order = require('../models/Order');
const { sendOrderEmail } = require('../services/emailService');

const allowedBottleSizes = [
  '200ml',
  '500ml',
  '1 Liter',
  '2 Liter',
  '5 Liter',
  '20 Liter'
];

async function createOrder(req, res) {
  let newOrder;

  try {
    const {
      userName,
      userPhone,
      bottleSize,
      bottleQty,
      userAddress
    } = req.body;

    if (
      typeof userName !== 'string' ||
      !userName.trim() ||
      userName.trim().length > 100 ||
      typeof userPhone !== 'string' ||
      !/^\d{10}$/.test(userPhone) ||
      typeof bottleSize !== 'string' ||
      !allowedBottleSizes.includes(bottleSize) ||
      !Number.isInteger(Number(bottleQty)) ||
      Number(bottleQty) < 100 ||
      Number(bottleQty) > 100000 ||
      (userAddress !== undefined &&
        (typeof userAddress !== 'string' ||
          userAddress.length > 2000))
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please enter valid details in all required fields.'
      });
    }

    newOrder = await Order.create({
      name: userName.trim(),
      phone: userPhone,
      bottleSize,
      quantity: Number(bottleQty),
      address: (userAddress || '').trim()
    });

    console.log('Order saved:', newOrder._id.toString());
  } catch (error) {
    console.error('Order save failed:', error);

    return res.status(500).json({
      success: false,
      message: 'Could not save the order to the database.'
    });
  }

  try {
    await sendOrderEmail(newOrder);

    return res.status(200).json({
      success: true,
      message: 'Your order enquiry was submitted successfully!'
    });
  } catch (error) {
    console.error('Email sending failed:', error.message);

    return res.status(502).json({
      success: false,
      orderSaved: true,
      orderId: newOrder._id.toString(),
      message: 'Your enquiry was saved, but the email notification failed.'
    });
  }
}

module.exports = { createOrder };
