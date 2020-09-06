import React from 'react';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from 'availity-reactstrap-validation';
import {Container, Row, Col, Button} from 'reactstrap';
import {useState} from 'react';

const ORIGIN = 'http://localhost:7777';
const ClientInfoForm = () => {
  const [clientName, setClientName] = useState('');
  const [streetAddress1, setStreetAddress1] = useState('');
  // const [streetAddress2, setStreetAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const submitForm = () => {
  };
  return (
    <AvForm
      className='mt-4'
      onSubmit={async (event, errors, values) => {
        event.persist();
        if (errors.length === 0) {
          //提交表格里的信息
          submitForm();
          await fetch(ORIGIN + '/api/watch/client', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
          });
        }
      }}>
      <Container>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item active' aria-current='page'>
              Omicron
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Client Info
            </li>
          </ol>
        </nav>
        <Row>
          <Col md={6} sm={12} className='watchFace-col mb-md-0'>
            <AvGroup className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Client Name</span>
              </div>
              <AvInput
                required
                type='text'
                className='form-control'
                name='name'
                value={clientName}
                onChange={(event) => {
                  event.preventDefault();
                  setClientName(event.target.value);
                }}
              />

              <AvFeedback>Enter client name</AvFeedback>
            </AvGroup>
          </Col>

          <Col md={6} sm={12} className='watchFace-col mb-md-0'>
            <AvGroup className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>streetAddress</span>
              </div>
              <AvInput
                required
                type='text'
                className='form-control'
                name='address'
                value={streetAddress1}
                onChange={(event) => {
                  event.preventDefault();
                  setStreetAddress1(event.target.value);
                }}
              />

              <AvFeedback>Enter street address</AvFeedback>
            </AvGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={12} className='mb-md-0 address-col'>
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
              <AvFeedback>Enter city</AvFeedback>
            </AvGroup>
          </Col>

          <Col sm={4} md={12} className='mb-md-0 address-col'>
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
              <AvFeedback>Enter state</AvFeedback>
            </AvGroup>
          </Col>

          <Col sm={3} md={12}>
            <AvGroup className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Zip</span>
              </div>
              <AvInput
                required
                type='text'
                name='zip'
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
          <Col xs={12} sm={3} className='ml-auto align-self-end'>
            <Button className='btn-block' color='primary' type='submit'>
              Submit Client Info
            </Button>
          </Col>
        </Row>
      </Container>
    </AvForm>
  );
};

export default ClientInfoForm;
