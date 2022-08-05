import { instance, CardsResponseType } from 'api';
import { ENDPOINT } from 'enums';

export const cardsAPI = {
  getCards({ packId }: { packId: string }) {
    return instance.get<CardsResponseType>(`${ENDPOINT.CARDS}/?cardsPack_id=${packId}`);
  },
};
