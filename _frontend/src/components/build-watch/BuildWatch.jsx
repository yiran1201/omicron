import './BuildWatch.scss';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

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

const WATCH_IMAGES = [
  {
    original: 机械电子,
    thumbnail: 机械电子,
  },
  {
    original: 极简表盘,
    thumbnail: 极简表盘,
  },
  {
    original: 淡雅金,
    thumbnail: 淡雅金,
  },
  {
    original: 火烈鸟,
    thumbnail: 火烈鸟,
  },
  {
    original: 珍爱永恒,
    thumbnail: 珍爱永恒,
  },
  {
    original: 珍珠白,
    thumbnail: 珍珠白,
  },
  {
    original: 粉红女郎,
    thumbnail: 粉红女郎,
  },
  {
    original: 机械电子,
    thumbnail: 机械电子,
  },
  {original: 经典, thumbnail: 经典},
  {original: 绽放, thumbnail: 绽放},
  {original: 缎金, thumbnail: 缎金},
  {
    original: 缎金绿,
    thumbnail: 缎金绿,
  },
  {
    original: 缎金黑,
    thumbnail: 缎金黑,
  },
  {
    original: 花花公子,
    thumbnail: 花花公子,
  },
  {original: 蓝调, thumbnail: 蓝调},
  {original: 轮回, thumbnail: 轮回},
  {original: 银白, thumbnail: 银白},
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
    </div>
  );
};

export default BuildWatch;
