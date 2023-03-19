# Entry 4: Tinkering and making
##### 3/13/23

I am currently on the **3rd and 4th step** of **the Engineering Design Process**, since my last blog I've been trying to figure out a solution that I've encountered when I was tinkering with firebase. At first, I thought the code I wrote is incorrect however, no matter what I do to the code it still shows the same error message. Then I saw the error messaging showing something about my `bundle.js' file so I thought there was something wrong with the linking between the bundle.js and my index.html. The only solution I can think of is to redo everything and remake all of my files. Therefore, I had to rewatch the videos from this [playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb). After remaking all the files and rewriting all the codes, I checked the console and it finally worked. It showed all of the data I added inside the database in the console.

<img width="335" alt="image" src="https://user-images.githubusercontent.com/91745147/226152379-cea5e717-a34b-4f9d-abda-119306e9823c.png">

Now that my data is able to be shown in the console, I went on and learn how to add and delete data based on the user's input. I used this [video](https://www.youtube.com/watch?v=s1frrNxq4js&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=5) to learn how to do that. I first created a `.add` class in the html and added it in a `form` element which contains text input and button element. After that, I used `querySelector` to select the `.add` class and added an `addEventListener` to it.The event is `submit` so the function activates when the user submits the form. Inside this function I added `preventDefault` because whenever you submit a form in a HTML page the default action is to refreash the page and it cancles the default action so the page doesn't refreash. However, this does not allow me to add the data I want yet so I had to use the function `addDoc`. There are 2 arguments in an `addDoc` function, the first one is the collection referance so it knows what collection you want to add a new document to. The second argument is an object, the object represents the new document that you want to add and in my cause it's the value of the title and author of the book. After that I added a `then method` which fires a function once this completes. When the adding of the new document is complete I want to reset the form so it empty the input text box. To do that I used `.reset()`

<img width="347" alt="image" src="https://user-images.githubusercontent.com/91745147/226207822-3f09cb63-a2db-4c20-a7e8-47b8169a8552.png">

For deleting the data, I bascially have the same code except I used the `doc()` function and this takes in the document referance. It takes in 3 argument, the first one is the database `db`, the second one is the is the collection which is `books` in my case and the thrid one is the id of the document that the user want to referance to inside the book collection. Therefore the thrid arguement will be the value of the user's input.

<img width="371" alt="image" src="https://user-images.githubusercontent.com/91745147/226208080-a24481f3-ff26-448c-836b-1ab26d0273a4.png">

After learning about how to add and delete data, I've developed many skills. The first skill is `embracing failure` because during the process of coding I've encountered many errors but I didn't give up and tried to fix it even if it means to redo everything. Another skill I've developed is `debugging` because I figured out the error by reading it carefully and think about what is causing the problem.



[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
