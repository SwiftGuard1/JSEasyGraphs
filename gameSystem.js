import { Utilities } from "./utils";

class UnregulatedHealthSystem {
    #utitilies = new Utilities()

    #maxHealth = 100;
    #health = 100;

    getHealth() {
        return this.#health
    }
    setMaxHealth(maxHealth) {
        this.#maxHealth = maxHealth;
    }

    setHealth(health) {
        this.#health = health;
    }

    addHealth(health) {
        let newHealth = this.getHealth() + health
        this.setHealth(newHealth)
    }
    removeHealth(health) {
        let newHealth = this.getHealth() - health
        this.setHealth(newHealth)
    }
}

class RegulatedHealthSystem {
    #utitilies = new Utilities()

    #maxHealth = 100;
    #health = 100;

    getHealth() {
        return this.#health
    }
    setMaxHealth(maxHealth) {
        this.#maxHealth = maxHealth;
    }

    setHealth(health) {
        let clampedHealth = this.#utitilies.clamp(health, 0, this.#maxHealth)
        this.#health = clampedHealth;
    }

    addHealth(health) {
        let newHealth = this.getHealth() + health
        this.setHealth(newHealth)
    }
    removeHealth(health) {
        let newHealth = this.getHealth() - health
        this.setHealth(newHealth)
    }
}