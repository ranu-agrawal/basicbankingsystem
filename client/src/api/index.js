import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchCustomers = () => API.get('/customers');

export const fetchTransactions = () => API.get('/transactions');
export const createTransaction = (transaction) => API.post('/transactions', transaction);