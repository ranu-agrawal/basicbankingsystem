import express from 'express';
import { getTransactionHistory, createTransaction } from '../controllers/transactions.js';

const router = express.Router();
router.get('/', getTransactionHistory);
router.post('/', createTransaction);

export default router;