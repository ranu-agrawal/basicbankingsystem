import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import customerRoutes from './routes/customers.js';
import transactionRoutes from './routes/transactions.js';

const app = express();
dotenv.config();

app.use(express.json({ limit:"30mb", extended: true }));
app.use(express.urlencoded({ limit:"30mb", extended: true }));
app.use(cors());

app.use('/customers', customerRoutes);
app.use('/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);