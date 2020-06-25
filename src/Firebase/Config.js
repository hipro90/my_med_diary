import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyAXl3jbzg1HyUppyakpA0zTNd5gaNArGXc",
    authDomain: "doctogonal.firebaseapp.com",
    databaseURL: "https://doctogonal.firebaseio.com",
    projectId: "doctogonal",
    storageBucket: "doctogonal.appspot.com",
    messagingSenderId: "866859967720",
    appId: "1:866859967720:web:a8d7eec5692cf1711c555d"
}

// Initialize Firebase 

export default firebase.initializeApp(config);
    