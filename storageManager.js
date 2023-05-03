export class LocalManager {
    retrieveItem(key) {
        return localStorage.getItem(key)
    }
    setItem(key, value) {
        localStorage.getItem(key, value)
    }
}