
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

//collection data
getDocs(colRef)
  .then((snapshot) => {
    var data = []
    snapshot.docs.forEach((doc) =>{
      data.push({ ...doc.data(), id: doc.id })
    })
    console.log(data);
  })
  .catch(err => {
    console.log(err.message);
  })

//user input


document.querySelector('#enter').addEventListener("click", (e)=>{
    var playerName = document.querySelector('#user').value;
    // var playerScore = document.querySelector('#point').value;
    var x = Math.floor(Math.random() * 10);
    console.log(x)
    console.log(playerName);
    // e.preventDefualt();

    setDoc(doc(db, "player", playerName), {
      name: playerName,
      score: x,



    });
    document.querySelector('#user').value="";
    // document.querySelector('#point').value="";
})
//get doc
function searchDocument() {
  const id = document.querySelector('#scoreB').value;
  const docRef = doc(db, 'player', id);

  getDoc(docRef)
    .then((doc) => {
      if (doc.exists()) {
        const data = doc.data();
        // write the data to the page
        document.getElementById('result').innerHTML = JSON.stringify(data);
      } else {
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
}

document.getElementById('search').addEventListener('click', searchDocument);