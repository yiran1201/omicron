import './Contract.scss';
import React, {useState} from 'react';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from 'availity-reactstrap-validation';
import Logo from './logo.png';
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import Generator from './_Generator';

const QUANTITY_OPTIONS = [300, 500, 1000, 1500];

const PAYMENT_TERMS = ['Payment In Advance', 'Net 30 Days', 'Net 60 Days'];
const LOGISTIC_OPTIONS = [
  'Deliver to customer address',
  'Pick up at Omicron warehouse',
];
const ORIGIN = 'http://localhost:7777';
const ADD_CLIENT_API = ORIGIN + '/api/watch/client';

const Contract = () => {
  const [quantity, setQuantity] = useState(QUANTITY_OPTIONS[0]);
  const [unitPrice, setUnitPrice] = useState(500);
  const [clientName, setClientName] = useState('');
  const [submitForm, setSubmitForm] = useState({});

  const [openTermOption, setTermOption] = useState(false);
  const [paymentTerm, setPaymentTerm] = useState(PAYMENT_TERMS[0]);

  const [openLogisticOption, setLogisticOption] = useState(false);
  const [selectedLogistic, setSelectedLogistic] = useState(LOGISTIC_OPTIONS[0]);

  // Modal
  const [openModal, setModal] = useState(false);

  // Address
  const [streetAddress1, setStreetAddress1] = useState('');
  const [streetAddress2, setStreetAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  //Tracking
  const [trackingId, setTrackingId] = useState('');
  const [trackingError, setTrackingError] = useState('');

  //client ID
  const [clientId, setClientId] = useState('');


  const generateInvoice = () => {
    setSubmitForm({
      unitPrice: Number(unitPrice),
      quantity: Number(quantity),
      paymentTerm: paymentTerm,
      logistic: selectedLogistic,
      clientName: clientName,
      address: {
        streetAddress1: streetAddress1,
        streetAddress2: streetAddress2,
        city: city,
        state: state,
        zipCode: zipCode,
      },
    });
  };

  const fillDemoData = () => {
    setQuantity(QUANTITY_OPTIONS[2]);
    setUnitPrice(200);
    setClientName('DealPartner, LLC');
    setSelectedLogistic(LOGISTIC_OPTIONS[1]);
    setPaymentTerm(PAYMENT_TERMS[1]);
    setStreetAddress1('1399 industry Ave');
    setStreetAddress2('suite 103');
    setCity('San Francisco');
    setState('CA');
    setZipCode(94053);
  };

  const clearForm = () => {
    setQuantity(QUANTITY_OPTIONS[0]);
    setUnitPrice(100);
    setClientName('');
    setSelectedLogistic(LOGISTIC_OPTIONS[0]);
    setPaymentTerm(PAYMENT_TERMS[0]);
    setStreetAddress1('');
    setStreetAddress2('');
    setCity('');
    setState('');
    setZipCode('');
  };

  /********************
   * CHILD COMPONENTS *
   ********************/
  const InvoiceModal = () => {
    return (
      <Modal isOpen={openModal} className='invoice-modal'>
        <ModalHeader toggle={() => setModal(false)}>
          Purchase Agreement
        </ModalHeader>
        <ModalBody>
          <Generator form={submitForm} />
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={() => setModal(false)}>
            Cancel
          </Button>

          <button
            className='btn btn-primary'
            onClick={async () => {
              const response = await fetch(ADD_CLIENT_API, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(submitForm),
              });
              const newClientId = await response.json();
              setClientId(newClientId);
              setModal(false);
              window.scrollTo(0, 0);
              clearForm();
            }}>
            Print Agreement
          </button>
        </ModalFooter>
      </Modal>
    );
  };

  const Banner = () => {
    return clientId === '' ? (
      <div />
    ) : (
      <div className='alert alert-success' role='alert'>
        <strong>Client ID:</strong> {clientId}
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
          onClick={() => {
            setClientId('');
          }}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    );
  };

  const TrackingForm = () => {
    return (
      <AvForm
        onSubmit={async (event, errors, values) => {
          event.persist();
          console.log(errors);
          if (errors.length !== 0) return;

          const response = await fetch(`${ADD_CLIENT_API}/${trackingId}`);
          if (response.status === 200) {
            const data = await response.json();
            setQuantity(data.quantity);
            setUnitPrice(data.unitPrice);
            setClientName(data.clientName);
            setPaymentTerm(data.paymentTerm);
            setSelectedLogistic(data.logistic);
            setStreetAddress1(data.address.streetAddress1);
            setStreetAddress2(data.address.streetAddress2);
            setCity(data.address.city);
            setState(data.address.state);
            setZipCode(data.address.zipCode);
          } else {
            setTrackingError('Client Not Found');
          }
        }}>
        <Container>
          <AvGroup className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text text-success'>Tracking ID</span>
            </div>
            <AvInput
              required
              type='text'
              name='tracking_id'
              className='form-control'
              value={trackingId}
              onChange={(event) => {
                setTrackingId(event.target.value);
                if (trackingError !== '') {
                  setTrackingError(''); //当user输入ID信息的时候重新reset
                }
              }}
            />
            <div className='input-group-append'>
              <Button
                className='btn-block rounded-right'
                color='primary'
                type='submit'>
                Track
              </Button>
            </div>
            <AvFeedback>Field cannot be empty</AvFeedback>
          </AvGroup>
          {trackingError.length > 0 ? (
            <div className='text-danger'>{trackingError}</div>
          ) : (
            ''
          )}
        </Container>
      </AvForm>
    );
  };

  const TextForm = (displayName, value, setter) => {
    return (
      <AvGroup className='input-group'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>{displayName}</span>
        </div>
        <AvInput
          required
          type='text'
          name={displayName}
          className='form-control'
          value={value}
          onChange={(event) => setter(event.target.value)}
        />
        <AvFeedback>{`Enter ${displayName}`}</AvFeedback>
      </AvGroup>
    );
  };

  const ButtonsGroup = () => {
    return (
      <>
        <Row>
          <Col xs={12}>
            <button
              className='btn btn-block btn-outline-danger'
              onClick={() => clearForm()}
              type='button'>
              Clear
            </button>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <button
              className='btn btn-warning btn-block'
              onClick={() => fillDemoData()}
              type='button'>
              Demo
            </button>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <button className='btn btn-primary btn-block' type='submit'>
              Generate
            </button>
          </Col>
        </Row>
      </>
    );
  };

  /**
   * this.handleSubmit
   * (event, errors, values) => this.handleSubmit(event, errors, values)
   */
  return (
    <>
      <Banner />
      <div className='mt-4' id='contract-page'>
        <div className='text-center'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='text-center h2'>Omicron</div>

        {TrackingForm()}
        {/**通过Call function的形式来读到component */}

        <AvForm
          onSubmit={(event, errors, values) => {
            event.persist();

            // errors告诉name对应的地方是否有错误
            // value给出name对应的值
            if (errors.length === 0) {
              generateInvoice();
              setModal(true);
            }
          }}>
          <Container>
            <Row>
              <Col sm={12} md={6} className='address-col mb-md-0'>
                <AvGroup>
                  <Dropdown
                    direction='down'
                    isOpen={openTermOption}
                    toggle={() => setTermOption(!openTermOption)}>
                    <DropdownToggle className='btn btn-info btn-block' caret>
                      {paymentTerm}
                    </DropdownToggle>
                    <DropdownMenu>
                      {PAYMENT_TERMS.map((term) => (
                        <DropdownItem
                          key={term}
                          disabled={term === paymentTerm}
                          onClick={() => {
                            setPaymentTerm(term);
                          }}>
                          {term}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </AvGroup>
              </Col>

              <Col sm={12} md={6}>
                <AvGroup>
                  <Dropdown
                    direction='down'
                    isOpen={openLogisticOption}
                    toggle={() => setLogisticOption(!openLogisticOption)}>
                    <DropdownToggle className='btn btn-info btn-block' caret>
                      {selectedLogistic}
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
                </AvGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6} sm={12} className='address-col mb-md-0'>
                <AvGroup className='input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>$</span>
                  </div>
                  <AvInput
                    type='number'
                    className='form-control'
                    name='unitPrice'
                    aria-label='Amount (to the nearest dollar)'
                    value={unitPrice}
                    onChange={(event) => {
                      event.preventDefault();
                      setUnitPrice(event.target.value);
                    }}
                  />
                  <AvFeedback>Enter unit price</AvFeedback>
                </AvGroup>
              </Col>

              <Col md={6} sm={12}>
                <AvGroup className='input-group'>
                  <div className='input-group-prepend'>
                    <label className='input-group-text'>Quantity</label>
                  </div>
                  <select
                    className='custom-select'
                    name='quantity'
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
                  <AvFeedback>Enter Quantity</AvFeedback>
                </AvGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                {TextForm('Client Name', clientName, setClientName)}
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                {TextForm(
                  'Street Address 1',
                  streetAddress1,
                  setStreetAddress1
                )}
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                {TextForm(
                  'Street Address 2',
                  streetAddress2,
                  setStreetAddress2
                )}
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6} className='mb-md-0 address-col'>
                {TextForm('City', city, setCity)}
              </Col>

              <Col sm={12} md={3} className='mb-md-0 address-col'>
                {TextForm('State', state, setState)}
              </Col>

              <Col sm={12} md={3}>
                {TextForm('Zip', zipCode, setZipCode)}
              </Col>
            </Row>

            <ButtonsGroup />
          </Container>
        </AvForm>

        {/** Modal是一个function，一般放在最外面div*/}
        <InvoiceModal />
      </div>
    </>
  );
};

export default Contract;
