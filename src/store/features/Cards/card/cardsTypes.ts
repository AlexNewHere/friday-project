import { CardsResponseType } from 'api';

export type CardsPackType = CardsResponseType & {
  packName: string;
  packId: string;
};
