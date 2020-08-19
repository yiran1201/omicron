import './BuildWatch.scss';
import CurrencyFormat from 'react-currency-format';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  Table,
} from 'reactstrap';

import React from 'react';

import {useState} from 'react';

const FACES = [
  {
    name: '机械电子',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287709/omicron/%E6%9C%BA%E6%A2%B0%E7%94%B5%E5%AD%90_u4pr5s.png',
    price: 200,
  },
  {
    name: '极简表盘',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287703/omicron/%E6%9E%81%E7%AE%80%E8%A1%A8%E7%9B%98_qv5zwm.png',
    price: 1000,
  },
  {
    name: '淡雅金',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287715/omicron/%E6%B7%A1%E9%9B%85%E9%87%91_zg4lnx.png',
    price: 800,
  },
  {
    name: '火烈鸟',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287711/omicron/%E7%81%AB%E7%83%88%E9%B8%9F_x9obzq.png',
    price: 500,
  },
  {
    name: '珍爱永恒',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287716/omicron/%E7%8F%8D%E7%88%B1%E6%B0%B8%E6%81%92_jem6ii.png',

    price: 600,
  },
  {
    name: '珍珠白',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287709/omicron/%E7%8F%8D%E7%8F%A0%E7%99%BD_fam3wq.png',
    price: 1000,
  },
  {
    name: '粉红女郎',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287737/omicron/%E7%B2%89%E7%BA%A2%E5%A5%B3%E9%83%8E_swyvei.png',
    price: 1200,
  },
  {
    name: '经典',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287726/omicron/%E7%BB%8F%E5%85%B8_mq54gk.png',
    price: 500,
  },
  {
    name: '绽放',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287737/omicron/%E7%BB%BD%E6%94%BE_mqi8cz.png',
    price: 600,
  },
  {
    name: '缎金',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287729/omicron/%E7%BC%8E%E9%87%91_dfp1bz.png',
    price: 600,
  },
  {
    name: '缎金绿',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287724/omicron/%E7%BC%8E%E9%87%91%E7%BB%BF_l6jw3j.png',
    price: 1000,
  },
  {
    name: '缎金黑',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287727/omicron/%E7%BC%8E%E9%87%91%E9%BB%91_jnrtak.png',
    price: 1000,
  },
  {
    name: '花花公子',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287715/omicron/%E8%8A%B1%E8%8A%B1%E5%85%AC%E5%AD%90_y3frua.png',
    price: 200,
  },
  {
    name: '蓝调',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287737/omicron/%E8%93%9D%E8%B0%83_l3gekx.png',
    price: 300,
  },
  {
    name: '轮回',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287735/omicron/%E8%BD%AE%E5%9B%9E_u6kbyt.png',
    price: 700,
  },
  {
    name: '银白',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287736/omicron/%E9%93%B6%E7%99%BD_eqrnwx.png',
    price: 200,
  },
];

const BANDS = [
  {
    name: '通用双射表带',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529677/omicron/%E9%80%9A%E7%94%A8%E5%8F%8C%E5%B0%84%E8%A1%A8%E5%B8%A6_ekrnoe.png',
    price: 150,
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597810117/omicron/%E9%80%9A%E7%94%A8%E5%8F%8C%E5%B0%84%E8%83%8C%E6%99%AF_mll3zm.png',
  },
  {
    name: '浅棕',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529683/omicron/%E6%B5%85%E6%A3%95_aiqa4g.png',
    price: 200,
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597814274/omicron/%E6%B5%85%E6%A3%95.png',
  },
  {
    name: '深棕',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529680/omicron/%E6%B7%B1%E6%A3%95_z20qes.png',

    price: 200,
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597813186/omicron/%E6%B5%85%E6%A3%95_op8udc.png',
  },
  {
    name: '硅胶表带',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529676/omicron/%E7%A1%85%E8%83%B6%E8%A1%A8%E5%B8%A6_yzr4r0.png',
    price: 100,
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597815477/omicron/Screen_Shot_2020-08-18_at_10.36.42_PM_ouiizs.png',
  },
  {
    name: '表带白',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529676/omicron/%E8%A1%A8%E5%B8%A6%E7%99%BD_fagcrc.png',
    price: 100,
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597808563/omicron/%E8%A1%A8%E5%B8%A6%E7%99%BD_drjzwi.png',
  },
  {
    name: '黑橘',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529683/omicron/%E9%BB%91%E6%A9%98_i34w9q.png',
    price: 600,
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597811391/omicron/97d4270dd9cca1a0d7bf7abb4ce374ca_kvduhd.jpg',
  },
  {
    name: '全黑',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529678/omicron/%E5%85%A8%E9%BB%91_jnaegd.png',
    price: 1000,
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597805825/omicron/%E5%85%A8%E9%BB%91%E8%A1%A8%E5%B8%A6%E8%83%8C%E6%99%AF_ju9sxl.jpg',
  },
];

