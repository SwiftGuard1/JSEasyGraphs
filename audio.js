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

export class FlatAudio {
    #volume = 1;
    #element = "";
    setVolume(volume) {
        this.#volume = volume;
    }

    setAudioElementID(elementID) {
        this.#element = elementID
    }

    setAudioSource(url) {
        document.getElementById(this.#element).src = url;
    }
}

export class PanningAudio {
    #volume = 1;
    #element = "";
    setVolume(volume) {
        this.#volume = volume;
    }

    setAudioElementID(elementID) {
        this.#element = elementID;
    }

    setAudioSource(url) {
        document.getElementById(this.#element).src = url;
    }

    setPan(pan) {
        this.#stereoNode.pan = pan
    }

    // for legacy browsers
    #AudioContext = window.AudioContext || window.webkitAudioContext;

    #audioContext = new AudioContext();

    // get the audio element
    #audioElement = document.getElementById(this.#element)

    // pass it into the audio context
    #track = audioContext.createMediaElementSource(this.#audioElement);

    // default pan set to 0 - center
    #stereoNode = new StereoPannerNode(this.#audioContext, { pan: 0 });

    initializePanning() {
        this.#track.connect(this.#stereoNode).connect(this.#audioContext.destination);
    }
}