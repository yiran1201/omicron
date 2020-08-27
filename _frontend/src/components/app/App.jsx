import './App.scss';
import React, {useState} from 'react';
import BuildWatchPage from '../build-watch/BuildWatch';
import ContractPage from '../contract/Contract';
import PartnershipPage from '../partnership/Partnership';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

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
              <NavLink href='/'>Build Watch</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/contract'>Contract</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/partnership'>Partnership</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  };

  return (
    <div className='App'>
      <NavigationBar />

      <BrowserRouter>
        <Switch>
          <Route path='/' component={BuildWatchPage} exact />
          <Route path='/contract' component={ContractPage} exact />
          <Route path='/partnership' component={PartnershipPage} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
