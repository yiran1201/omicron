import React from 'react';
import './Test.scss';
// import React, {useState} from 'react';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from 'availity-reactstrap-validation';
import {Container, Row, Col, Button} from 'reactstrap';
import {useState} from 'react';

const Test = () => {
  //watch
  const [watchFace, setWatchFace] = useState('');
  const [watchBand, setWatchBand] = useState('');
  const [watchPrice,setWatchPrice]=useState(0);

  // const [unitPrice, setUnitPrice] = useState(100);
  // const [brands, setBrands] = useState([]);
  //address

  // const [clientName, setClientName] = useState('');
  // const [streetAddress1, setStreetAddress1] = useState('');
  // const [streetAddress2, setStreetAddress2] = useState('');
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  // const [zipCode, setZipCode] = useState('');
  //formSubmit
  const [submitForm, setSubmitForm] = useState({});

  return (
    <div>
      <div className='mt-4' id='test-page'>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item active' aria-current='page'>
            Omicron
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Test Field
          </li>
        </ol>
      </nav>
      </div>

      <AvForm
        onSubmit={(event, errors, values) => {
          event.persist();
          if (errors.length === 0) {
            //提交表格里的信息
            submitForm();
          }
        }}>
        <Container>
          <Row>
            <Col md={6} sm={12} className='watchFace-col mb-md-0'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Watch Face</span>
                </div>
                <AvInput
                  quired
                  type='text'
                  className='form-control'
                  name='watchFace'
                  value={watchFace}
                  onChange={(event) => {
                    event.preventDefault();
                    setWatchFace(event.target.value);
                  }}
                />

                <AvFeedback>Enter watch face</AvFeedback>
              </AvGroup>
            </Col>

            <Col md={6} sm={12} className='watchFace-col mb-md-0'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Watch Band</span>
                </div>
                <AvInput
                  quired
                  type='text'
                  className='form-control'
                  name='watchBand'
                  value={watchBand}
                  onChange={(event) => {
                    event.preventDefault();
                    setWatchBand(event.target.value);
                  }}
                />

                <AvFeedback>Enter watch band</AvFeedback>
              </AvGroup>
            </Col>


          </Row>


          <Row>
          <Col md={6} sm={12} className='watchFace-col mb-md-0'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Watch Price </span>
                </div>
                <AvInput
                  required
                  type='number'
                  className='form-control'
                  name='watchBand'
                  value={watchPrice}
                  onChange={(event) => {
                    event.preventDefault();
                    setWatchPrice(event.target.value);
                  }}
                />

                <AvFeedback>Enter watch price</AvFeedback>
              </AvGroup>
            </Col>

          </Row>
        </Container>
      </AvForm>
    </div>
  );
};

export default Test;
