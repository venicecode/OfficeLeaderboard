import * as types from "./actionTypes";

export const employeeLoggedIn = data => ({
  type: types.EMPLOYEE_LOGIN,
  payload: data
});

export const employeeSignedUp = data => ({
  type: types.EMPLOYEE_SIGNUP,
  payload: data
});

//thunk that handles login attempt
export const employeeLogin = user => (dispatch, getState) => {
  fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(data => data.json())
    .then(data => dispatch(employeeLoggedIn(data)))
    .catch(error => console.error(error));
};

//thunk that handles signup attempt
export const employeeSignUp = user => (dispatch, getState) => {
  fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(data => data.json())
    .then(data => dispatch(employeeSignedUp(data)))
    .catch(error => console.log(error));
};
