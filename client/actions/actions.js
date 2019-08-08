import * as types from './actionTypes';

export const employeeLoggedIn = data => ({
  type: types.EMPLOYEE_LOGIN,
  payload: data,
});

export const employeeSignedUp = data => ({
  type: types.EMPLOYEE_SIGNUP,
  payload: data,
});


export const addPointToGame = data => ({
  type: types.ADD_POINT,
  payload: data,
});


// thunk that handles login attempt
export const employeeLogin = user => (dispatch, getState) => {
  fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then(data => data.json())
    .then(data => dispatch(employeeLoggedIn(data)))
    .catch(error => console.error(error));
};

// thunk that handles signup attempt
export const employeeSignUp = user => (dispatch, getState) => {
  fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then(data => data.json())
    .then(data => dispatch(employeeSignedUp(data)))
    .catch(error => console.log(error));
};

// thunk that adds a point for a game/user
export const addPoint = game => (dispatch, getState) => {
  const { user } = getState().colleague;
  console.log(user);
  const { userId } = user;
  const { userName } = user;

  fetch('/api/score/add', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, game }),
  })
    .then(() => dispatch(addPointToGame({ userName, game })))
    .catch(error => console.log(error));
};
