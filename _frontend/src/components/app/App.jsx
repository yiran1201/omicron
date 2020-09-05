import './App.scss';
import React, {useState} from 'react';
import BuildWatchPage from '../build-watch/BuildWatch';
import ContractPage from '../contract/Contract';
import PartnershipPage from '../partnership/Partnership';
import InputFormPage from '../input-form/InputForm';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
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
          <Route path='/inventory' component={InputFormPage} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
