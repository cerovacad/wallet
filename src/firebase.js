import firebase from 'firebase/app';
import 'firebase/app';
// import 'firebase/firestore';
import 'firebase/auth';


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
}

export const signupUser = (e, p) => {
    firebase.auth().createUserWithEmailAndPassword(e, p)
        .then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e.code)
            console.log(e.message)
        })
}

export const loginUser = (e, p) => {
    return firebase.auth().signInWithEmailAndPassword(e, p)
        .then(() => {
            return firebase.auth().currentUser.getIdToken()
                .then((token) => {
                    return token
                })
        }).catch((e) => {
            console.log('code ' + e.code);
            console.log('msg ' + e.message);
        });
}