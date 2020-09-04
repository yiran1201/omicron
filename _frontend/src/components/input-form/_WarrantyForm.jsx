import React from 'react';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from 'availity-reactstrap-validation';
import {Container, Row, Col, Button, Label} from 'reactstrap';
import {useState} from 'react';

const ORIGIN = 'http://localhost:7777';
const WatchWarrantyForm = () => {
  const [warranty, setWarranty] = useState(0);
  const [warrantyPrice, setWarrantyPrice] = useState(0);
  return (
    <AvForm
      onSubmit={async (event, errors, values) => {
        event.persist();
        if (errors.length === 0) {
          //提交表格里的信息
          console.log('submit warranty');
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
        <Label for='watch-warranty'>Watch Warranty</Label>
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

          <Col md={6} sm={12} className='watchFace-col mb-md-0'>
            <AvGroup className='input-group'>
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
        </Row>

        <Row>
          <Col xs={12} sm={3} className='ml-auto align-self-end'>
            <Button className='btn-block' color='primary' type='submit'>
              Submit Warranty
            </Button>
          </Col>
        </Row>
      </Container>
    </AvForm>
  );
};

export default WatchWarrantyForm;
