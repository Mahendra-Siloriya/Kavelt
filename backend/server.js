
require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');
const { transporter } = require('./services/emailService');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.RECEIVER_EMAIL
    ) {
      throw new Error('Email settings are missing from backend/.env');
    }

    await connectDB();
    await transporter.verify();

    console.log('Email transporter verified successfully');

    app.listen(PORT, () => {
      console.log(`Backend running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1);
  }
}

startServer();
