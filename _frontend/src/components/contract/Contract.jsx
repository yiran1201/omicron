import './Contract.scss';
import React, {useState} from 'react';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from 'availity-reactstrap-validation';
import Logo from './logo.png';
// import Pdf from 'react-to-pdf';
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
import Generator from './Generator';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const QUANTITY_OPTIONS = [300, 500, 1000, 1500];

const PAYMENT_TERMS = ['Payment In Advance', 'Net 30 Days', 'Net 60 Days'];
const LOGISTIC_OPTIONS = [
  'Deliver to customer address',
  'Pick up at Omicron warehouse',
];

const Contract = () => {
  const ref = React.createRef();

  const [quantity, setQuantity] = useState(QUANTITY_OPTIONS[0]);
  const [unitPrice, setUnitPrice] = useState(500);
  const [clientName, setClientName] = useState('');
  const [submitForm, setSubmitForm] = useState({});

  const [openTermOption, setTermOption] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState(PAYMENT_TERMS[0]);

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

  const generateInvoice = () => {
    setSubmitForm({
      unitPrice: Number(unitPrice),
      quantity: Number(quantity),
      paymentTerm: selectedTerm,
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
    setSelectedTerm(PAYMENT_TERMS[1]);
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
    setSelectedTerm(PAYMENT_TERMS[0]);
    setStreetAddress1('');
    setStreetAddress2('');
    setCity('');
    setState('');
    setZipCode('');
  };

  const InvoiceModal = () => {
    return (
      <Modal isOpen={openModal} className='invoice-modal'>
        <ModalHeader toggle={() => setModal(false)}>
          Purchase Agreement
        </ModalHeader>
        <ModalBody>
          <div ref={ref} id='agreement' style={{padding: 16}}>
            <Generator form={submitForm} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={() => setModal(false)}>
            Cancel
          </Button>
          {/* <Pdf targetRef={ref} filename='term-agreement.pdf'>
            {({toPdf}) => (
              <button className='btn btn-primary' onClick={toPdf}>
                Print Agreement
              </button>
            )}
          </Pdf> */}

          <button
            className='btn btn-primary'
            onClick={async () => {
              const input = document.getElementById('agreement');
              const canvas = await html2canvas(input);
              const imgData = canvas.toDataURL('image/png');

              const imgWidth = 210;
              const pageHeight = 294;
              const imgHeight = (canvas.height * imgWidth) / canvas.width;
              let heightRemain = imgHeight;
              let position = 0;

              const doc = new jsPDF('p', 'mm');
              doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
              heightRemain -= pageHeight;

              while (heightRemain >= 0) {
                position = heightRemain - imgHeight + 12;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightRemain -= pageHeight;
                heightRemain -= 12;
              }
              doc.save('Purchase Agreement.pdf');
            }}>
            Print Agreement
          </button>
          {/* <Button color='primary' onClick={() => setModal(false)}>
            Accept
          </Button> */}
        </ModalFooter>
      </Modal>
    );
  };
  /**
   * this.handleSubmit
   * (event, errors, values) => this.handleSubmit(event, errors, values)
   */
  return (
    <div className='mt-4' id='contract-page'>
      <div className='text-center'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='text-center h2'>Omicron</div>

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
                    {selectedTerm}
                  </DropdownToggle>
                  <DropdownMenu>
                    {PAYMENT_TERMS.map((term) => (
                      <DropdownItem
                        key={term}
                        disabled={term === selectedTerm}
                        onClick={() => {
                          setSelectedTerm(term);
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
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Client name</span>
                </div>
                <AvInput
                  required
                  type='text'
                  name='clientName'
                  className='form-control'
                  value={clientName}
                  onChange={(event) => {
                    event.preventDefault();
                    setClientName(event.target.value);
                  }}
                />
                <AvFeedback>Enter client name</AvFeedback>
              </AvGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Street Address 1</span>
                </div>
                <AvInput
                  required
                  type='text'
                  name='streetAddress1'
                  className='form-control'
                  value={streetAddress1}
                  onChange={(event) => {
                    event.preventDefault();
                    setStreetAddress1(event.target.value);
                  }}
                />
                <AvFeedback>Enter street address1</AvFeedback>
              </AvGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <AvGroup className='input-group'>
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
              </AvGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className='mb-md-0 address-col'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>City</span>
                </div>
                <AvInput
                  required
                  type='text'
                  className='form-control'
                  name='city'
                  value={city}
                  onChange={(event) => {
                    event.preventDefault();
                    setCity(event.target.value);
                  }}
                />
                <AvFeedback>Enter City</AvFeedback>
              </AvGroup>
            </Col>

            <Col sm={12} md={3} className='mb-md-0 address-col'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>State</span>
                </div>
                <AvInput
                  required
                  type='text'
                  name='state'
                  className='form-control'
                  value={state}
                  onChange={(event) => {
                    event.preventDefault();
                    setState(event.target.value);
                  }}
                />
                <AvFeedback>Enter State</AvFeedback>
              </AvGroup>
            </Col>

            <Col sm={12} md={3}>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Zip</span>
                </div>
                <AvInput
                  required
                  type='text'
                  name='zipCode'
                  className='form-control'
                  value={zipCode}
                  onChange={(event) => {
                    event.preventDefault();
                    setZipCode(event.target.value);
                  }}
                />
                <AvFeedback>Enter zip code</AvFeedback>
              </AvGroup>
            </Col>
          </Row>

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
        </Container>
      </AvForm>

      {/** Modal是一个function，一般放在最外面div*/}
      <InvoiceModal />
    </div>
  );
};

export default Contract;
