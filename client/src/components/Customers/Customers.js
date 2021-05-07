import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCustomers } from '../../actions/customers';
import { Container, Button } from 'react-bootstrap';
import Modal from '../Modal/Modal';

import { Table } from 'react-bootstrap';

const Customers = () => {
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);
    const [customer, setCustomer] = useState({});
    const [transactionData, setTransactionData] = useState({
        to: null,
        amount: ''
    })

    const customers = useSelector((state) => state.customers);

    useEffect(() => {
        dispatch(getCustomers());
    }, [dispatch])


    return (
        <Container>
            <Table style={{padding:'10px', margin:'50px'}} striped bordered hover>
            <thead style={{fontSize: "15px"}}>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {customers?.map((customer) => (
                    <tr
                        key={customer._id}
                    >
                        <td style={{verticalAlign: 'middle'}} >{customer.name}</td>
                        <td style={{verticalAlign: 'middle'}} >{customer.email}</td>
                        <td style={{verticalAlign: 'middle'}} >{customer.balance}</td>
                        <td style={{verticalAlign: 'middle'}} >
                            <Button
                                onClick = {() => {
                                    setModalShow(true);
                                    setCustomer(customer);
                                }}
                            >
                                Transfer
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </Table>
            <Modal
                customer={customer}
                customers={customers}
                modalShow={modalShow}
                setModalShow={setModalShow}
                transactionData={transactionData}
                setTransactionData={setTransactionData}
            />
        </Container>
    )
}

export default Customers;