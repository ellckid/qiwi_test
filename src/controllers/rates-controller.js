const axios = require("axios");
const { API_URL } = require("../http/index.js")
// const ApiError = require('../exceptions/api-error.js')

class RatesController {
    async getOneRate(date_req, VAL_NM_RQ) {
        try {
            const response = await axios({
                method: "get",
                url: `${API_URL}date_req1=${date_req}&date_req2=${date_req}&VAL_NM_RQ=${VAL_NM_RQ}`
            })
            console.log(response.data.json);
            return (response.data.json)
        } catch (e) {
            console.log(e.response?.data);
        }
    }
}

module.exports = new RatesController()