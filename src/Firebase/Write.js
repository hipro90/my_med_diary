import './Config'
import 'firebase/firestore'
import * as firebase from 'firebase'

const db = firebase.firestore()

const Write = (collection, data) => {

    db.collection(collection).add(data)
    .then(() => {
        console.log("Document sucessfully written")
    })
    .catch(error => {
        console.log("Error writing document:", error)
    })
}

export default Write