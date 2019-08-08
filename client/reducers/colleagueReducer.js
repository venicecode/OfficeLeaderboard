import * as types from "../actions/actionTypes";

const initialState = {
  company: "",
  office: "",
  isSigned: false,
  user: {
    userId: "",
    userName: "",
    userScores: []
  },
  companyGames: []
};

const colleagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EMPLOYEE_LOGIN: {
      const user = {
        userId: action.payload.user.id,
        userName: action.payload.user.username,
        userScores: []
      };
      const isSigned = action.payload.isSigned;
      return {
        ...state,
        isSigned,
        user
      };
    }

    case types.EMPLOYEE_SIGNUP: {
      const user = {
        userId: action.payload.user.id,
        userName: action.payload.user.username,
        userScores: []
      };
      const isSigned = action.payload.isSigned;
      return {
        ...state,
        isSigned,
        user
      };
    }

    default:
      return state;
  }
};

export default colleagueReducer;
