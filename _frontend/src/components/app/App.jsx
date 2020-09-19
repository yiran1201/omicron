import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import React, {useState} from 'react';

import BuildWatchPage from '../build-watch/BuildWatch';
import ContractPage from '../contract/Contract';
import InventoryPage from '../inventory/Inventory';
import PartnershipPage from '../partnership/Partnership';

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
      <Navbar color='light' light expand='sm'>
        <NavbarBrand href='/'>Omicron</NavbarBrand>

        {/** hamburger */}
        <NavbarToggler onClick={() => setNavOpen(!openNav)} />
        <Collapse isOpen={openNav} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              {/* <NavLink href='/'>Build Watch</NavLink> */}
              <Link to='/' className='text-dark mx-2'>
                Build Watch
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/contract' className='text-dark mx-2'>
                Contract
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/partnership' className='text-dark mx-2'>
                Partnership
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/inventory' className='text-dark mx-2'>
                Inventory
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
