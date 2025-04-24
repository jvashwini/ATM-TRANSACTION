function atm() {
    this.balance = 4000;
    this.get_balance = function () {
        return this.balance;
    },
    this.deposit = function (amount = 500) {
        console.log("The main balance is:", this.balance);
        this.balance = this.balance + amount;
        console.log("Deposit:", this.balance);
        return `Deposit successful! New balance: ₹${this.balance}`;
    },
    this.withdraw = function (amount = 500) {
        if (this.balance > amount) {
            console.log("The main balance is:", this.balance);
            this.balance = this.balance - amount;
            console.log("Withdraw:", this.balance);
            return `Withdrawal successful! New balance: ₹${this.balance}`;
        } else {
            return "Insufficient balance!";
        }
    };
}

let a1 = new atm();
let withdrawBtn = document.getElementById("withdrawBtn");
let depositBtn = document.getElementById("depositBtn");
let balanceBtn = document.getElementById("balanceBtn");
let result = document.getElementById("result");

withdrawBtn.addEventListener("click", function () {
    result.innerHTML = a1.withdraw(500);
});


depositBtn.addEventListener("click", function () {
    result.innerHTML = a1.deposit(500);
});

balanceBtn.addEventListener("mouseenter", function () {
    result.innerHTML = `Current balance: ₹${a1.get_balance()}`;
});
