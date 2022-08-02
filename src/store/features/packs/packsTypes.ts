export type cardPackType = {
  _id: string;
  user_id: string;
  name: string;
  cardsCount: number;
  created: string;
  updated: string;
};

export type cardPacksType = {
  cardPacks: cardPackType[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
};
