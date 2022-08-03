import { instance } from 'api';
import { ENDPOINT } from 'enums';
import { CardsResponseType } from 'store/features/Cards/card/cardsTypes';

export const cardsAPI = {
  getCards() {
    const packId = '62ea6c1126b1ff20345a0d96';
    return instance.get<CardsResponseType>(`${ENDPOINT.CARDS}/?cardsPack_id=${packId}`);
  },
};
