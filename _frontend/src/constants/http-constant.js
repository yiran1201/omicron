export const IS_PROD = process.env.NODE_ENV === 'production';
export const ORIGIN = IS_PROD
  ? '' // 只在后端跑
  : 'http://localhost:7777'; // 前后端分离
