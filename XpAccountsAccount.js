export default class XpAccountsAccount {
    constructor(name ="Checking", balance ="$123.45", lastFour = "0123", paymentInformation = "", actions = []) {
        this.name = name;
        this.balance = balance;
        this.lastFour = lastFour;
        this.paymentInformation = paymentInformation;
        this.actions = actions;
    }
}