# Entry 5: creating and testing MVP
##### 4/17/23

I am currently on step 5 and 6 of the *Engineering Design Process*, creating and testing the MVP for my Freedom Project. I am using firebase to build a leaderboard that stores your score in the database and you can also search for the score based on the username the user entered in the input section. In order to build this, I need to write a code that can add data into my firebase storage. I learned how to use `addDoc()` from my last blog but I noticed that there is a better option which is `setDoc()`. I learned how to use `setDoc` by reading this [website](https://rajatamil.medium.com/firebase-v9-firestore-add-data-using-setdoc-4cb9bf888ad9allows), it allow me to add data just like `addDoc()` but it also allow me to set the id of the data added to whatever I want.

<img width="396" alt="image" src="https://user-images.githubusercontent.com/91745147/233900970-509e9f73-3fc4-41e3-8deb-59e3c0be408a.png">

This is the code I wrote using `setDoc()`. I select the button with the `id` of enter and then used an `addEventListener` on it so the user can enter their username when the button is clicked. The variable `playerName` is equal to the value of the input where the user entered their username so it is equal to the username. The variable `x` generates a score for the user. After that I used `setDoc()`, the `setDoc()` method requires three arguments. The first argument is the referance to your database, the second argument is the title of your collection inside your firebase database, and the third argument is the id that you want the data that it's adding to be. In my case I want the id to be equal to the player's username so that when the player want to search for their score they can just enter the id which is just their username and the database will search based on the id that they entered.

After writing the code so that the data can be added into my database, I need to write a code that allows the player to search for their score. For this part of the code I used `getDoc()` and I used this [website](https://softauthor.com/firebase-firestore-get-document-by-id/) to learn how to use it. `getDoc` allows you to get a document inside a collection using its id.

<img width="439" alt="image" src="https://user-images.githubusercontent.com/91745147/233903959-ff3e160b-446d-4946-bd57-adc085a42146.png">



When using `getDoc()` you need the document reference as it's argument so that it knows what it supposed to get. Variable `docRef` is equal to the data of my player collection and the id of the collection will be the value user's input in the input that has the id of `scoreB`. After that, the if statement checkes if that data actually exists inside the databse. If it does then the data of the user will show up on the page. If it doesn't exist then it will say no such document in the console.

For skills, I think I've learned the skill of `How to Learn` and `Embracing Failure`. The reason I've learned `How to Learn` is because when I was searching how to use all of the firebase properties, I found many websites that shows information that are out of date. Instead of wasting time on checking if it works or not I was able to quickly identify which are the information about the latest verison of firebase and which information are out of date. The reasonw why I've learned `Embracing Failure` is because I faced a lots of erros when I was coding the part that allow the user search of their score. At first I was able to get the document that I searched but it is not showing on the screen. Instead of giving I spent hours researching and trying to solve this problem and finally it worked.

[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
