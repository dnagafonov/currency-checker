const { default: Axios } = require("axios");

export const proxyAPI = Axios.create({ baseURL: "https://us-central1-currency-checker-server.cloudfunctions.net/app"});