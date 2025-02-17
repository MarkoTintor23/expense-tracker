class Expense {
  constructor() {
    this.enterIncome = document.querySelector("#income-amount");
    this.addIncomeBtn = document.querySelector("#adddd-income");
    this.incomeList = document.querySelector("#income-list");
    this.balance = document.querySelector("#balance");
    this.expenses = document.querySelector("#expenses");
    this.currentExpenses;
    this.expenseValue;

    this.addEventListeners();
  }

  addEventListeners() {
    this.addIncomeBtn.addEventListener(
      "click",
      this.addIncomeHandler.bind(this)
    );
  }

  addIncomeHandler() {
    this.expenseValue = this.enterIncome.value.trim();

    if (
      this.expenseValue === "" ||
      isNaN(this.expenseValue) ||
      this.expenseValue <= 0
    ) {
      alert("You have to add a valid income amount");
      return;
    }

    console.log("Adding income:", this.expenseValue);

    // Kreiramo novi li element za listu
    const incomeItem = document.createElement("li");
    incomeItem.classList.add("income-item");
    incomeItem.textContent = `$${this.expenseValue}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      this.incomeList.removeChild(incomeItem);
    });

    incomeItem.appendChild(deleteBtn);
    this.incomeList.appendChild(incomeItem);

    this.enterIncome.value = "";
    this.addBalance();
  }
  addBalance() {
    this.currentExpenses = +this.expenseValue;
    this.balance.textContent = `${this.currentExpenses}`;
  }
}

const exp = new Expense();
