import React from 'react';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
} from 'availity-reactstrap-validation';
import {Container, Row, Col, Button, Label} from 'reactstrap';
import {useState} from 'react';

const ORIGIN = 'http://localhost:7777';
const WARRANTY_OPTIONS = ['12 months', '24 months'];

const WatchWarrantyForm = () => {
  const [warranty, setWarranty] = useState('');
  const [warrantyPrice, setWarrantyPrice] = useState(0);
  return (
    <AvForm
      onSubmit={async (event, errors, values) => {
        event.persist();
        if (errors.length === 0) {
          //提交表格里的信息
          const response = await fetch(ORIGIN + '/api/watch/warranty', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
          });
          const result = await response.json();
          console.log(result);
        }
      }}>
      <Container>
        <Label for='watch-warranty'>Watch Warranty </Label>
        <Row>
          <Col xs={6} md={12} className='watchFace-col mb-md-0'>
            <AvGroup className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Warranty Price</span>
              </div>
              <AvInput
                required
                type='number'
                className='form-control'
                name='price'
                value={warrantyPrice}
                onChange={(event) => {
                  event.preventDefault();
                  setWarrantyPrice(event.target.value);
                }}
              />

              <AvFeedback>Enter warranty price</AvFeedback>
            </AvGroup>
          </Col>
        </Row>

        <Label for='watch-warranty'>Warranty Month </Label>
        <Row>
          <Col md={6} sm={12} className='watchFace-col mb-md-0'>
            <AvRadioGroup
              inline
              name='warranty'
              value={warranty}
              required
              onChange={(event) => {
                event.persist();
                console.log(event.target.value);
                setWarranty(event.target.value);
              }}>
              {WARRANTY_OPTIONS.map((warranty) => {
                return (
                  <AvRadio key={warranty} label={warranty} value={warranty} />
                );
              })}
            </AvRadioGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={3} className='ml-auto align-self-end'>
            <Button className='btn-block ' color='primary' type='submit'>
              Submit Warranty
            </Button>
          </Col>
        </Row>

        {/* <AvGroup className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Warranty Month</span>
              </div>
              <AvInput
                required
                type='text'
                className='form-control'
                name='name'
                value={warranty}
                onChange={(event) => {
                  event.preventDefault();
                  setWarranty(event.target.value);
                }}
              />

              <AvFeedback>Enter warranty month</AvFeedback>
            </AvGroup>
          </Col>
        //  </Row>

        //   <Col xs={12} sm={3} className='ml-auto align-self-end'>
        //     <Button className='btn-block' color='primary' type='submit'>
        //       Submit Warranty
        //     </Button> */}
      </Container>
    </AvForm>
  );
};

export default WatchWarrantyForm;
