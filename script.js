class Expense {
  constructor() {
    this.enterIncome = document.querySelector("#income-amount");
    this.addIncomeBtn = document.querySelector("#adddd-income");
    this.incomeList = document.querySelector("#income-list");
    this.balance = document.querySelector("#balance");
    this.expenses = document.querySelector("#expenses");
    this.averageIncome = document.querySelector("#avg-income");
    this.addTransactionBtn = document.querySelector("#adddd-transaction");
    this.enterExpense = document.querySelector("#transaction-amount");
    this.enterPurpose = document.querySelector("#transaction-purpose");
    this.expenseList = document.querySelector("#expense-list");
    this.expenseValue;
    this.totalExpense = 0;
    this.averageCounter = 0;
    this.incomeValue;
    this.totalIncome = 0;

    this.addEventListeners();
  }

  addEventListeners() {
    this.addIncomeBtn.addEventListener(
      "click",
      this.addIncomeHandler.bind(this)
    );
    this.addTransactionBtn.addEventListener(
      "click",
      this.transactionHandler.bind(this)
    );
  }
  transactionHandler() {
    this.expenseValue = this.enterExpense.value.trim();
    if (
      this.expenseValue === "" ||
      isNaN(this.expenseValue) ||
      this.expenseValue <= 0
    ) {
      alert("You have to add a valid income amount");
      return;
    }
    if (this.enterPurpose.value === "") {
      alert("You have to add a purpose");
      return;
    }
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense-item");
    expenseItem.textContent = `$${this.expenseValue}`;

    const deleteExpense = document.createElement("button");
    deleteExpense.textContent = "X";
    deleteExpense.classList.add("delete-btn");
    deleteExpense.addEventListener("click", () => {
      const removedExpense = Number(
        expenseItem.textContent.split("X")[0].replace("$", "").trim()
      );
      this.totalExpense -= removedExpense;

      this.expenseList.removeChild(expenseItem);
    });

    expenseItem.appendChild(deleteExpense);
    this.expenseList.appendChild(expenseItem);

    this.enterExpense.value = "";
    this.enterPurpose.value = "";
    this.addExpense();
  }

  addIncomeHandler() {
    this.incomeValue = this.enterIncome.value.trim();

    if (
      this.incomeValue === "" ||
      isNaN(this.incomeValue) ||
      this.incomeValue <= 0
    ) {
      alert("You have to add a valid income amount");
      return;
    }

    const incomeItem = document.createElement("li");
    incomeItem.classList.add("income-item");
    incomeItem.textContent = `$${this.incomeValue}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      const removedValue = Number(
        incomeItem.textContent.split("X")[0].replace("$", "").trim()
      );
      this.totalIncome -= removedValue;
      this.balance.textContent = `$${this.totalIncome}`;

      this.incomeList.removeChild(incomeItem);
    });

    incomeItem.appendChild(deleteBtn);
    this.incomeList.appendChild(incomeItem);

    this.enterIncome.value = "";
    this.addBalance();
    this.addAverage();
  }
  addBalance() {
    this.totalIncome += Number(this.incomeValue);
    this.balance.textContent = `$${this.totalIncome}`;
  }
  addAverage() {
    this.averageCounter += Number(this.incomeValue);
    this.averageIncome.textContent = `$${(
      this.averageCounter / this.incomeList.children.length
    ).toFixed(2)}`;
  }
  addExpense() {
    this.totalExpense += Number(this.expenseValue);
    this.expenses.textContent = `$${this.totalExpense}`;
    this.balance.textContent = `$${this.totalIncome - this.totalExpense}`;
  }
}

const exp = new Expense();
