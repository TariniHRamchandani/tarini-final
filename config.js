import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAq0FvSgAMJlt4mheakxQ_2yXFALCm7n-U",
  authDomain: "the-swach-project.firebaseapp.com",
  projectId: "the-swach-project",
  storageBucket: "the-swach-project.appspot.com",
  messagingSenderId: "1041315545073",
  appId: "1:1041315545073:web:0035f6b6457dddcf864e50"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
  
}
export default firebase.firestore()