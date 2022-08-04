import { instance } from 'api';
import { ENDPOINT } from 'enums';
import { CardsResponseType } from 'store';

export const cardsAPI = {
  getCards(packId: string) {
    return instance.get<CardsResponseType>(`${ENDPOINT.CARDS}/?cardsPack_id=${packId}`);
  },
};
