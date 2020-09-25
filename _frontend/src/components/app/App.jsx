import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import React, {useState} from 'react';

import BuildWatchPage from '../build-watch/BuildWatch';
import ContractPage from '../contract/Contract';
import InventoryPage from '../inventory/Inventory';
import PartnershipPage from '../partnership/Partnership';
import SummaryPage from '../summary/Summary';

import './App.scss';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {ORIGIN} from '../../constants/http-constant';

const App = () => {
  const [openNav, setNavOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const NavigationBar = () => {
    return (
      <Navbar color='light' light expand='sm' className='nav-bg'>
        <NavbarBrand href='/' className='text-light font-weight-bold'>
          Omicron
        </NavbarBrand>

        {/** hamburger */}
        <NavbarToggler onClick={() => setNavOpen(!openNav)} />
        <Collapse isOpen={openNav} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <Link
                onClick={() => setNavOpen(false)}
                to='/'
                className='text-light mx-2 no-underline'>
                Build Watch
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setNavOpen(false)}
                to='/contract'
                className='text-light mx-2 no-underline'>
                Contract
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setNavOpen(false)}
                to='/partnership'
                className='text-light mx-2 no-underline'>
                Partnership
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setNavOpen(false)}
                to='/inventory'
                className='text-light mx-2 no-underline'>
                Inventory
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setNavOpen(false)}
                to='/summary'
                className='text-light mx-2 no-underline'>
                Summary
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar />

        <Switch>
          <Route path='/' component={BuildWatchPage} exact />
          <Route path='/contract' component={ContractPage} exact />
          <Route path='/partnership' component={PartnershipPage} exact />
          <Route path='/inventory' component={InventoryPage} exact />
          <Route path='/summary' component={SummaryPage} exact/>
        </Switch>
      </BrowserRouter>
      <button
        className='btn btn-outline-primary btn-reset bg-white'
        disabled={submitting}
        onClick={async () => {
          await setSubmitting(true);
          await fetch(ORIGIN + '/api/mock/faces', {method: 'POST'});
          await fetch(ORIGIN + '/api/mock/bands', {method: 'POST'});
          await fetch(ORIGIN + '/api/mock/partners', {method: 'POST'});
          await fetch(ORIGIN + '/api/mock/warranties', {method: 'POST'});
          await fetch(ORIGIN + '/api/mock/invoices', {method: 'DELETE'});
          setSubmitting(false);
        }}>
        {submitting ? (
          <span className='fa fa-ellipsis-h' />
        ) : (
          <span className='fa fa-sync' />
        )}
      </button>
    </div>
  );
};
export default App;
