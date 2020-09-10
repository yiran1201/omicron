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
const WatchFaceForm = () => {
  const [watchFace, setWatchFace] = useState('');
  const [watchPrice, setWatchPrice] = useState(0);
  const [watchFaceSource, setWatchFaceSource] = useState('');

  return (
    <AvForm
      onSubmit={async (event, errors, values) => {
        event.persist(); //防止影响其他form的submit
        if (errors.length === 0) {
          //提交表格里的信息
           await fetch(ORIGIN + '/api/watch/face', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
          });
        }
      }}>
      <Container>
        <Label for='watch-face'>Watch Face</Label>
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
                name='name'
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
                name='source'
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
                <span className='input-group-text'>Watch Face Price</span>
              </div>
              <AvInput
                required
                type='number'
                className='form-control'
                name='price'
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
          <Col xs={12} sm={3} className='ml-auto align-self-end'>
            <Button className='btn-block' color='primary' type='submit'>
             Add Face
            </Button>
          </Col>
        </Row>
      </Container>
    </AvForm>
  );
};

export default WatchFaceForm;
