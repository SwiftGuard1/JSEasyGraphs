function rannumgen(minimum, maximum) {
    return Math.floor(Math.random() * (1 + maximum - minimum)) + minimum;
}

export class Utilities {
    RNG(min, max) {
        return rannumgen(min, max)
    }

    RandomNumberGenerator(min, max) {
        return rannumgen(min, max)
    }

    RandNumGen(min, max) {
        return rannumgen(min, max)
    }

    clamp = (num, min, max) => Math.min(Math.max(num, min), max);
}