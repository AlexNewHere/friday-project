export type AuthType = {
  _id: string | null;
  email: string | null;
  name: string;
  avatar: string;
  publicCardPacksCount: number;
};

export type LoginType = AuthType & {
  isInitialized: boolean;
  isLoggedIn: boolean;
};

export type updateUserType = {
  updatedUser: AuthType;
};
