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
  const [watchCase, setWatchCase] = useState('');
  const [watchFaceSource, setWatchFaceSource] = useState('');
  const [watchBand, setWatchBand] = useState('');
  const [watchBandSource, setWatchBandSource] = useState('');
  const [watchPrice, setWatchPrice] = useState(0);
  const [watchBandPrice, setWatchbandPrice] = useState(0);
  const [background, setBackground] = useState('');
  const [warranty, setWarranty] = useState(0);
  const [warrantyPrice, setWarrantyPrice] = useState(0);

  // const [unitPrice, setUnitPrice] = useState(100);
  // const [brands, setBrands] = useState([]);
  //address

  const [clientName, setClientName] = useState('');
  const [streetAddress1, setStreetAddress1] = useState('');
  // const [streetAddress2, setStreetAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  //formSubmit
  const [submitForm, setSubmitForm] = useState({});

  //partnership
  const [brands, setBrands] = useState('');
  const [brandSource, setBrandSource] = useState('');
  const [country, setCountry] = useState('');
  const [shops, setShops] = useState(0);

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
            <Col md={4} sm={12} className='watchFace-col mb-md-0'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Watch Face</span>
                </div>
                <AvInput
                  required
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

            <Col md={4} sm={12} className='watchFace-col mb-md-0'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Watch Face Source</span>
                </div>
                <AvInput
                  required
                  type='text'
                  className='form-control'
                  name='watchFace'
                  value={watchFaceSource}
                  onChange={(event) => {
                    event.preventDefault();
                    setWatchFaceSource(event.target.value);
                  }}
                />
                <AvFeedback>Enter watch face source</AvFeedback>
              </AvGroup>
            </Col>
            <Col md={4} sm={12} className='watchFace-col mb-md-0'>
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

          <Row>
            <Col md={4} sm={12} className='watchFace-col mb-md-0'>
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

            <Col md={4} sm={12} className='watchFace-col mb-md-0'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Watch Band Source</span>
                </div>
                <AvInput
                  required
                  type='text'
                  className='form-control'
                  name='watchBandSource'
                  value={watchBandSource}
                  onChange={(event) => {
                    event.preventDefault();
                    setWatchBandSource(event.target.value);
                  }}
                />

                <AvFeedback>Enter watch band link</AvFeedback>
              </AvGroup>
            </Col>

            <Col md={4} sm={12} className='watchFace-col mb-md-0'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Watchband Price </span>
                </div>
                <AvInput
                  required
                  type='number'
                  className='form-control'
                  name='watchBand'
                  value={watchBandPrice}
                  onChange={(event) => {
                    event.preventDefault();
                    setWatchbandPrice(event.target.value);
                  }}
                />

                <AvFeedback>Enter watchband price</AvFeedback>
              </AvGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12} className='watchFace-col mb-md-0'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Background Source</span>
                </div>
                <AvInput
                  required
                  type='text'
                  className='form-control'
                  name='background'
                  value={background}
                  onChange={(event) => {
                    event.preventDefault();
                    setBackground(event.target.value);
                  }}
                />

                <AvFeedback>Enter warranty month</AvFeedback>
              </AvGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12} sm={12} className='watchFace-col mb-md-0'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Watch Case Color</span>
                </div>
                <AvInput
                  required
                  type='text'
                  className='form-control'
                  name='watchcase'
                  value={watchCase}
                  onChange={(event) => {
                    event.preventDefault();
                    setWatchCase(event.target.value);
                  }}
                />

                <AvFeedback>Enter warranty month</AvFeedback>
              </AvGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={12} className='watchFace-col mb-md-0'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Warranty Price</span>
                </div>
                <AvInput
                  required
                  type='number'
                  className='form-control'
                  name='watchBand'
                  value={warrantyPrice}
                  onChange={(event) => {
                    event.preventDefault();
                    setWarrantyPrice(event.target.value);
                  }}
                />

                <AvFeedback>Enter warranty price</AvFeedback>
              </AvGroup>
            </Col>

            <Col md={6} sm={12} className='watchFace-col mb-md-0'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Warranty Month</span>
                </div>
                <AvInput
                  required
                  type='text'
                  className='form-control'
                  name='watchBand'
                  value={warranty}
                  onChange={(event) => {
                    event.preventDefault();
                    setWarranty(event.target.value);
                  }}
                />

                <AvFeedback>Enter warranty month</AvFeedback>
              </AvGroup>
            </Col>
          </Row>
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
                  name='watchBand'
                  value={clientName}
                  onChange={(event) => {
                    event.preventDefault();
                    setClientName(event.target.value);
                  }}
                />

                <AvFeedback>Enter warranty price</AvFeedback>
              </AvGroup>
            </Col>

            <Col md={6} sm={12} className='watchFace-col mb-md-0'>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>streetAddress1</span>
                </div>
                <AvInput
                  required
                  type='text'
                  className='form-control'
                  name='watchBand'
                  value={streetAddress1}
                  onChange={(event) => {
                    event.preventDefault();
                    setStreetAddress1(event.target.value);
                  }}
                />

                <AvFeedback>Enter warranty price</AvFeedback>
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
                <AvFeedback>Enter City</AvFeedback>
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
                <AvFeedback>Enter State</AvFeedback>
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
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item active' aria-current='page'>
                Omicron
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Partnership Input
              </li>
            </ol>
          </nav>

          <Row>
            <Col xs={12} md={6}>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Brands</span>
                </div>
                <AvInput
                  required
                  type='text'
                  name='brands'
                  className='form-control'
                  value={brands}
                  onChange={(event) => {
                    event.preventDefault();
                    setBrands(event.target.value);
                  }}
                />
                <AvFeedback>Enter brands name</AvFeedback>
              </AvGroup>
            </Col>

            <Col xs={12} md={6}>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Country</span>
                </div>
                <AvInput
                  required
                  type='text'
                  name='country'
                  className='form-control'
                  value={country}
                  onChange={(event) => {
                    event.preventDefault();
                    setCountry(event.target.value);
                  }}
                />
                <AvFeedback>Enter country</AvFeedback>
              </AvGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Brand Source Link</span>
                </div>
                <AvInput
                  required
                  type='text'
                  name='country'
                  className='form-control'
                  value={brandSource}
                  onChange={(event) => {
                    event.preventDefault();
                    setBrandSource(event.target.value);
                  }}
                />
                <AvFeedback>Enter country</AvFeedback>
              </AvGroup>
            </Col>
            <Col xs={12} md={6}>
              <AvGroup className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Shops</span>
                </div>
                <AvInput
                  required
                  type='number'
                  name='shops'
                  className='form-control'
                  value={shops}
                  onChange={(event) => {
                    event.preventDefault();
                    setShops(event.target.value);
                  }}
                />
                <AvFeedback>Enter shops number </AvFeedback>
              </AvGroup>
            </Col>
          </Row>
        </Container>
      </AvForm>
    </div>
  );
};

export default Test;
