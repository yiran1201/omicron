import './BuildWatch.scss';
import CurrencyFormat from 'react-currency-format';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
} from 'reactstrap';

import React from 'react';

import {useState} from 'react';
import Pdf from 'react-to-pdf';

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
    name: '通用双射',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529677/omicron/%E9%80%9A%E7%94%A8%E5%8F%8C%E5%B0%84%E8%A1%A8%E5%B8%A6_ekrnoe.png',
    price: 150,
    caseColor: '#444',
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597870804/omicron/Screen_Shot_2020-08-19_at_1.59.48_PM_f1tyyo.png',
  },
  {
    name: '浅棕',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529683/omicron/%E6%B5%85%E6%A3%95_aiqa4g.png',
    price: 200,
    caseColor: '#8d6e63',
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597814274/omicron/%E6%B5%85%E6%A3%95.png',
  },
  {
    name: '深棕',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529680/omicron/%E6%B7%B1%E6%A3%95_z20qes.png',
    price: 200,
    caseColor: '#795548',
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597813186/omicron/%E6%B7%B1%E6%A3%95_op8udc.png',
  },
  {
    name: '硅胶表带',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529676/omicron/%E7%A1%85%E8%83%B6%E8%A1%A8%E5%B8%A6_yzr4r0.png',
    price: 100,
    caseColor: '#444',
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597815477/omicron/Screen_Shot_2020-08-18_at_10.36.42_PM_ouiizs.png',
  },
  {
    name: '表带白',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529676/omicron/%E8%A1%A8%E5%B8%A6%E7%99%BD_fagcrc.png',
    price: 100,
    caseColor: '#444',
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597808563/omicron/%E8%A1%A8%E5%B8%A6%E7%99%BD_drjzwi.png',
  },
  {
    name: '黑橘',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529683/omicron/%E9%BB%91%E6%A9%98_i34w9q.png',
    price: 600,
    caseColor: '#444',
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597811391/omicron/97d4270dd9cca1a0d7bf7abb4ce374ca_kvduhd.jpg',
  },
  {
    name: '全黑',
    source:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529678/omicron/%E5%85%A8%E9%BB%91_jnaegd.png',
    price: 1000,
    caseColor: '#444',
    background:
      'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597805825/omicron/%E5%85%A8%E9%BB%91%E8%A1%A8%E5%B8%A6%E8%83%8C%E6%99%AF_ju9sxl.jpg',
  },
];

const ref = React.createRef();

const BuildWatch = () => {
  const [watchFace, setWatchFace] = useState(FACES[2]);
  const [openFaceOption, setFaceOption] = useState(false);

  const [watchBand, setWatchBand] = useState(BANDS[2]);
  const [openBandOption, setBandOption] = useState(false);

  const OptionBar = () => {
    return (
      <div className='option-bar'>
        <Dropdown
          direction='down'
          isOpen={openFaceOption}
          toggle={() => setFaceOption(!openFaceOption)}>
          <DropdownToggle
            caret
            tag='button'
            className='btn btn-circle btn-theme'>
            {watchFace.name}
          </DropdownToggle>
          <DropdownMenu className='watch-dropdown'>
            {FACES.map((face) => {
              return (
                <DropdownItem
                  // 在react 下面render array,array里面的每一个元素都必须要又一个unique key
                  key={face.name}
                  disabled={face.name === watchFace.name}
                  onClick={() => setWatchFace(face)}>
                  {face.name}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>

        <Dropdown
          direction='down'
          isOpen={openBandOption}
          toggle={() => setBandOption(!openBandOption)}>
          <DropdownToggle
            caret
            tag='button'
            className='btn btn-circle btn-theme'>
            {watchBand.name}
          </DropdownToggle>
          <DropdownMenu className='watch-dropdown'>
            {BANDS.map((band) => {
              return (
                <DropdownItem
                  key={band.name}
                  disabled={band.name === watchBand.name}
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
    );
  };

  const PriceTable = () => {
    return (
      <Table bordered className='table-border table-hover'>
        <thead>
          <tr>
            <th>Price List</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Watch Face</th>
            <td>{watchFace.name}</td>
            <td className='price-font'>
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
            <td className='price-font'>
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
            <td className='price-font'>
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
            <td className='price-font'>
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
          <tr>
            <th colSpan={3}>
              <Pdf
                targetRef={ref}
                filename='code-example.pdf'
                options={{unit: 'in'}}>
                {({toPdf}) => (
                  <button className='btn btn-theme btn-block' onClick={toPdf}>
                    Print Invoice
                  </button>
                )}
              </Pdf>
            </th>
          </tr>
        </tbody>
      </Table>
    );
  };

  return (
    <div ref={ref} className='mt-4' id='build-watch-page'>
      {/* <div className='text-center h2'>Customization</div> */}
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item active' aria-current='page'>
            Omicron
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Build Your Watch
          </li>
        </ol>
      </nav>

      <div className='model-wrapper'>
        <div
          className='watch-card'
          style={{
            backgroundImage: `url(${watchBand.background})`, //在jsx里面只能放带变量的style,scss里放的是常量的style
            //$里面走的是variable JS逻辑
            backgroundSize: 'cover', //这个可以放SCSS
          }}>
          <div
            className='watch-face'
            style={{border: `6px outset ${watchBand.caseColor}`}}>
            <img src={watchFace.source} alt='watch-face' />
          </div>
          <div className='watch-band'>
            <img src={watchBand.source} alt='watch-band' />
          </div>
        </div>
      </div>

      <OptionBar />

      <PriceTable />
    </div>
  );
};

export default BuildWatch;
