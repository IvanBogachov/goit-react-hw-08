export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.user.name;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUserToken = (state) => state.auth.token;
// export const selectUser = (state) => state.auth.user;
// export const selectToken = (state) => state.auth.token;
