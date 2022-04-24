import { createSlice } from "@reduxjs/toolkit";

// SLICE

const applicationSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    isServiceActive: null,
    isMenuOpen: true,
    activePage: null,
    pageTitle: null,
    isLogin: false,
    jwt: null,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.jwt = action.payload.token;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.jwt = null;
      state.user = null;
    },
    menu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    title: (state, action) => {
      state.pageTitle = action.payload;
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
  },
});

export const {
  login,
  logout,
  menu,
  title,
  activePage,
  serviceActive,
  loading,
} = applicationSlice.actions;

export default applicationSlice.reducer;

// ACTIONS

export const setLogin = (value) => async (dispatch) => {
  dispatch(login(value));
};

export const setLogout = () => async (dispatch) => {
  dispatch(logout());
};

export const toggleMenu = () => async (dispatch) => {
  dispatch(menu());
};

export const setPageTitle = (value) => async (dispatch) => {
  dispatch(title(value));
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
