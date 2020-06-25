import './Config'
import 'firebase/firestore'
import * as firebase from 'firebase'

const db = firebase.firestore()

const Delete = () => {
    db.collection('historique').doc("Doliprane").delete()
    .then(snapShot => {
        console.log(snapShot.docs.map(doc => doc.data()))
    })
    .catch(error => {
        console.log("Error writing document:", error)
    })
}

export default Delete