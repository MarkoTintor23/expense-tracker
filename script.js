class Expense {
  constructor() {
    this.enterIncome = document.querySelector("#income-amount");
    this.addIncomeBtn = document.querySelector("#adddd-income");
    this.incomeList = document.querySelector("#income-list");
    this.balance = document.querySelector("#balance");
    this.expenses = document.querySelector("#expenses");
    this.averageIncome = document.querySelector("#avg-income");
    this.currentExpenses;
    this.averageCounter = 0;
    this.expenseValue;
    this.totalIncome = 0;

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
    this.totalIncome += Number(this.expenseValue);
    this.balance.textContent = `$${this.totalIncome}`;
  }
  addAverage() {
    this.averageCounter += Number(this.expenseValue);
    this.averageIncome.textContent = `$${(
      this.averageCounter / this.incomeList.children.length
    ).toFixed(2)}`;
  }
}

const exp = new Expense();
