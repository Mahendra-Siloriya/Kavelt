
require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.RECEIVER_EMAIL) {
      throw new Error(
        'RESEND_API_KEY or RECEIVER_EMAIL is missing from environment variables'
      );
    }

    await connectDB();

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Kavelt backend is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1);
  }
}

startServer();
