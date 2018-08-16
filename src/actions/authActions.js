export const LOGIN = "LOGIN"
export const SIGNUP = "SIGNUP"

const login = (email, pass) => {
    return {
        type: LOGIN,
        email,
        pass
    }
}

export const loginAsync = (email, pass) => {
    return (dispatch) => dispatch(login(email, pass))
}

export const signup = (email, pass) => {

}

// function makeASandwichWithSecretSauce(forPerson) {

//   return function (dispatch) {
//     return fetchSecretSauce().then(
//       sauce => dispatch(makeASandwich(forPerson, sauce)),
//       error => dispatch(apologize('The Sandwich Shop', forPerson, error))
//     );
//   };
// }