import { instance } from 'api';
import { ENDPOINT } from 'enums';
import { PacksType, ParamsType } from 'store';

export const packsAPI = {
  getPacks(params: ParamsType) {
    const { page, pageCount, min, max, packName, userId, sortPacks } = params;
    return instance.get<PacksType>(
      `${ENDPOINT.PACKS}/?page=${page}&pageCount=${pageCount}&min=${min}&max=${max}&packName=${packName}&user_id=${userId}&sortPacks=${sortPacks}`,
      {},
    );
  },
};
