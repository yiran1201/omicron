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

import 机械电子 from '../../asset/images/watches/机械电子.png';
import 极简表盘 from '../../asset/images/watches/极简表盘.png';
import 淡雅金 from '../../asset/images/watches/淡雅金.png';
import 火烈鸟 from '../../asset/images/watches/火烈鸟.png';
import 珍爱永恒 from '../../asset/images/watches/珍爱永恒.png';
import 珍珠白 from '../../asset/images/watches/珍珠白.png';
import 经典 from '../../asset/images/watches/经典.png';
import 绽放 from '../../asset/images/watches/绽放.png';
import 缎金 from '../../asset/images/watches/缎金.png';
import 缎金绿 from '../../asset/images/watches/缎金绿.png';
import 缎金黑 from '../../asset/images/watches/缎金黑.png';
import 花花公子 from '../../asset/images/watches/花花公子.png';
import 蓝调 from '../../asset/images/watches/蓝调.png';
import 轮回 from '../../asset/images/watches/轮回.png';
import 银白 from '../../asset/images/watches/银白.png';
import 通用双射表带 from '../../asset/images/watchbands/通用双射表带.png';
import 深棕 from '../../asset/images/watchbands/深棕.png';
import 硅胶表带 from '../../asset/images/watchbands/硅胶表带.png';
import 表带白 from '../../asset/images/watchbands/表带白.png';
import 全黑 from '../../asset/images/watchbands/全黑.png';
import {useState} from 'react';

const FACES = [
  {name: '机械电子', source: 机械电子, price: 200},
  {name: '极简表盘', source: 极简表盘, price: 1000},
  {name: '淡雅金', source: 淡雅金, price: 800},
  {name: '火烈鸟', source: 火烈鸟, price: 500},
  {name: '珍爱永恒', source: 珍爱永恒, price: 600},
  {name: '珍珠白', source: 珍珠白, price: 1000},
  {
    name: '粉红女郎',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287737/omicron/%E7%B2%89%E7%BA%A2%E5%A5%B3%E9%83%8E_swyvei.png',
    price: 1200,
  },
  {name: '经典', source: 经典, price: 500},
  {name: '绽放', source: 绽放, price: 600},
  {name: '缎金', source: 缎金, price: 600},
  {name: '缎金绿', source: 缎金绿, price: 1000},
  {name: '缎金黑', source: 缎金黑, price: 1000},
  {name: '花花公子', source: 花花公子, price: 200},
  {name: '蓝调', source: 蓝调, price: 300},
  {name: '轮回', source: 轮回, price: 700},
  {name: '银白', source: 银白, price: 200},
];

const BANDS = [
  {name: '通用双射表带', source: 通用双射表带, price: 150},
  {
    name: '浅棕',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529683/omicron/%E6%B5%85%E6%A3%95_aiqa4g.png',
    price: 200,
  },
  {name: '深棕', source: 深棕, price: 200},
  {name: '硅胶表带', source: 硅胶表带, price: 100},
  {name: '表带白', source: 表带白, price: 100},
  {
    name: '黑橘',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529683/omicron/%E9%BB%91%E6%A9%98_i34w9q.png',
    price: 600,
  },
  {name: '全黑', source: 全黑, price: 1000},
];

const BuildWatch = () => {
  const [watchFace, setWatchFace] = useState(FACES[5]);
  const [openFaceOption, setFaceOption] = useState(false);

  const [watchBand, setWatchBand] = useState(BANDS[6]);
  const [openBandOption, setBandOption] = useState(false);

  const [boxBackground, setBoxBackground] = useState('#fff');

  return (
    <div>
      <div className='h1 text-center mt-5 mb-4'>Customize Your Watch</div>

      <Card className='watch-card' style={{background: boxBackground}}>
        <div className='watch-face'>
          <img src={watchFace.source} alt='watch-face' />
        </div>
        <div className='watch-band'>
          <img src={watchBand.source} alt='watch-band' />
        </div>
      </Card>

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
                    if (band.name === '表带白') {
                      setBoxBackground('rgb(38, 68, 97)');
                    } else if (band.name === '通用双射表带') {
                      setBoxBackground('rgb(211,211,211)');
                    } else {
                      setBoxBackground('#fff');
                    }

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
              <th scope='row'>Total</th>
              <td></td>
              <td>
                <CurrencyFormat
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  displayType={'text'}
                  value={watchFace.price + watchBand.price}
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
