import './App.scss';
import React, {useState} from 'react';
import BuildWatchPage from '../build-watch/BuildWatch';
import ContractPage from '../contract/Contract';
import PartnershipPage from '../partnership/Partnership';
import InventoryPage from '../inventory/Inventory';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const ORIGIN = 'http://localhost:7777';
const RESET_FACES_API = ORIGIN + '/api/mock/faces';
const RESET_BANDS_API = ORIGIN + '/api/mock/bands';
const RESET_PARTNERS_API = ORIGIN + '/api/mock/partners';

const App = () => {
  const [openNav, setNavOpen] = useState(false);
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
        className='btn btn-outline-primary btn-reset'
        onClick={async () => {
          await fetch(RESET_BANDS_API, {method: 'POST'});
          await fetch(RESET_FACES_API, {method: 'POST'});
          await fetch(RESET_PARTNERS_API, {method: 'POST'});
        }}>
        <span className='fa fa-sync'></span>
      </button>
    </div>
  );
};
export default App;
