import Transaction from '../models/transaction.js';
import Customers from '../models/customer.js';

export const getTransactionHistory = async (req, res) => {
    try {
        const transactions = await Transaction.find().sort({ date: -1 });
        res.status(200).json(transactions);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createTransaction = async (req, res) => {
    const { from, to, amount } = req.body;

    try {
        
        const fromCustomer = await Customers.findById(from);
        const newFromBalance = Number(fromCustomer.balance) - Number(amount);
        const updatedFrom = await Customers.findByIdAndUpdate({ _id: from }, { balance: newFromBalance }, { new: true });

        const toCustomer = await Customers.findById(to);
        const newToBalance = Number(toCustomer.balance) + Number(amount);
        const updatedTo = await Customers.findByIdAndUpdate({ _id: to }, { balance: newToBalance }, { new: true });
        
        const newTransaction = new Transaction({ from: updatedFrom, to: updatedTo, amount });
        await newTransaction.save();
        res.status(201).json(newTransaction);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}