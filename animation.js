var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

function generate() {
  // The function doesn't need to "return" anything. It just needs
  // to set the value of the text field to the random name.
  let result = nameList[Math.floor(Math.random() * nameList.length)];
  let result2 = nameList[Math.floor(Math.random() * nameList.length)];
  return result + result2;
}

/**
 *
 */

export const AnimationOptionsFormat = {
  duration: "1s",
  easingStyle: "ease-in-out",
  loopTimes: "infinite",
};

/**
 * A format for an animation keyframe
 *
 * Location in percentages
 * Property you want to tween
 * Value of the property
 */
export const KeyframeFormat = {
  location: "0%",
  property: "background-color",
  value: "red",
};
export class AnimationController {
  /**
   *
   * @param {Window} windowObject Simple type window.
   * @param {HTMLElement} element The element to give the animation to
   * @param {AnimationOptionsFormat} animationOptions The options
   * @param  {...KeyframeFormat} keyframes The keyframes to use in the animation
   */
  applyAnimation(element, animationOptions, ...keyframes) {
    let randomName = generate();
    let animation = `@keyframes ${randomName} {`;
    for (let i = 0; i < keyframes.length; i++) {
      animation += `\n${keyframes[i].location} { ${keyframes[i].property}: ${keyframes[i].value}; }`;
    }
    let newCSS = document.createElement("style");
    newCSS.innerHTML = animation;
    document.head.appendChild(newCSS);
    let newElem = element;
    newElem.style.animation = `${randomName} ${animationOptions.duration} ${animationOptions.easingStyle} ${animationOptions.loopTimes}`;
    return newElem;
  }
}
