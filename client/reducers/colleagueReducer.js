import * as types from '../actions/actionTypes';

const initialState = {
  company: '',
  office: '',
  isSigned: false,
  user: {
    userId: '',
    userName: '',
    userScores: [],
  },
  companyGames: [],
};

const colleagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EMPLOYEE_LOGIN: {
      const user = {
        userId: action.payload.user.userId,
        userName: action.payload.user.userName,
        userScores: [...action.payload.user.userScores],
      };
      const companyGames = [...action.payload.companyGames];
      const { isSigned } = action.payload;
      return {
        ...state,
        company: action.payload.company,
        office: action.payload.office,
        isSigned,
        user,
        companyGames,
      };
    }

    case types.EMPLOYEE_SIGNUP: {
      const user = {
        userId: action.payload.user.userId,
        userName: action.payload.user.userName,
        userScores: [...action.payload.user.userScores],
      };
      const companyGames = [...action.payload.companyGames];
      const { isSigned } = action.payload;
      return {
        ...state,
        company: action.payload.company,
        office: action.payload.office,
        isSigned,
        user,
        companyGames,
      };
    }

    case types.ADD_POINT: {
      const { userName, game } = action.payload;
      const { userScores } = state.user;
      let gameIdx;
      for (let i = 0; i < userScores.length; i += 1) {
        if (userScores[i].gameName === game) {
          gameIdx = i;
          break;
        }
      }
      if (gameIdx === undefined) {
        userScores.push({ gameName: game, score: 1 });
      } else {
        userScores[gameIdx].score += 1;
      }

      const user = {
        userId: state.user.userId,
        userName,
        userScores,
      };
      return {
        ...state,
        user,
      };
    }

    default:
      return state;
  }
};

export default colleagueReducer;
