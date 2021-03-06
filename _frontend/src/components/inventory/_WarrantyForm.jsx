import React, {useRef} from 'react';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
} from 'availity-reactstrap-validation';
import {Container, Row, Col, Label} from 'reactstrap';
import {useState} from 'react';
import {ORIGIN} from '../../constants/http-constant';

const WARRANTY_OPTIONS = ['12 months', '24 months'];

const WatchWarrantyForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const formRef = useRef(null);
  const clearForm = () => {
    setName('');
    setPrice(0);

    formRef.current.reset();
  };
  return (
    <AvForm
      className='mb-4'
      ref={formRef}
      onSubmit={async (event, errors, values) => {
        event.persist();
        if (errors.length === 0) {
          //提交表格里的信息
          await fetch(ORIGIN + '/api/watch/warranty', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
          });
          clearForm();
        }
      }}>
      <Container>
        <Label for='watch-warranty' className='title-theme'>
          Watch Warranty
        </Label>
        <Row>
          <Col xs={12} className='watchFace-col mb-md-0'>
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
            <button className='btn btn-block btn-theme shadow' type='submit'>
              Add Warranty
            </button>
          </Col>
        </Row>
      </Container>
    </AvForm>
  );
};

export default WatchWarrantyForm;
