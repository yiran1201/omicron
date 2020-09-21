import React, {useRef} from 'react';

import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from 'availity-reactstrap-validation';
import {Container, Row, Col, Label} from 'reactstrap';
import {useState} from 'react';
import {ORIGIN} from '../../constants/http-constant';
const PartnershipForm = () => {
  const [name, setName] = useState('');
  const [source, setSource] = useState('');
  const [shops, setShops] = useState([]);
  const formRef = useRef(null);
  const clearForm = () => {
    setName('');
    setSource('');
    setShops([]);

    formRef.current.reset();
  };
  const ShopsInput = () => {
    if (shops.length === 0) {
      return (
        <Label for='shops' className='text-danger'>
          Please add shop
        </Label>
      );
    }
    return shops.map((shop, index) => {
      // const countryName = 'shop' + index + '.' + 'country';
      // const countName = 'shop' + index + '.' + 'count';
      const countryName = `shop${index}.country`; //`${}`意思是读变量
      const countName = `shop${index}.count`;
      return (
        <Row key={`shop-${index}`}>
          <Col xs={12} md={6}>
            <AvGroup className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Country</span>
              </div>
              <AvInput
                required
                type='text'
                className='form-control'
                name={countryName}
                value={shop.country}
                onChange={(event) => {
                  event.preventDefault();
                  shop.country = event.target.value;
                  shops[index] = shop;
                  setShops(shops);
                }}
              />
              <AvFeedback>Enter country</AvFeedback>
            </AvGroup>
          </Col>

          <Col xs={12} md={6}>
            <AvGroup className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Count</span>
              </div>
              <AvInput
                required
                type='number'
                className='form-control'
                value={shop.count}
                name={countName}
                onChange={(event) => {
                  event.preventDefault();
                  shop.count = event.target.value;
                  shops[index] = shop;
                  setShops(shops);
                }}
              />
              <AvFeedback>Enter count</AvFeedback>
            </AvGroup>
          </Col>
        </Row>
      );
    });
  };

  return (
    <AvForm
      ref={formRef}
      className='mt-4'
      onSubmit={async (event, errors, values) => {
        event.persist();
        if (errors.length === 0 && shops.length !== 0) {
          //提交表格里的信息

          const form = {
            name: values.name,
            source: values.source,
            shops: shops,
          };
          await fetch(ORIGIN + '/api/watch/partner', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form),
          });
          clearForm();
        }
      }}>
      <Container>
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
                <span className='input-group-text'>Brand Name</span>
              </div>
              <AvInput
                required
                type='text'
                name='name'
                className='form-control'
                value={name}
                onChange={(event) => {
                  event.preventDefault();
                  setName(event.target.value);
                }}
              />
              <AvFeedback>Enter name</AvFeedback>
            </AvGroup>
          </Col>

          <Col xs={12} md={6}>
            <AvGroup className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Source Link</span>
              </div>
              <AvInput
                required
                type='text'
                name='source'
                className='form-control'
                value={source}
                onChange={(event) => {
                  event.preventDefault();
                  setSource(event.target.value);
                }}
              />
              <AvFeedback>Enter Source Link</AvFeedback>
            </AvGroup>
          </Col>
        </Row>

        <ShopsInput />

        <Row>
          <Col xs={12} sm={3} className='ml-auto align-self-end'>
            <button
              className='btn btn-block btn-outline-info'
              type='button'
              onClick={() => {
                const newShops = shops.slice();
                newShops.push({country: 'China', count: '1'});
                setShops(newShops);
              }}>
              Add Shop
            </button>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={3} className='ml-auto mt-2 align-self-end'>
            <button className='btn btn-block btn-theme shadow' type='submit'>
              Add Partner
            </button>
          </Col>
        </Row>
      </Container>
    </AvForm>
  );
};

export default PartnershipForm;
