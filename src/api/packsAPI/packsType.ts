export type CreatePackType = {
  name: string | null;
  deckCover?: string | null;
  private: boolean | null;
};

export type EditPackType = {
  _id: string;
  name: string;
};
