var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich',
    'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy',
    'Girl', 'Vortex', 'Paradox'
];

function generate() {
    // The function doesn't need to "return" anything. It just needs
    // to set the value of the text field to the random name.
    let result = nameList[Math.floor(Math.random() * nameList.length)];
    let result2 = nameList[Math.floor(Math.random() * nameList.length)];
    return result + result2
};

/**
 * 
 */

export const AnimationOptionsFormat = {
    duration: "infinite";
}

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
    value: "red"
}
export class AnimationController {
    /**
     * 
     * @param {HTMLElement} element The element to give the animation to
     * @param  {...KeyframeFormat} keyframes The keyframes to use in the animation
     */
    applyAnimation(element, ...keyframes) {
        let css = window.document.styleSheets[0];
        let randomName = generate()
        let animation = `@keyframes ${randomName} {`;
        for (i = 0; i < keyframes.length; i++) {
            animation += `\n${keyframes[i].location} { ${keyframes[i].property}: ${keyframes[i].value}; }`
        }
        css.insertRule(animation, css.cssRules.length)
        let newElem = element.style.animation = "myAnimation 1s ease infinite";
        return newElem
    }
}