import { createSlice } from '@reduxjs/toolkit';

// SLICE

const applicationSlice = createSlice({
  name: 'application',
  initialState: {
    isLoading: false,
    isServiceActive: null,
    isWalletOpen: true,
    activePage: null,
    isLogin: false,
    jwt: null,
    userRole: null,
    language: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.jwt = action.payload.token;
      state.userRole = action.payload.userRole;
    },
    logout: (state) => {
      state.isLogin = false;
      state.jwt = null;
    },
    wallet: (state) => {
      state.isWalletOpen = !state.isWalletOpen;
    },
    activePage: (state, action) => {
      state.activePage = action.payload;
    },
    serviceActive: (state, action) => {
      state.activePage = action.payload;
    },
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
    language: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const {
  login,
  logout,
  wallet,
  title,
  activePage,
  serviceActive,
  loading,
  language,
} = applicationSlice.actions;

export default applicationSlice.reducer;

// ACTIONS

export const setLogin = (value) => async (dispatch) => {
  dispatch(login(value));
};

export const setLogout = () => async (dispatch) => {
  dispatch(logout());
};

export const togglewallet = () => async (dispatch) => {
  dispatch(wallet());
};

export const setActivePage = (value) => async (dispatch) => {
  dispatch(activePage(value));
};

export const setServiceActive = (value) => async (dispatch) => {
  dispatch(serviceActive(value));
};

export const setLoading = (value) => async (dispatch) => {
  dispatch(loading(value));
};

export const setLanguage = (value) => async (dispatch) => {
  dispatch(language(value));
};
