# Entry 3: Tinkering and Learning
##### 2/6/23

I am currently on **stage 3** of the **<ins>Engineering Design Process<ins>**, for the past few weeks I've been learning Firebase and tinkering with the code that I got. I follow video tutorials about firebase to learn about the tool and how to use it. I use the [playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb) by NetNinja on youtube and it had teached me many things about firebase. From the video [Firestore Setup & Fetching Data](https://www.youtube.com/watch?v=2yNyiW_41H8&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=4&t=317s) I learned how to add collections in the FireStore so I tinkered around with it and made a collection of books with 3 different document of the title and author. From the video I learned that each document needs an id so when we want to grab that specific document we can use it's id to grab it. After that I imported getFirestore in my index.js to initialize the server and then made a varible called db equal to it

`const db = getFirestore`
db stands for database and it represents the database connection. We use db whenever we're trying to reach the database. After this I need to add a collection reference so that I can grab a specific collection from my database. I first imported the function collection which comes from the firestore part of the libary. and then made a varible `colRef` which stands for collection reference equal to collection

`const colRef = collection(db,books)`
The first argument is the database so it know what database it's going to look in for the collection and the second is the collection that I want to grab
  
  <img width="314" alt="firebase" src="https://user-images.githubusercontent.com/91745147/219267775-490d1b08-d2ae-4405-a43b-8b84a3cb700c.png">
  
  This is the code I wrote and this is supposed to show an array of all of the data of my collection of book inside the console however it didn't work. I noticed that nothing was being logged inside the console so I thought I connected my `bundle.js` file to the bundle the wrong way. I recreated the bundle based on the tutorial from NetNinja and it finally connected my bundle.js to my index.html. Even though it's now connected, the console showed a bunch of errors. For now, I have no clue on how to solve it. 
  
  I will try to learn more about fireStore database in the future so by the next blog I would be able to solve this problem. For skills, I've learned to have a **<ins>growth mindset and embracing failure.<ins>** When I was tinkering with firebase I was really confused and so I ask many questions and attended tutoring. I also made many errors when I was coding and most of the time I had to start again but I wasn't upset about it. I try to make my code better every time I redo it. 

[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
