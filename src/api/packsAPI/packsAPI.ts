import { CreatePackType, instance } from 'api';
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
  createPacks(data: CreatePackType) {
    return instance.post<{ error: string }>(`${ENDPOINT.PACKS}/`, {
      cardsPack: {
        ...data,
      },
    });
  },
  removePacks(id: string) {
    return instance.delete<{ error: string }>(`${ENDPOINT.PACKS}/?id=${id}`);
  },
};
