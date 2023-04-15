
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc, setDoc, updateDoc
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
// const colRef = collection(db, 'player')

//user input


document.querySelector('#enter').addEventListener("click", (e)=>{
    var playerName = document.querySelector('#user').value;
    var playerScore = document.querySelector('#point').value;
    console.log(playerName);
    // e.preventDefualt();

    addDoc(collection(db, 'player'), {
      name: playerName,
      score: playerScore,



    });
    document.querySelector('#user').value="";
    document.querySelector('#point').value="";
})



