import mongoose from 'mongoose';

const transactionSchema = mongoose.Schema({
  from: {
    type: Object,
    required: true,
  },
  to: {
    type: Object,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
})

var Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;