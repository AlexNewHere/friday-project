export type CardType = {
  answer: string;
  question: string;
  cardsPack_id: string;
  grade: number;
  shots: number;
  user_id: string;
  created: string;
  updated: string;
  _id: string;
};

export type CardsResponseType = {
  cards: CardType[];
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
};

export type CardCreateType = {
  question: string;
  answer: string;
};

export type GetCardType = {
  cardAnswer?: string;
  cardQuestion?: string;
  min?: number;
  max?: number;
  sortCards?: string;
  page: number;
  pageCount: number;
  cardsPack_id: string;
};
