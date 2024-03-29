export type CardPackType = {
  _id: string;
  user_id: string;
  user_name: string;
  name: string;
  cardsCount: number;
  created: string;
  updated: string;
};

export type PacksType = {
  cardPacks: CardPackType[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
};
