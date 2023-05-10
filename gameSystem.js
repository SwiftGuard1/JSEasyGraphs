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

class InventorySystem {
    #utilties = new Utilities()

    #maxSlots = 3;

    #inventory = [{item:'',data:''}]

    setMaxSlots(slots) {
        this.#maxSlots = slots
    }

    addItem(itemID, itemData) {
        if (this.#inventory.length<=this.#maxSlots) {
            this.#inventory.push({item:itemID,data:itemData})
        }
    }

    removeItem(index) {
        this.#inventory.splice(index, 1)
    }
}