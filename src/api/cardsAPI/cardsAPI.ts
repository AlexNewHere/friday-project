import { instance, CardsResponseType } from 'api';
import { ENDPOINT } from 'enums';

export const cardsAPI = {
  getCards({ packId }: { packId: string }) {
    return instance.get<CardsResponseType>(`${ENDPOINT.CARDS}/?cardsPack_id=${packId}`);
  },
  createCards({
    question,
    answer,
    packId,
  }: {
    question: string;
    answer: string;
    packId: string;
  }) {
    return instance.post<CardsResponseType>(`${ENDPOINT.CARDS}/`, {
      card: {
        cardsPack_id: packId,
        question,
        answer,
      },
    });
  },
};
