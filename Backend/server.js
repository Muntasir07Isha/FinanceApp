import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import applicationRoutes from './routes/applicationRoute.js';  // Use ES module import
import allowCors from './middleware/applicationMiddleware.js'

dotenv.config();

const app = express();

app.use(allowCors);

const port = process.env.PORT || 4000;
 
app.use(express.json());

app.use('/application', applicationRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
