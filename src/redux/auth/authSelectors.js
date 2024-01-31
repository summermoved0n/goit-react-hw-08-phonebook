export const selectAuthUser = state => {
  const { user } = state.auth;
  return user;
};

export const selectAuthLoggedIn = state => {
  const { isLoggedIn } = state.auth;
  return isLoggedIn;
};
