import React, {useRef} from 'react';

import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from 'availity-reactstrap-validation';
import {Container, Row, Col, Button, Label} from 'reactstrap';
import {useState} from 'react';
import {ORIGIN} from '../../constants/http-constant';

const WatchBandForm = () => {
  const [watchBand, setWatchBand] = useState('');
  const [watchBandSource, setWatchBandSource] = useState('');
  const [watchCase, setWatchCase] = useState('');
  const [watchBandPrice, setWatchBandPrice] = useState(0);
  const [background, setBackground] = useState('');
  const formRef = useRef(null);
  const clearForm = () => {
    setWatchBand('');
    setWatchBandPrice(0);
    setWatchBandSource('');
    setWatchCase('')
    setBackground('')
    formRef.current.reset();
  };
  return (
    <AvForm
      ref={formRef}
      onSubmit={async (event, errors, values) => {
        event.persist();
        if (errors.length === 0) {
          //提交表格里的信息
          await fetch(ORIGIN + '/api/watch/band', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
          });
          clearForm();
        }
      }}>
      <Container>
        <Label for='watch-band'>Watch Band</Label>
        <Row>
          <Col sm={12} className='watchFace-col mb-md-0'>
            <AvGroup className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Watch Band</span>
              </div>
              <AvInput
                required
                type='text'
                className='form-control'
                name='name'
                value={watchBand}
                onChange={(event) => {
                  event.preventDefault();
                  setWatchBand(event.target.value);
                }}
              />
              <AvFeedback>Enter watch band</AvFeedback>
            </AvGroup>
          </Col>

          <Col sm={12} className='watchFace-col mb-md-0'>
            <AvGroup className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Watch Band Source</span>
              </div>
              <AvInput
                required
                type='text'
                className='form-control'
                name='source'
                value={watchBandSource}
                onChange={(event) => {
                  event.preventDefault();
                  setWatchBandSource(event.target.value);
                }}
              />
              <AvFeedback>Enter watch band link</AvFeedback>
            </AvGroup>
          </Col>

          <Col sm={12} className='watchFace-col mb-md-0'>
            <AvGroup className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Watchband Price </span>
              </div>
              <AvInput
                required
                type='number'
                className='form-control'
                name='price'
                value={watchBandPrice}
                onChange={(event) => {
                  event.preventDefault();
                  setWatchBandPrice(event.target.value);
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
              <AvFeedback>Enter background source</AvFeedback>
            </AvGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={12} className='watchFace-col mb-md-0'>
            <AvGroup className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Watch Case Color</span>
              </div>
              <AvInput
                required
                type='text'
                className='form-control'
                name='case_color'
                value={watchCase}
                onChange={(event) => {
                  event.preventDefault();
                  setWatchCase(event.target.value);
                }}
              />
              <AvFeedback>Enter watch case color</AvFeedback>
            </AvGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={3} className='ml-auto align-self-end'>
            <Button className='btn-block' color='primary' type='submit'>
              Add Band
            </Button>
          </Col>
        </Row>
      </Container>
    </AvForm>
  );
};

export default WatchBandForm;
