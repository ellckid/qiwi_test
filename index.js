const RatesController = require('./src/controllers/rates-controller.js')

let rate_date = process.argv[2];
let val_id = process.argv[3];

console.log(RatesController.getOneRate(rate_date, val_id));










