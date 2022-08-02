import { instance } from 'api';
import { ENDPOINT } from 'enums';
import { cardPacksType } from 'store/features/packs/packsSlice';

export const packsAPI = {
  getPacks() {
    return instance.get<cardPacksType>(ENDPOINT.PACKS, {});
  },
};
