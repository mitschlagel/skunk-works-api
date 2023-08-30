class XpAccountsAccount {
    constructor(name ="Checking", balance ="$123.45", lastFour = "0123", paymentInformation = "", actions = []) {
        this.name = name;
        this.balance = balance;
        this.lastFour = lastFour;
        this.paymentInformation = paymentInformation;
        this.actions = actions;
    }
}

const express = require('express');
const app = express();
const port = 3000;

const dataArray = [
  new XpAccountsAccount(),
  new XpAccountsAccount(),
  new XpAccountsAccount()
];

app.get('/accounts', (req, res) => {
  res.json(dataArray);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});