const BuildWatch = () => {
  const [watchFace, setWatchFace] = useState(FACES[5]);
  const [openFaceOption, setFaceOption] = useState(false);

  const [watchBand, setWatchBand] = useState(BANDS[0]);
  const [openBandOption, setBandOption] = useState(false);

  return (
    <div>
      <div className='h1 text-center mt-5 mb-4'>Customize Your Watch</div>

      <div
        className='watch-card'
        style={{
          backgroundImage: `url(${watchBand.background})`, //在jsx里面只能放带变量的style,scss里放的是常量的style
          //$里面走的是variable JS逻辑
          backgroundSize: 'cover', //这个可以放SCSS
        }}>
        <div className='watch-face'>
          <img src={watchFace.source} alt='watch-face' />
        </div>
        <div className='watch-band'>
          <img src={watchBand.source} alt='watch-band' />
        </div>
      </div>

      <div className='option-bar'>
        <Dropdown
          direction='left'
          isOpen={openFaceOption}
          toggle={() => setFaceOption(!openFaceOption)}>
          <DropdownToggle caret>Watch Face</DropdownToggle>
          <DropdownMenu>
            {/* <DropdownItem onClick={() => setWatchFace(FACES[0].source)}>
              {FACES[0].name}
            </DropdownItem>
            <DropdownItem onClick={() => setWatchFace(FACES[1].source)}>
              {FACES[1].name}
            </DropdownItem>
            <DropdownItem onClick={() => setWatchFace(FACES[2].source)}>
              {FACES[2].name}
            </DropdownItem> */}
            {FACES.map((face) => {
              return (
                <DropdownItem
                  // 在react 下面render array,array里面的每一个元素都必须要又一个unique key
                  key={face.name}
                  disabled={face.source === watchFace}
                  onClick={() => setWatchFace(face)}>
                  {face.name}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>

        <Dropdown
          className='watch-band-dropdown'
          direction='right'
          isOpen={openBandOption}
          toggle={() => setBandOption(!openBandOption)}>
          <DropdownToggle caret>Watch Band</DropdownToggle>
          <DropdownMenu>
            {BANDS.map((band) => {
              return (
                <DropdownItem
                  key={band.name}
                  disabled={band.source === watchBand}
                  onClick={() => {
                    setWatchBand(band);
                  }}>
                  {band.name}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className='price-table'>
        <div className='h2 text-center text-primary'>Price List</div>
        <Table bordered className=' table-hover'>
          <thead>
            <tr>
              <td></td>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>Watch Face</th>
              <td>{watchFace.name}</td>
              <td>
                <CurrencyFormat
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  displayType={'text'}
                  value={watchFace.price}
                />
              </td>
            </tr>
            <tr>
              <th scope='row'>Watch Band</th>
              <td>{watchBand.name}</td>
              <td>
                <CurrencyFormat
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  displayType={'text'}
                  value={watchBand.price}
                />
              </td>
            </tr>
            <tr>
              <th scope='row'>Tax</th>
              <td></td>
              <td>
                <CurrencyFormat
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  displayType={'text'}
                  value={(watchFace.price + watchBand.price) * 0.12}
                />
              </td>
            </tr>
            <tr>
              <th scope='row'>Total</th>
              <td></td>
              <td>
                <CurrencyFormat
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  displayType={'text'}
                  value={(watchFace.price + watchBand.price) * 1.12}
                />
              </td>
            </tr>
          </tbody>
        </Table>

        <p className='text-right'>
          <button
            className='btn btn-primary'
            onClick={() => {
              window.print();
            }}>
            Print Invoice
          </button>
        </p>
      </div>
    </div>
  );
};

export default BuildWatch;
