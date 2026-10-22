
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

async function sendOrderEmail(order) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Kavelt Order Enquiry from ${order.name}`,
    text: [
      'New Kavelt Order Enquiry',
      `Name: ${order.name}`,
      `Phone: ${order.phone}`,
      `Bottle Size: ${order.bottleSize}`,
      `Quantity: ${order.quantity}`,
      `Address / Requirement: ${order.address || 'N/A'}`,
      `Order ID: ${order._id}`,
      `Time: ${order.createdAt.toLocaleString()}`
    ].join('\n'),
    html: `
      <h2>New Kavelt Order Enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(order.name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(order.phone)}</p>
      <p><strong>Bottle Size:</strong> ${escapeHtml(order.bottleSize)}</p>
      <p><strong>Quantity:</strong> ${order.quantity}</p>
      <p><strong>Address:</strong> ${escapeHtml(order.address || 'N/A')}</p>
      <p><strong>Order ID:</strong> ${escapeHtml(order._id)}</p>
      <p><strong>Time:</strong> ${escapeHtml(order.createdAt.toLocaleString())}</p>
    `
  });
}

module.exports = { transporter, sendOrderEmail };
