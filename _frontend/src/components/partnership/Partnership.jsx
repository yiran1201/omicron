import React from 'react';
import './Partnership.scss';
import {Container, Row, Card, Col, CardBody} from 'reactstrap';
import {Chart} from 'react-google-charts';
import {useState} from 'react';
import {useEffect} from 'react';

const BRANDS = [
  {
    src:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/c_scale,h_100/v1598465798/omicron/amazon-ar21_kxcdsd.svg',
    shop: [
      ['Country', 'Shops'],
      ['Germany', 13],
      ['United States', 37777],
      ['Brazil', 4456],
      ['Canada', 5345],
      ['France', 6475],
      ['Japan', 2],
      ['China', 597],
      ['Russia', 50],
      ['Australia', 20457],
      ['Italy', 900],
      ['India', 300],
      ['South Africa', 3285],
      ['Bolivia', 5008],
      ['Sweden', 2000],
      ['Egypt', 8000],
      ['United Arab Emirates', 8000],
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
      ['Canada', 20000],
      ['France', 900],
      ['Japan', 12],
      ['China', 200],
      ['Russia', 2000],
      ['Australia', 20],
      ['Italy', 1000],
      ['India', 300],
      ['South Africa', 328],
      ['Bolivia', 5008],
      ['Sweden', 2000],
      ['Egypt', 8000],
      ['United Arab Emirates', 830],
    ],
    name: 'Walmart',
  },
  {
    src:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/c_scale,h_100/v1598463214/omicron/target-ar21_cttsup.svg',
    shop: [
      ['Country', 'Shops'],
      ['Germany', 253],
      ['United States', 50],
      ['Brazil', 138],
      ['Canada', 1000],
      ['France', 500],
      ['Japan', 2],
      ['China', 20000],
      ['Russia', 50],
      ['Australia', 3000],
      ['Italy', 2000],
      ['India', 0],
      ['South Africa', 7968],
      ['Bolivia', 5008],
      ['Sweden', 2400],
      ['Egypt', 800],
      ['United Arab Emirates', 8000],
    ],
    name: 'HomeDepot',
  },
  {
    src:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/c_scale,h_100/v1598463205/omicron/TheHomeDepot_upc9qi.svg',
    shop: [
      ['Country', 'Shops'],
      ['Germany', 204],
      ['United States', 500],
      ['Brazil', 1],
      ['Canada', 304],
      ['France', 33],
      ['Japan', 545],
      ['China', 900],
      ['Russia', 9000],
      ['Australia', 203],
      ['Italy', 9000],
      ['India', 10000],
      ['South Africa', 328],
      ['Bolivia', 5008],
      ['Sweden', 2000],
      ['Egypt', 8000],
      ['United Arab Emirates', 8000],
    ],
    name: 'Target',
  },
  {
    src:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/c_scale,h_100/v1598463203/omicron/Best_Buy_logo_2018_tuu4il.svg',
    shop: [
      ['Country', 'Shops'],
      ['Germany', 35367],
      ['United States', 300676],
      ['Brazil', 430],
      ['Canada', 53457],
      ['France', 60045],
      ['Japan', 66776],
      ['China', 200],
      ['Russia', 105676],
      ['Australia', 6055],
      ['Italy', 80005],
      ['India', 300],
      ['South Africa', 32867],
      ['Bolivia', 508],
      ['Sweden', 267],
      ['Egypt', 80],
      ['United Arab Emirates', 80002],
    ],
    name: 'BestBuy',
  },
];

const ORIGIN = 'http://localhost:7777';
const ALL_PARTNER_API = ORIGIN + '/api/watch/partner/all';

const Partnership = () => {
  const [brands,setBrands]=useState([])
  const [selectedBrand, setBrand] = useState(BRANDS[0]);

  useEffect(() => {
    async function fetchPartners() {
      const response = await fetch(ALL_PARTNER_API);
      const partners = await response.json();
      setBrands(partners)
      console.log(partners);
    }
    fetchPartners();

    // console.log(111);
    // setBrand(BRANDS[2])
    // debugger
  }, []);

  // console.log(222);
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
              colorAxis: {colors: ['#bbdefb', '#64b5f6', '#1976d2']},
              backgroundColor: '#ffffff',
              datalessRegionColor: '#e0e0e0',
              defaultColor: '#ffffff',
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Partnership;
