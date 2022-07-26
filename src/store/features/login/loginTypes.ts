export type AuthType = {
  _id: string | null;
  email: string | null;
  name: string;
  avatar: string | null;
  publicCardPacksCount: number;
};

export type LoginType = AuthType & {
  isInitialized: boolean;
  isLoggedIn: boolean;
};
