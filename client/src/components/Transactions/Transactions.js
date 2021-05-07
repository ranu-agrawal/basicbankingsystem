import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactions } from '../../actions/transactions';
import { Container, Table } from 'react-bootstrap';


const Transactions = () => {
    const dispatch = useDispatch();
    const transactions = useSelector((state) => state.transactions);
    console.log(transactions);

    useEffect(() => {
        dispatch(getTransactions());
    }, [dispatch])

    return (
        <Container>
        <Table style={{padding:'10px', margin:'50px'}} striped bordered hover>
        <thead>
            <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody variant="success">
            {transactions?.map((transaction) => (
                <tr>
                <td style={{verticalAlign: 'middle'}} >{transaction.from.name}</td>
                <td style={{verticalAlign: 'middle'}} >{transaction.to.name}</td>
                <td style={{verticalAlign: 'middle'}} >{transaction.amount}</td>
                <td style={{verticalAlign: 'middle'}} >{transaction.date}</td>
                </tr>
            ))}
        </tbody>
        </Table>            
        </Container>
    )
}

export default Transactions;