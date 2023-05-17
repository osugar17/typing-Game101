type="module">
import kaboom from "kaboom"
// initialize context
kaboom({
  background: [135,206,235]
})

// load assets
loadSprite("bean", "sprites/slime.png")
// add a character to screen
add([
  // list of components
  sprite("slime"),
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
  color(124, 252, 0),
])
// randmWords
var randomWords = ["dead", "alive", "life", "ghost", "zombie", "mutant", "sep", "software", "engineer", "construction", "freedom", "project", "infection", "assimilate", "survival", "typing", "fortress", "build", "kill", "spread", "solo", "project", "google", "javascript", "html", "css", "technology", "doomsday", "end", "escape"];
//"supercalifragilisticexpialidocious"

// num Gen
var ranNumGen = Math.floor(Math.random() * randomWords.length);

// speed
var SPEED = 200;

// enemy
var enemy = add([
  // sprite("enemy"),
  rect(48, 64),
  color(0,153,255),
  opacity(0.5),
  // textColor(255),
  text(""),
  area(),
  body(),
  outline(4),
  pos(width(), height() - 48),
  origin("botleft"),
  move(LEFT, SPEED),
  "enemy",
]);

enemy.text = randomWords[ranNumGen]
onCharInput((char) => {
  if (char === enemy.text.charAt(0)) {
    enemy.text = enemy.text.substring(1, enemy.text.length)
    if (enemy.text.charAt() == "") {
      destroy(enemy)
      enemy = add([
        rect(48, 64),
        color(0,153,255),
        opacity(0.5),
        text(""),
        area(),
        body(),
        outline(4),
        pos(width(), height() - 48),
        origin("botleft"),
        move(LEFT, SPEED),
        "enemy",
      ]);
      enemy.text = randomWords[ranNumGen]
      ranNumGen = Math.floor(Math.random() * randomWords.length);
    }
  }
  if (score >= 1000) {
    SPEED += 1;
  }
})

// Scoring
let score = 0;

const scoreLabel = add([
  text(score),
  pos(24, 24),
]);

// Increases score every frame
onUpdate(() => {
  score++;
  scoreLabel.text = score;
});

//lose
onCollide("player", "enemy", () => {
  every("player", destroy)
  go("lose", score);
})

scene("lose", (score) => {
  // display score
  add([
    text("You Scored!"),
    pos(width() / 2, height() / 7 + 80),
    scale(1),
    origin("center"),
  ]);
  add([
    text(score),
    pos(width() / 2, height() / 2 + 80),
    scale(2),
    origin("center"),
  ]);
});