import './BuildWatch.scss';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
} from 'reactstrap';

import React from 'react';

import 机械电子 from '../../asset/images/watches/机械电子.png';
import 极简表盘 from '../../asset/images/watches/极简表盘.png';
import 淡雅金 from '../../asset/images/watches/淡雅金.png';
import 火烈鸟 from '../../asset/images/watches/火烈鸟.png';
import 珍爱永恒 from '../../asset/images/watches/珍爱永恒.png';
import 珍珠白 from '../../asset/images/watches/珍珠白.png';
import 粉红女郎 from '../../asset/images/watches/粉红女郎.png';
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
import 浅棕 from '../../asset/images/watchbands/浅棕.png';
import 深棕 from '../../asset/images/watchbands/深棕.png';
import 硅胶表带 from '../../asset/images/watchbands/硅胶表带.png';
import 表带白 from '../../asset/images/watchbands/表带白.png';
import 黑橘 from '../../asset/images/watchbands/黑橘.png';
import 全黑 from '../../asset/images/watchbands/全黑.png';
import {useState} from 'react';

const FACES = [
  {name: '机械电子', source: 机械电子},
  {name: '极简表盘', source: 极简表盘},
  {name: '淡雅金', source: 淡雅金},
  {name: '火烈鸟', source: 火烈鸟},
  {name: '珍爱永恒', source: 珍爱永恒},
  {name: '珍珠白', source: 珍珠白},
  {name: '粉红女郎', source: 粉红女郎},
  {name: '经典', source: 经典},
  {name: '绽放', source: 绽放},
  {name: '缎金', source: 缎金},
  {name: '缎金绿', source: 缎金绿},
  {name: '缎金黑', source: 缎金黑},
  {name: '花花公子', source: 花花公子},
  {name: '蓝调', source: 蓝调},
  {name: '轮回', source: 轮回},
  {name: '银白', source: 银白},
];

const BANDS = [
  {name: '通用双射表带', source: 通用双射表带},
  {name: '浅棕', source: 浅棕},
  {name: '深棕', source: 深棕},
  {name: '硅胶表带', source: 硅胶表带},
  {name: '表带白', source: 表带白},
  {name: '黑橘', source: 黑橘},
  {name: '全黑', source: 全黑},
];

const BuildWatch = () => {
  const [watchFace, setWatchFace] = useState(珍珠白);
  const [openFaceOption, setFaceOption] = useState(false);

  const [watchBand, setWatchBand] = useState(全黑);
  const [openBandOption, setBandOption] = useState(false);

  return (
    <div>
      <div className='h1 text-center'>Customize Your Watch</div>

      <Card className='watch-card'>
        <div className='watch-face'>
          <img src={watchFace} alt='watch-face' />
        </div>
        <div className='watch-band'>
          <img src={watchBand} alt='watch-band' />
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
                  onClick={() => setWatchFace(face.source)}>
                  {face.name}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>

        <Dropdown
          direction='right'
          style={{marginLeft: 8}}
          isOpen={openBandOption}
          toggle={() => setBandOption(!openBandOption)}>
          <DropdownToggle caret>Watch Band</DropdownToggle>
          <DropdownMenu>
            {BANDS.map((band) => {
              return (
                <DropdownItem
                  key={band.name}
                  disabled={band.source === watchBand}
                  onClick={() => setWatchBand(band.source)}>
                  {band.name}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default BuildWatch;
