import CurrencyFormat from 'react-currency-format';

import './BuildWatch.scss';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
} from 'reactstrap';

import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from 'availity-reactstrap-validation';

import React from 'react';

import {useState} from 'react';
import Pdf from 'react-to-pdf';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  updateWatchFacesRedux,
  updateWatchBandsRedux,
  updateWatchWarrantiesRedux,
} from '../../store/watch-store/watch-dispatcher';
import {ORIGIN} from '../../constants/http-constant';

// props 是用来接受外界给BuildWatch这个component的property

const BuildWatch = (props) => {
  const ref = React.createRef();

  const [watchFaces, setWatchFaces] = useState([]);
  const [watchFace, setWatchFace] = useState(null);
  const [openFaceOption, setFaceOption] = useState(false);

  const [watchBands, setWatchBands] = useState([]);
  const [watchBand, setWatchBand] = useState(null);
  const [openBandOption, setBandOption] = useState(false);

  const [warranty, setWarranty] = useState(null);
  const [warranties, setWarranties] = useState([]);
  const [openWarrantyOption, setWarrantyOption] = useState(false);

  const [trackingError, setTrackingError] = useState('');

  // fetch from redux store/cache
  // console.log(props.storeFaces);
  // useEffect 里面尽可能不要出现props
  const storeFaces = props.storeFaces;
  const updateFacesToStore = props.updateFacesToStore;

  const storeBands = props.storeBands;
  const updateBandsToStore = props.updateBandsToStore;

  const storeWarranties = props.storeWarranties;
  const updateWarrantiesToStore = props.updateWarrantiesToStore;

  const [watchId, setWatchId] = useState('');

  // useEffect(callback function, [trigger condition])
  useEffect(
    () => {
      if (storeFaces.length > 0) {
        setWatchFaces(storeFaces);
        const targetFace = storeFaces.find((face) => face.name === '珍珠白');
        if (targetFace) {
          setWatchFace(targetFace);
        } else {
          setWatchFace(storeFaces[0]);
        }
      } else {
        const fetchWatchFaces = async () => {
          const response = await fetch(ORIGIN + '/api/watch/face/all');
          const watchFaces = await response.json();
          await updateFacesToStore(watchFaces);
          setWatchFaces(watchFaces); //是用来做备选项的，是dropdown menu里面的选项
          const targetFace = watchFaces.find((face) => face.name === '珍珠白');
          if (targetFace) {
            setWatchFace(targetFace);
          } else {
            setWatchFace(watchFaces[0]); //初始，如果没有页面Render不出来
          }
        };
        fetchWatchFaces();
      }

      if (storeWarranties.length > 0) {
        setWarranties(storeWarranties);
        setWarranty(storeWarranties[0]);
      } else {
        const fetchWarranties = async () => {
          const response = await fetch(ORIGIN + '/api/watch/warranty/all');
          const warranties = await response.json();
          await updateWarrantiesToStore(warranties);
          setWarranties(warranties);
          setWarranty(warranties[0]);
        };
        fetchWarranties();
      }

      if (storeBands.length > 0) {
        setWatchBands(storeBands);

        const targetBand = storeBands.find((band) => band.name === '深棕');
        if (targetBand) {
          setWatchBand(targetBand);
        } else {
          setWatchBand(storeBands[0]);
        }
      } else {
        const fetchWatchBands = async () => {
          const response = await fetch(ORIGIN + '/api/watch/band/all');
          const watchBands = await response.json();
          await updateBandsToStore(watchBands);
          setWatchBands(watchBands);

          const targetBand = watchBands.find((band) => band.name === '深棕');
          if (targetBand) {
            setWatchBand(targetBand);
          } else {
            setWatchBand(watchBands[0]);
          }
        };
        fetchWatchBands();
      }
    },
    // eslint-disable-next-line
    []
  ); //定义了useEffect要对“哪些跟新的property” 负责

  const TrackingWatchForm = () => {
    return (
      <AvForm
        onSubmit={async (event, errors, values) => {
          event.persist();
          if (errors.length !== 0) return;
          const response = await fetch(`${ORIGIN}/api/invoice/${watchId}`);
          if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            setWatchBand(data.band);
            setWatchFace(data.face);
            setWarranty(data.warranty);
          } else {
            setTrackingError('Invoice Not Found');
          }
        }}>
        <AvGroup className='input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text text-success tracking-id-input'></span>
          </div>
          <AvInput
            required
            type='text'
            name='watchId'
            className='form-control'
            value={watchId}
            onChange={(event) => {
              setWatchId(event.target.value);
              if (trackingError !== '') {
                setTrackingError(''); //当user输入ID信息的时候重新reset
              }
            }}
          />
          <div className='input-group-append'>
            <Button
              className='btn-block rounded-right'
              color='primary'
              type='submit'>
              Track
            </Button>
          </div>
          <AvFeedback>Field cannot be empty</AvFeedback>
        </AvGroup>
        {trackingError.length > 0 ? (
          <div className='text-danger'>{trackingError}</div>
        ) : (
          ''
        )}
      </AvForm>
    );
  };

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
            className='btn btn-circle btn-theme btn-dropdown'>
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
            className='btn btn-circle btn-theme btn-dropdown'>
            {warranty.name}
          </DropdownToggle>
          <DropdownMenu className='watch-dropdown'>
            {warranties.map((warrantyItem) => {
              return (
                <DropdownItem
                  key={warrantyItem.name}
                  disabled={warrantyItem.name === warranty.name}
                  onClick={() => setWarranty(warrantyItem)}>
                  {warrantyItem.name}
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
            className='btn btn-circle btn-theme btn-dropdown'>
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
            <td>{warranty.name}</td>
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
                  <button
                    className='btn btn-theme btn-block'
                    onClick={async () => {
                      const form = {
                        face: watchFace,
                        band: watchBand,
                        warranty: warranty,
                      };
                      const response = await fetch(ORIGIN + '/api/invoice', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(form),
                      });
                      console.log(response);
                    }}>
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

  if (watchBand === null || watchFace === null || warranty === null) {
    // console.log('return empty');
    return '';
  }

  // console.log('return HTML');
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

      {TrackingWatchForm()}
      {/* <TrackingWatchForm />  stop propagation当一个function来用，每次的input有记忆，如果当作component来用没有记忆而且页面Input打不了字  */}

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

// reader
// store的接收器，往BuildWatch component去装 storeFaces bands warranties 这些Properties，它们的值都是从中央的store里来的
// component能随时监听的到store的最新变化，enable component能听到store的变化
const mapStateToProps = (store) => {
  //这里的state是全局状态，是从中央reducer拿到的
  return {
    storeFaces: store.watchReducer.faces, //这里的key名字要和Props对应上，自己随便起的
    storeBands: store.watchReducer.bands,
    storeWarranties: store.watchReducer.warranties,
  };
};

// writer => dispatcher function
// store的发射器/也是action function
const mapDispatchToProps = (dispatch) => {
  // dispatch function 是根据dispatcher function里面的return object的type来找到reducer对应的位置，从而更新reducer乃至整个store
  return {
    updateFacesToStore: (faces) => dispatch(updateWatchFacesRedux(faces)),
    updateBandsToStore: (bands) => dispatch(updateWatchBandsRedux(bands)),
    updateWarrantiesToStore: (warranties) =>
      dispatch(updateWatchWarrantiesRedux(warranties)),
    // object key 对应的是function用于改store的指
  };
};

// connect能把接受回来的store data通过properties打进去BuildWatch component
export default connect(mapStateToProps, mapDispatchToProps)(BuildWatch);
