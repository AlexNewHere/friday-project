import { instance, CardsResponseType } from 'api';
import { ENDPOINT } from 'enums';
import { CardsParamsTypes } from 'store';

export const cardsAPI = {
  getCards({ packId }: { packId: string }, cardsParams: CardsParamsTypes) {
    return instance.get<CardsResponseType>(`${ENDPOINT.CARDS}/`, {
      params: {
        ...cardsParams,
        cardsPack_id: packId,
      },
    });
  },
};
