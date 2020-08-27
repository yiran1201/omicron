import React from 'react';
import './Partnership.scss';
import {Container, Row, Card, Col, CardBody} from 'reactstrap';
import {Chart} from 'react-google-charts';
import {useState} from 'react';

const BRANDS = [
  {
    src:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/c_scale,h_100/v1598465798/omicron/amazon-ar21_kxcdsd.svg',
    shop: [
      ['Country', 'Shops'],
      ['Germany', 13],
      ['United States', 3],
      ['Brazil', 4],
      ['Canada', 5],
      ['France', 6],
      ['Japan', 2],
    ],
    name: 'Amazon',
  },
  {
    src:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/c_scale,h_100/v1598463221/omicron/walmart-ar21_fik31a.svg',
    shop: [
      ['Country', 'Shops'],
      ['Germany', 20],
      ['United States', 300],
      ['Brazil', 13],
      ['Canada', 200],
      ['France', 0],
      ['Japan', 12],
    ],
    name: 'Walmart',
  },
  {
    src:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/c_scale,h_100/v1598463214/omicron/target-ar21_cttsup.svg',
    shop: [
      ['Country', 'Shops'],
      ['Germany', 23],
      ['United States', 50],
      ['Brazil', 18],
      ['Canada', 10],
      ['France', 8],
      ['Japan', 2],
    ],
    name: 'HomeDepot',
  },
  {
    src:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/c_scale,h_100/v1598463205/omicron/TheHomeDepot_upc9qi.svg',
    shop: [
      ['Country', 'Shops'],
      ['Germany', 3],
      ['United States', 500],
      ['Brazil', 1],
      ['Canada', 0],
      ['France', 3],
      ['Japan', 5],
    ],
    name: 'Target',
  },
  {
    src:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/c_scale,h_100/v1598463203/omicron/Best_Buy_logo_2018_tuu4il.svg',
    shop: [
      ['Country', 'Shops'],
      ['Germany', 35],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['Japan', 700],
    ],
    name: 'BestBuy',
  },
];

const Samples = () => {
  const [selectedBrand, setBrand] = useState(BRANDS[0]);

  return (
    <div className='my-4' id='samples-page'>
      <Container>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item active' aria-current='page'>
              Omicron
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Business Partnership
            </li>
          </ol>
        </nav>
        <Row>
          {BRANDS.map((brand) => {
            const backgroundColor =
              selectedBrand.name === brand.name ? 'bg-light' : 'bg-white';
            return (
              <Col xs={12} sm={6} md={4} key={brand.name} className='mb-4'>
                <Card
                  className={`brand-card shadow-sm ${backgroundColor}`}
                  onClick={() => setBrand(brand)}>
                  <CardBody className='text-center'>
                    <img height='100%' src={brand.src} alt={brand.name} />
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item active' aria-current='page'>
              Omicron
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Worldwide Distribution
            </li>
          </ol>
        </nav>

        <div className='chart-wrapper'>
          <Chart
            chartType='GeoChart'
            width={'750px'}
            height={'300px'}
            data={selectedBrand.shop}
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            mapsApiKey='AIzaSyAgTMGcSDOCFW8FjkfY3xBIaKc1Emwd01w' // maps API key
            options={{
              colorAxis: {colors: ['#00853f', '#000000', '#e31b23']},
              backgroundColor: '#81d4fa',
              datalessRegionColor: '#f8bbd0',
              defaultColor: '#f5f5f5',
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Samples;
