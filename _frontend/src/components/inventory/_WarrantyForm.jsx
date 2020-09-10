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
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  return (
    <AvForm
      onSubmit={async (event, errors, values) => {
        event.persist();
        if (errors.length === 0) {
          //提交表格里的信息
          await fetch(ORIGIN + '/api/watch/warranty', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
          });
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
                value={price}
                onChange={(event) => {
                  event.preventDefault();
                  setPrice(event.target.value);
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
              name='name'
              value={name}
              required
              onChange={(event) => {
                event.persist();
                setName(event.target.value);
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
              Add Warranty
            </Button>
          </Col>
        </Row>
      </Container>
    </AvForm>
  );
};

export default WatchWarrantyForm;
