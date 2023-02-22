/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  } else {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (!Number.isInteger(amount)) {
    return false;
  } if (amount <= 0) {
    return false;
  } else {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
};

Account.prototype.getBalance = function () {
  let tran = 0;
  if (this.transactions.length === 0) {
    return tran;
  } else {
    for (let transac = 0; transac < this.transactions.length; transac++) {
      if (this.transactions[transac].type === 'deposit') {
        tran += this.transactions[transac].amount;
      } if (this.transactions[transac].type === 'withdrawal') {
        tran -= this.transactions[transac].amount;
      }
    }
    return tran;
  }
};
