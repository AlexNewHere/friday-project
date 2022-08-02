import { instance } from 'api';
import { ENDPOINT } from 'enums';
import { cardPacksType } from 'store';

export const packsAPI = {
  getPacks() {
    return instance.get<cardPacksType>(ENDPOINT.PACKS, {});
  },
};
