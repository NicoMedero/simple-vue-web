export default {
    data() {
        return {
            cryptoItems: []
        }
    },
    mounted: function() {
        this.getXlmMarket()
        this.getEthMarket()
        this.getBtcMarket()
    },
    methods: {
        getXlmMarket: function() {
            fetch('https://api.cryptomkt.com/v1/ticker?market=XLMARS', {
                method: 'get'
            })
            .then((response) => {
                return response.json()
            })
            .then((jsonResponse) => {
                this.cryptoItems.push(jsonResponse.data[0])
            })
        },
        getEthMarket: function() {
            fetch('https://api.cryptomkt.com/v1/ticker?market=ETHARS', {
                method: 'get'
            })
            .then((response) => {
                return response.json()
            })
            .then((jsonResponse) => {
                this.cryptoItems.push(jsonResponse.data[0])
            })
        },
        getBtcMarket: function() {
            fetch('https://api.cryptomkt.com/v1/ticker?market=BTCARS', {
                method: 'get'
            })
            .then((response) => {
                return response.json()
            })
            .then((jsonResponse) => {
                this.cryptoItems.push(jsonResponse.data[0])
            })
        }
    }
}