export class APIRequests {
    async getAPIRequestText(url) {
        let response = await fetch(url)
        let data = await response.text()
        return data
    }

    async getAPIRequestJSON(url) {
        let response = await fetch(url)
        let data = await response.json()
        return data
    }
}

export class ServerStorageRequest {
    async getValue(key) {
        let response = await fetch("https://script.google.com/a/macros/wolcottps.org/s/AKfycbwoidYJFPKbj4tDwyTrUgijbAhSJsGo6ScPtLbO_TwUVmlPyuAgZXLwx-bFjDZGDLmGFQ/exec?action=get&key=" + key)
        let data = await response.text()
        return data
    }

    async setValue(key, value) {
        let response = await fetch("https://script.google.com/a/macros/wolcottps.org/s/AKfycbwoidYJFPKbj4tDwyTrUgijbAhSJsGo6ScPtLbO_TwUVmlPyuAgZXLwx-bFjDZGDLmGFQ/exec?action=post&key=" + key + "&value=" + value)
        let data = await response.text()
        return data
    }
}