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
import {useEffect} from 'react';

const DEFAULT_FACE = {
  name: '绽放',
  source:
    'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597287737/omicron/%E7%BB%BD%E6%94%BE_mqi8cz.png',
  price: 600,
};

const DEFAULT_BAND = {
  name: '深棕',
  source:
    'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597529680/omicron/%E6%B7%B1%E6%A3%95_z20qes.png',
  price: 200,
  caseColor: '#795548',
  background:
    'https://res.cloudinary.com/dgiji0wxc/image/upload/v1597813186/omicron/%E6%B7%B1%E6%A3%95_op8udc.png',
};

const WARRANTY = [
  {option: '12 months', price: 40},
  {option: '24 months', price: 80},
];

const ORIGIN = 'http://localhost:7777';
const ALL_WATCH_FACE_API = ORIGIN + '/api/watch/face/all';
const ALL_WATCH_BAND_API = ORIGIN + '/api/watch/band/all';
const BuildWatch = () => {
  const ref = React.createRef();

  const [watchFaces, setWatchFaces] = useState([]);
  const [watchBands, setWatchBands] = useState([]);

  const [watchFace, setWatchFace] = useState(DEFAULT_FACE);
  const [openFaceOption, setFaceOption] = useState(false);

  const [watchBand, setWatchBand] = useState(DEFAULT_BAND);
  const [openBandOption, setBandOption] = useState(false);

  const [warranty, setWarranty] = useState(WARRANTY[1]);
  const [openWarrantyOption, setWarrantyOption] = useState(false);

  useEffect(() => {
    async function fetchWatchFaces() {
      const response = await fetch(ALL_WATCH_FACE_API);
      const watchFaces = await response.json();
      setWatchFaces(watchFaces);
      console.log(watchFaces);
    }
    fetchWatchFaces();
    async function fetchWatchBands() {
      const response = await fetch(ALL_WATCH_BAND_API);
      const watchBands = await response.json();
      setWatchBands(watchBands);
      console.log(watchBands);
    }
    fetchWatchBands();
  }, []);

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
            {watchFaces.map((face) => {
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
          isOpen={openWarrantyOption}
          toggle={() => setWarrantyOption(!openWarrantyOption)}>
          <DropdownToggle
            caret
            tag='button'
            className='btn btn-circle btn-theme'>
            {warranty.option}
          </DropdownToggle>
          <DropdownMenu className='watch-dropdown'>
            {WARRANTY.map((warrantyItem) => {
              return (
                <DropdownItem
                  key={warrantyItem.option}
                  disabled={warrantyItem.option === warranty.option}
                  onClick={() => setWarranty(warrantyItem)}>
                  {warrantyItem.option}
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
            {watchBands.map((band) => {
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
            <th scope='row'>Warranty</th>
            <td>{warranty.option}</td>
            <td className='price-font'>
              <CurrencyFormat
                thousandSeparator={true}
                prefix={'$'}
                decimalScale={2}
                fixedDecimalScale={true}
                displayType={'text'}
                value={warranty.price}
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
                value={
                  (watchFace.price + watchBand.price + warranty.price) * 0.12
                }
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
                value={
                  (watchFace.price + watchBand.price + warranty.price) * 1.12
                }
              />
            </td>
          </tr>
          <tr>
            <th colSpan={3}>
              <Pdf
                targetRef={ref}
                filename='omicron-invoice.pdf'
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
