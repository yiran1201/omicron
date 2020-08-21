import './Contract.scss';
import React, {useState} from 'react';
import Logo from './logo.png';
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const QUANTITY_OPTIONS = [300, 500, 1000, 1500];

const PAYMENT_TERMS = ['Payment In Advance', 'Net 30 Days', 'Net 60 Days'];
const LOGISTIC_OPTIONS = [
  'Deliver to customer address',
  'Pick up at Omicron warehouse',
];
const Contract = () => {
  const [quantity, setQuantity] = useState(QUANTITY_OPTIONS[0]);
  const [unitPrice, setUnitPrice] = useState(500);
  const [openTermOption, setTermOption] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState('');
  const [openLogisticOption, setLogisticOption] = useState(false);
  const [selectedLogistic, setSelectedLogistic] = useState('');
  const [clientName, setClientName] = useState('xxx');
  const [streetAddress1, setStreetAddress1] = useState('xxx');
  const [streetAddress2, setStreetAddress2] = useState('xxx');
  const [city, setCity] = useState('xxx');
  const [state, setState] = useState('xxx');
  const [zipCode,setZipCode]=useState('xxx')
  return (
    <div className='mt-4' id='contract-page'>
      <div className='text-center'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='text-center h2'>Omicron</div>
      <Container>
        <Row>
          <Col xs={6}>
            <Dropdown
              direction='down'
              isOpen={openTermOption}
              toggle={() => setTermOption(!openTermOption)}>
              <DropdownToggle className='btn btn-info btn-block' caret>
                {selectedTerm === '' ? 'Payment Term' : selectedTerm}
              </DropdownToggle>
              <DropdownMenu>
                {PAYMENT_TERMS.map((term) => (
                  <DropdownItem
                    key={term}
                    disabled={term === selectedTerm}
                    onClick={() => setSelectedTerm(term)}>
                    {term}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col xs={6}>
            <Dropdown
              direction='down'
              isOpen={openLogisticOption}
              toggle={() => setLogisticOption(!openLogisticOption)}>
              <DropdownToggle className='btn btn-info btn-block' caret>
                {selectedLogistic === '' ? 'Logistic' : selectedLogistic}
              </DropdownToggle>
              <DropdownMenu>
                {LOGISTIC_OPTIONS.map((logistic) => (
                  <DropdownItem
                    key={logistic}
                    disabled={logistic === selectedLogistic}
                    onClick={() => setSelectedLogistic(logistic)}>
                    {logistic}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>$</span>
              </div>
              <input
                type='number'
                className='form-control'
                aria-label='Amount (to the nearest dollar)'
                value={unitPrice}
                onChange={(event) => {
                  event.preventDefault();
                  setUnitPrice(event.target.value);
                }}
              />
            </div>
          </Col>
          <Col xs={6}>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <label
                  className='input-group-text'
                  htmlFor='inputGroupSelect01'>
                  Quantity
                </label>
              </div>
              <select
                className='custom-select'
                id='inputGroupSelect01'
                value={quantity}
                onChange={(event) => {
                  event.preventDefault();
                  setQuantity(Number(event.target.value));
                }}>
                {QUANTITY_OPTIONS.map((quant) => (
                  <option value={quant} key={quant}>
                    {quant}
                  </option>
                ))}
              </select>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id=''>
                  Client name
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                value={clientName}
                onChange={(event) => {
                  event.preventDefault();
                  setClientName(event.target.value);
                }}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id=''>
                  Street Address 1
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                value={streetAddress1}
                onChange={(event) => {
                  event.preventDefault();
                  setStreetAddress1(event.target.value);
                }}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id=''>
                  Street Address 2
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                value={streetAddress2}
                onChange={(event) => {
                  event.preventDefault();
                  setStreetAddress2(event.target.value);
                }}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id=''>
                  City
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                value={city}
                onChange={(event) => {
                  event.preventDefault();
                  setCity(event.target.value);
                }}
              />
            </div>
          </Col>
          <Col xs={3}>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id=''>
                  State
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                value={state}
                onChange={(event) => {
                  event.preventDefault();
                  setState(event.target.value);
                }}
              />
            </div>
          </Col>

          <Col xs={3}>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id=''>
                Zip Code
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                value={zipCode}
                onChange={(event) => {
                  event.preventDefault();
                  setZipCode(event.target.value);
                }}
              />
            </div>
          </Col>



        </Row>
      </Container>
    </div>
  );
};

export default Contract;
