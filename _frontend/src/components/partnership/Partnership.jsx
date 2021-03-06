import {Chart} from 'react-google-charts';
import {connect} from 'react-redux';
import {Container, Row, Card, Col, CardBody} from 'reactstrap';
import {detect} from 'detect-browser';
import {useEffect} from 'react';
import {useState} from 'react';
import React from 'react';

import {ORIGIN} from '../../constants/http-constant';
import {updatePartnersRedux} from '../../store/brand-store/brand-dispatcher';

import './Partnership.scss';

const browser = detect();

const Partnership = (props) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const storePartners = props.storePartners;
  const updatePartnersToStore = props.updatePartnersToStore;

  useEffect(() => {
    if (storePartners.length > 0) {
      setBrands(storePartners);
      setSelectedBrand(storePartners[0]);
    } else {
      const fetchPartners = async () => {
        const response = await fetch(ORIGIN + '/api/watch/partner/all');
        const partners = await response.json();
        await updatePartnersToStore(partners);
        setBrands(partners);
        setSelectedBrand(partners[0]); // 改变selectedBrand的值
      };
      fetchPartners();
    }
    // eslint-disable-next-line
  }, []);

  if (selectedBrand === null) {
    //每次Render都要check selectedBrand 是否为空
    return '';
  }

  return (
    <div className='mt-4 mb-5' id='samples-page'>
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
          {brands.map((brand) => {
            const backgroundColor =
              selectedBrand.name === brand.name ? 'bg-theme' : 'bg-white';
            return (
              <Col xs={12} sm={6} md={4} key={brand.name} className='mb-4'>
                <Card
                  className={`brand-card shadow-sm ${backgroundColor} border-theme`}
                  onClick={() => setSelectedBrand(brand)}>
                  <CardBody className='text-center' style={{height: '100%'}}>
                    <img
                      height='100%'
                      style={{
                        width:
                          browser && browser.name === 'safari'
                            ? '100%'
                            : 'inherit',
                      }}
                      src={brand.source}
                      alt={brand.name}
                    />
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
            data={selectedBrand.shops}
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            mapsApiKey='AIzaSyAgTMGcSDOCFW8FjkfY3xBIaKc1Emwd01w' // maps API key
            options={{
              colorAxis: {colors: ['#cfd8dc', '#78909c', '#455a64']},
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

const mapStateToProps = (store) => {
  return {
    storePartners: store.brandReducer.partners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePartnersToStore: (partners) =>
      dispatch(updatePartnersRedux(partners)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Partnership);
