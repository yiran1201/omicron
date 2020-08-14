import './BuildWatch.scss';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

import React from 'react';

import 机械电子 from '../../asset/images/watches/机械电子.png';
import 机械电子1 from '../../asset/images/watches/机械电子1.png';
import 极简表盘 from '../../asset/images/watches/极简表盘.png';
import 极简表盘1 from '../../asset/images/watches/极简表盘1.png';
import 淡雅金 from '../../asset/images/watches/淡雅金.png';
import 淡雅金1 from '../../asset/images/watches/淡雅金1.png';
import 火烈鸟 from '../../asset/images/watches/火烈鸟.png';
import 火烈鸟1 from '../../asset/images/watches/火烈鸟1.png';
import 珍爱永恒 from '../../asset/images/watches/珍爱永恒.png';
import 珍爱永恒1 from '../../asset/images/watches/珍爱永恒1.png';
import 珍珠白 from '../../asset/images/watches/珍珠白.png';
import 珍珠白1 from '../../asset/images/watches/珍珠白1.png';
import 粉红女郎 from '../../asset/images/watches/粉红女郎.png';
import 粉红女郎1 from '../../asset/images/watches/粉红女郎1.png';
import 经典 from '../../asset/images/watches/经典.png';
import 经典1 from '../../asset/images/watches/经典1.png';
import 绽放 from '../../asset/images/watches/绽放.png';
import 绽放1 from '../../asset/images/watches/绽放1.png';
import 缎金 from '../../asset/images/watches/缎金.png';
import 缎金1 from '../../asset/images/watches/缎金1.png';
import 缎金绿 from '../../asset/images/watches/缎金绿.png';
import 缎金绿1 from '../../asset/images/watches/缎金绿1.png';
import 缎金黑 from '../../asset/images/watches/缎金黑.png';
import 缎金黑1 from '../../asset/images/watches/缎金黑1.png';
import 花花公子 from '../../asset/images/watches/花花公子.png';
import 花花公子1 from '../../asset/images/watches/花花公子1.png';
import 蓝调 from '../../asset/images/watches/蓝调.png';
import 蓝调1 from '../../asset/images/watches/蓝调1.png';
import 轮回 from '../../asset/images/watches/轮回.png';
import 轮回1 from '../../asset/images/watches/轮回1.png';
import 银白 from '../../asset/images/watches/银白.png';
import 银白1 from '../../asset/images/watches/银白1.png';
import 通用双射表带 from '../../asset/images/watchbands/通用双射表带.png';
import 浅棕 from '../../asset/images/watchbands/浅棕.png';
import 深棕 from '../../asset/images/watchbands/深棕.png';
import 硅胶表带 from '../../asset/images/watchbands/硅胶表带.png';
import 表带白 from '../../asset/images/watchbands/表带白.png';
import 黑橘 from '../../asset/images/watchbands/黑橘.png';
import 全黑 from '../../asset/images/watchbands/全黑.png';

const WATCH_IMAGES = [
  {original: 机械电子1, thumbnail: 机械电子},
  {original: 极简表盘1, thumbnail: 极简表盘},
  {original: 淡雅金1, thumbnail: 淡雅金},
  {original: 火烈鸟1, thumbnail: 火烈鸟},
  {original: 珍爱永恒1, thumbnail: 珍爱永恒},
  {original: 珍珠白1, thumbnail: 珍珠白},
  {original: 粉红女郎1, thumbnail: 粉红女郎},
  {original: 机械电子1, thumbnail: 机械电子},
  {original: 经典1, thumbnail: 经典},
  {original: 绽放1, thumbnail: 绽放},
  {original: 缎金1, thumbnail: 缎金},
  {original: 缎金绿1, thumbnail: 缎金绿},
  {original: 缎金黑1, thumbnail: 缎金黑},
  {original: 花花公子1, thumbnail: 花花公子},
  {original: 蓝调1, thumbnail: 蓝调},
  {original: 轮回1, thumbnail: 轮回},
  {original: 银白1, thumbnail: 银白},
];

const WATCH_BANDS = [
  {original: 通用双射表带, thumbnail: 通用双射表带},
  {original: 浅棕, thumbnail: 浅棕},
  {original: 深棕, thumbnail: 深棕},
  {original: 硅胶表带, thumbnail: 硅胶表带},
  {original: 表带白, thumbnail: 表带白},
  {original: 黑橘, thumbnail: 黑橘},
  {original: 全黑, thumbnail: 全黑},
];

const BuildWatch = () => {
  return (
    <div>
      <div className='alert alert-warning'>
        A simple primary alert—check it out!
      </div>
      <div className='h1 text-center'>Customize Your Watch</div>
      <span>word one</span>
      <p>word two</p>

      <div style={{maxWidth: '420px', margin: '0 auto'}}>
        <ImageGallery items={WATCH_IMAGES} slideDuration={200} />

      </div>
      <div style={{maxWidth: '780px', margin: '0 auto'}}>
        <ImageGallery items={WATCH_BANDS} slideDuration={200} />
//       </div>
    </div>
  );
};

// const BuildWatch = () => {
//   return (
//     <div>
//       <div className='alert alert-warning'>
//         A simple primary alert—check it out!
//       </div>
//       <div className='h1 text-center'>Customize Your Bands</div>
//       <span>word one</span>
//       <p>word two</p>

//       <div style={{maxWidth: '420px', margin: '0 auto'}}>
//         <ImageGallery items={WATCH_BANDS} slideDuration={200} />
//       </div>
//     </div>
//   );
// };

export default BuildWatch;
