import React, { useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createTransaction } from '../../actions/transactions.js';
import { getCustomers } from '../../actions/customers.js';
import { useHistory } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Make A Transaction
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    From Email:
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly key="from" defaultValue={props.customer.email}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1" >
                    <Form.Label>To email:</Form.Label>
                    <Form.Control as="select" onChange={(e) => props.setTransactionData({...props.transactionData, to: e.target.value})}>
                            <option value='DEFAULT'>
                              -- select a person --
                            </option>
                            {props.customers.map((customer) => (
                                <option key={customer._id} value={customer._id}>{customer.email}</option>
                            ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Amount</Form.Label>
                    <Form.Control as="textarea" rows={1} key="amount" value={props.transactionData.amount} onChange={(e) => props.setTransactionData({...props.transactionData, amount: e.target.value})} />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cancel</Button>
          <Button onClick={props.handleSubmit}>Transfer</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
const TransactionModal = ({ customer, customers, modalShow, setModalShow, transactionData, setTransactionData}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch, modalShow])

  
    return (
      <>
        <MyVerticallyCenteredModal
          customer={customer}
          customers={customers}
          show={modalShow}
          transactionData={transactionData}
          setTransactionData={setTransactionData}
          onHide={() => {
            setTransactionData={ to: null, amount:'' };
            setModalShow(false);
          }}
          handleSubmit={(e) => {
            e.preventDefault();
            transactionData.from = customer._id;
            if(transactionData.amount === 0 || transactionData.to === null || transactionData.to === transactionData.from) alert("Fill all the data correctly.");
            else {
              dispatch(createTransaction(transactionData));
              history.push('/transactions');
            }
            setTransactionData={ to: null, amount:'' };
            setModalShow(false);
          }}
        />
      </>
    );
  }
  
export default TransactionModal;