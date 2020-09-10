import {UPDATE_PARTNERS} from './brand-type';

export const updatePartnersRedux = (partners) => {
  return {
    type: UPDATE_PARTNERS,
    data: partners,
  };
};
