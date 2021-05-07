import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Navigation from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import Customers from './components/Customers/Customers';
import Transactions from './components/Transactions/Transactions';

const App = () => (
    <BrowserRouter>
        <Navigation />
        <Container>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/customers" exact component={Customers} />
                <Route path="/transactions" exact component={Transactions} />
            </Switch>        
        </Container>
        <Footer />
    </BrowserRouter>
)
export default App;