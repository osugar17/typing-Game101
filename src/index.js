
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc, setDoc, updateDoc, getDoc, onSnapshot
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD8U2-dnzJnYL0aQk53YkrNcJB-f9O6M_o",
  authDomain: "freeproject-cc21e.firebaseapp.com",
  projectId: "freeproject-cc21e",
  storageBucket: "freeproject-cc21e.appspot.com",
  messagingSenderId: "168884772055",
  appId: "1:168884772055:web:b7f9b087ff7dad4a45a492"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'player')



//user input

document.querySelector('#enter').addEventListener("click", (e)=>{
    var playerName = document.querySelector('#user').value;
    var x = 0;
    console.log(x)
    console.log(playerName);

    setDoc(doc(db, "player", playerName), {
      name: playerName,
      score: x,

    });
    document.querySelector('#user').value="";
})
//get doc
function searchDocument() {
  var id = document.querySelector('#scoreB').value;
  var docRef = doc(db, 'player', id);
  var view = document.getElementById('result');

  getDoc(docRef)
    .then((doc) => {
      if (doc.exists()) {
        var data = doc.data();
        // write the data to the page
        view.innerHTML = "this is your data " + "name: "+  data.name + " " + "score: " +  data.score;

        // mueller code
        console.log("the button was clicked")
        console.log("name: " + data.name)
        console.log("score: " + data.score)
      } else {
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
}

document.getElementById('search').addEventListener('click', searchDocument);

// realtime data collection
// OnSnapshot(colRef, (snapshot) => {

// })