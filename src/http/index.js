const axios = require("axios");
const API_URL = 'https://www.cbr.ru/scripts/XML_dynamic.asp?'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

module.exports = API_URL, $api
