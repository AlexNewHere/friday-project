import { instance } from 'api';
import { ENDPOINT } from 'enums';
import { PacksType, ParamsType } from 'store';

export const packsAPI = {
  getPacks(params: ParamsType) {
    return instance.get<PacksType>(`${ENDPOINT.PACKS}/`, {
      params: {
        ...params,
      },
    });
  },
};
