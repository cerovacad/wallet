export const LOGIN = "LOGIN"
export const SIGNUP = "SIGNUP"
export const LOGOUT = "LOGOUT"

const login = token => ({ type: LOGIN, token })

export const loginAsync = token => dispatch => dispatch(login(token))

export const signup = (email, pass) => {

}

export const logout = () => ({
    type: LOGOUT
});

// function makeASandwichWithSecretSauce(forPerson) {

//   return function (dispatch) {
//     return fetchSecretSauce().then(
//       sauce => dispatch(makeASandwich(forPerson, sauce)),
//       error => dispatch(apologize('The Sandwich Shop', forPerson, error))
//     );
//   };
// }