import * as firebase from 'firebase'
let database
export const init = () => {
    var config = {
        apiKey: "AIzaSyC1xhf0MA1eGGdhg-ovV1o_1GywmIrybew",
        authDomain: "blog-praksa.firebaseapp.com",
        databaseURL: "https://blog-praksa.firebaseio.com",
        projectId: "blog-praksa",
        storageBucket: "blog-praksa.appspot.com",
        messagingSenderId: "213031770168"
      };
  firebase.initializeApp(config)
  database = firebase.database()
}

export const signupUser = (e,p) => {
    firebase.auth().createUserWithEmailAndPassword(e, p)
    .then((res) => {
        console.log(res)
    }).catch((e) => { 
        console.log('------------------' + e)}
    )
}

export const loginUser = (e,p) => {
    firebase.auth().signInWithEmailAndPassword(e, p)
    .then((res) => { 
        firebase.auth().currentUser.getIdToken()
        .then((token) => {
            console.log(token)
        })
     }).catch(function(error) {
      console.log('code ' + error.code);
      console.log('msg ' + error.message);
    });
}