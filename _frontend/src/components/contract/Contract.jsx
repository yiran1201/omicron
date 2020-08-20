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
          <Col cs={12}>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id=''>
                  Client name
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                value={'xxx'}
                onChange={() => {}}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contract;
