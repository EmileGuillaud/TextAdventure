import "./style.css";

let narrativeText = [
  // 0
  {
    header: "In front of the cave entrance.",
    description:
      "You made it out of the jungle and see the mouth of the cave you're looking for. You hear the wind howl from inside the void, and can see bats and other icky critters inside.",
    choices: [
      { text: "Enter the cave.", nextState: 1 }, //1
      { text: "Catch your breath for a while.", nextState: 2 }, //2
    ],
    imgUrl: "./images/cave_entrance.jpg",
  },
  //1
  {
    header: "Inside the cave.",
    description:
      "You enter the cave. The air is musty and stale, making it hard to breathe. You spot a suspiciously round patch of leaves on the floor, what will you do?",
    choices: [
      {
        text: "Try to hop over it, without disturbing the leaves.",
        nextState: 3,
      },
      {
        text: "Walk over it like usual, this isn't a movie after all.",
        nextState: 4,
      },
    ],
    imgUrl: "./images/tunnel.webp",
  },
  //2
  {
    header: "While resting.",
    description:
      "You decide to catch your breath for a while. Before you know it the sunny sky has become grey and rainy. What do you do?",
    choices: [
      { text: "Enter the cave to get out of the rain.", nextState: 1 },
      {
        text: "Return to the village, this treasure isn't worth catching pneumonia",
        nextState: 5,
      }, //5
    ],
    imgUrl: "./images/rain.jpg",
  },
  //3
  {
    header: "At the suspicious leaf patch.",
    description:
      "You try hopping over the leaves. The cave roof was lower than you thought, bumping your head against a loose rock. the moment the leaves are disturbed, spikes spring from the ground. Close call... <br> You continue forward, arriving at a large cavern. There is a gilded coffer curiously perched on a pillar in the center for the space.",
    choices: [
      { text: "Take the treasure.", nextState: 6 }, //6
      { text: "Leave the treasure alone.", nextState: 7 }, //7
    ],
    imgUrl: "./images/chest_room.jpg",
  },
  //4
  {
    header: "At the suspicious leaf patch.",
    description:
      "You decide to walk over the leaf patch. The moment your foot steps onto the leaves, you feel stinging pain as wooden stakes shoot from the floor. You're Dead.",
    choices: [{ text: "Ouch!", nextState: 10 }],
    imgUrl: "./images/spikes.png",
  },
  //5
  {
    header: "Outside in the rain.",
    description:
      "You opt for returning to the village. You leave empty handed and soaked to the bone",
    choices: [{ text: "Return home.", nextState: 9 }],
    imgUrl: "./images/rain.jpg",
  },
  //6
  {
    header: "You take the chest.",
    description:
      "As soon as you lift the chest from the pedestal, you hear a loud click, followed by rumbling. a giant boulder crashes through the far wall. You turn around and run as fast as you can, making for the exit.",
    choices: [{ text: "Start Game Again.", nextState: 0 }],
    imgUrl: "./images/boulder.jpg",
  },
  //7
  {
    header: "You leave the chest alone.",
    description:
      "You leave the chest alone, deciding to leave the way you came. You return to the village empty handed.",
    choices: [{ text: "Next.", nextState: 9 }],
    imgUrl: "./images/rainyvillage.jpg",
  },
  //8
  {
    header: "In the village.",
    description:
      "You return to the village with the treasure chest. Now you can pay the logging company to leave the forest alone, saving your village from being demolished.",
    choices: [{ text: "Start Game Again.", nextState: 0 }],
    imgUrl: "./images/village.jpg",
  },
  //9
  {
    header: "In the village.",
    description: "You didnt get the treasure, your village is demolished.",
    choices: [{ text: "Oh no :(", nextState: 10 }],
    imgUrl: "./images/demolish.jpg",
  },
  //10
  {
    header: "Game over.",
    description: "You failed the game, play again?",
    choices: [
      {
        text: "Start Game again?",
        nextState: 0,
      },
    ],
    imgUrl: "./images/game_over.jpg",
  },
];

//hooks to HTML DOM
const headerEl = document.querySelector("header h1");
const textEl = document.querySelector("#text p");
const optionsEl = document.querySelector("#options");
const imgEl = document.querySelector("main img");

//set story progression point
let currentState = 0;

function startGame() {
  showText(currentState);
  showImage(currentState);
  showChoices(currentState);
}

function showText(stateID) {
  headerEl.textContent = narrativeText[stateID].header;
  textEl.textContent = narrativeText[stateID].description;
}
function showImage(stateID) {
  imgEl.src = narrativeText[stateID].imgUrl;
}

function showChoices(stateID) {
  optionsEl.innerHTML = "";

  narrativeText[stateID].choices.forEach((selection) => {
    const myButton = document.createElement("button");
    myButton.innerText = selection.text;
    myButton.classList.add("btn-color");

    // Tilføj event listener
    myButton.addEventListener("click", () => {
      optionSelected(selection);
    });
    optionsEl.append(myButton);
  });
}

// Håndter den valgte knap
function optionSelected(options) {
  currentState = options.nextState;

  showText(currentState);
  showChoices(currentState);
  showImage(currentState);
}

// Start spillet
startGame();
