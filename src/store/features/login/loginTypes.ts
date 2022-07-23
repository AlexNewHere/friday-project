export type AuthType = {
  _id: string | null;
  email: string | null;
  name: string | null;
  avatar: string | null;
  publicCardPacksCount: number;
};

export type LoginType = AuthType & {
  isAuth: boolean;
  isFetchLogin: boolean;
};
