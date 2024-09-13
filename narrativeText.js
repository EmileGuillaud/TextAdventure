export let narrativeText = [
  // 0
  {
    header: "In front of the cave entrance.",
    description:
      "You made it out of the jungle and see the mouth of the cave you're looking for. You hear the wind howl from inside the void, and can see bats and other icky critters inside.",
    choices: [
      { text: "Enter the cave." }, //1
      { text: "Catch your breath for a while." }, //2
    ],
  },
  //1
  {
    header: "Inside the cave.",
    description:
      "You enter the cave. The air is musty and stale, making it hard to breathe. You spot a suspiciously round patch of leaves on the floor, what will you do?",
    choices: [
      { text: "Try to hop over it, without disturbing the leaves." }, //3
      { text: "Walk over it like usual, this isn't a movie after all." }, //4
    ],
  },
  //2
  {
    header: "While resting.",
    description:
      "You decide to catch your breath for a while. Before you know it the sunny sky has become grey and rainy. What do you do?",
    choices: [
      { text: "Enter the cave to get out of the rain." }, //1
      {
        text: "Return to the village, this treasure isn't worth catching pneumonia",
      }, //5
    ],
  },
  //3
  {
    header: "At the suspicious leaf patch.",
    description:
      "You try hopping over the leaves. The cave roof was lower than you thought, bumping your head against a loose rock. the moment the leaves are disturbed, spikes spring from the ground. Close call... <br> You continue forward, arriving at a large cavern. There is a gilded coffer curiously perched on a pillar in the center for the space.",
    choices: [
      { text: "Take the treasure." }, //6
      { text: "Leave the treasure alone." }, //7
    ],
  },
  //4
  {
    header: "At the suspicious leaf patch.",
    description:
      "You decide to walk over the leaf patch. The moment your foot steps onto the leaves, you feel stinging pain as wooden stakes shoot from the floor. You're Dead.",
    choices: [-1],
  },
  //5
  {
    header: "Outside in the rain.",
    description:
      "You opt for returning to the village. You leave empty handed and soaked to the bone",
    choices: [-1],
  },
  //6
  {
    header: "You take the chest.",
    description:
      "As soon as you lift the chest from the pedestal, you hear a loud click, followed by rumbling. a giant boulder crashes through the far wall. You turn around and run as fast as you can, making for the exit.",
    choices: [-1],
  },
  //7
  {
    header: "You leave the chest alone.",
    description:
      "You leave the chest alone, deciding to leave the way you came. You return to the village empty handed.",
    choices: [-1],
  },
  //8
  {
    header: "In the village.",
    description:
      "you return to the village with the treasure chest. Now you can pay the logging company to leave the forest alone, saving your village from being demolished.",
    choices: [-1],
  },
];
