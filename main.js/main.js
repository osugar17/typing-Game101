import kaboom from "kaboom"

// initialize context
kaboom()

// load assets
loadSprite("bean", "sprites/bean.png")

// add a character to screen
add([
	// list of components
	sprite("bean"),
	pos(80, 40),
	area(),
  body(),
  "player",
])

// floor
add([
    rect(width(), 48),
    pos(0, height() - 48),
    outline(5),
    area(),
    solid(),
    color(127, 200, 255),
])
// randmWords
var randomWords = ["fun","sep","hen","hat","sea","pea","this","that","food","fights","train","plane","complete"];

// enemy
const zombie = add([
  rect(48, 64),
   text(""),
  area(),
  body(),
  outline(4),
  pos(width(), height() - 48),
  origin("botleft"),
  color(255, 180, 255),
  move(LEFT, 240),
  "enemy",
]);

zombie.text = randomWords[0]
    onCharInput((char) => {
    if (char === zombie.text.charAt(0)) {
      // zombie.text = zombie.text.slice(1)
      zombie.text = zombie.text.substring(1,zombie.text.length)
      if(zombie.text.charAt() == ""){
        destroy(zombie)
      }
    }
  })

//lose
onCollide("player", "enemy", () => {
    every("player", destroy)
})