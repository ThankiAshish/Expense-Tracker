const body = document.querySelector("body");
const menu = document.querySelector("#menu");
const input = document.querySelector("#input-value");
const description = document.querySelector("#description-value");
const submitBtn = document.querySelector("#submit-btn");
const totalView = document.querySelector(".total")
const incomeColumn = document.querySelector("#income-column");
const expenseColumn = document.querySelector("#expense-column");

let incomeEntryDisplays = document.querySelectorAll(".income-entry-display");
let incomeDisplayUls = document.querySelectorAll(".income-display-ul");
let incomeValueViews = document.querySelectorAll(".income-value-view");
let incomeOptionViews = document.querySelectorAll(".income-option-view");
let incomeDescriptionViews = document.querySelectorAll(".income-description-view");

let expenseEntryDisplays = document.querySelectorAll(".expense-entry-display");
let expenseDisplayUls = document.querySelectorAll(".expense-display-ul");
let expenseValueViews = document.querySelectorAll(".expense-value-view");
let expenseOptionViews = document.querySelectorAll(".expense-option-view");
let expenseDescriptionViews = document.querySelectorAll(".expense-description-view");


let tracker = [];
let i = 0;
let incUl = 0;
let expUl = 0;

function newEntry(type) {
  let newDiv = document.createElement("div");
  let newUl = document.createElement("ul");
  let newLi1 = document.createElement("li");
  let newLi2 = document.createElement("li");
  let newLi3 = document.createElement("li");

  if(type === "Income") {
    incomeColumn.append(newDiv);
    newDiv.classList.add("income-entry-display");
    incomeEntryDisplays = document.querySelectorAll(".income-entry-display");
    incomeEntryDisplays[incUl].append(newUl);
    newUl.classList.add("income-display-ul");
    incomeDisplayUls = document.querySelectorAll(".income-display-ul");
    incomeDisplayUls[incUl].append(newLi1, newLi2, newLi3);
    newLi1.classList.add("income-value-view");
    newLi2.classList.add("income-option-view");
    newLi3.classList.add("income-description-view");
    incomeValueViews = document.querySelectorAll(".income-value-view");
    incomeOptionViews = document.querySelectorAll(".income-option-view");
    incomeDescriptionViews = document.querySelectorAll(".income-description-view");
  }else {
    expenseColumn.append(newDiv);
    newDiv.classList.add("expense-entry-display");
    expenseEntryDisplays = document.querySelectorAll(".expense-entry-display");
    expenseEntryDisplays[expUl].append(newUl);
    newUl.classList.add("expense-display-ul");
    expenseDisplayUls = document.querySelectorAll(".expense-display-ul");
    expenseDisplayUls[expUl].append(newLi1, newLi2, newLi3);
    newLi1.classList.add("expense-value-view");
    newLi2.classList.add("expense-option-view");
    newLi3.classList.add("expense-description-view");
    expenseValueViews = document.querySelectorAll(".expense-value-view");
    expenseOptionViews = document.querySelectorAll(".expense-option-view");
    expenseDescriptionViews = document.querySelectorAll(".expense-description-view");
  }
}

function getInput() {
  if(input.value > 0) {
    tracker.push(
      {
        value: input.value,
        description: description.value,
        option: menu.value
      }
    );
    if(tracker[i].option === "Income") {
      newEntry("Income");
      incomeDisplayUls[incUl].classList.add("show");
      incomeValueViews[incUl].textContent = `$${tracker[i].value}`;
      incomeOptionViews[incUl].textContent = tracker[i].option;
      incomeDescriptionViews[incUl].textContent = tracker[i].description;
      incUl++;
    }else {
      newEntry("Expense");
      expenseDisplayUls[expUl].classList.add("show");
      expenseValueViews[expUl].textContent = `-$${tracker[i].value}`;
      expenseOptionViews[expUl].textContent = tracker[i].option;
      expenseDescriptionViews[expUl].textContent = tracker[i].description;
      expUl++;
    }
    i++;
  }
  else {
    alert("Please Enter Value Greater than 0");
  }
  calculateTotal();
}

function totalIncome() {
  let totalIncome = 0;
  for(let i = 0; i < tracker.length; i++) {
    if(tracker[i].option === "Income") {
      totalIncome += parseInt(tracker[i].value);
    }
  }
  return totalIncome;
}

function totalExpense() {
  let totalExpense = 0;
  for(let i = 0; i < tracker.length; i++) {
    if(tracker[i].option === "Expense") {
      totalExpense += parseInt(tracker[i].value);
    }
  }
  return totalExpense;
}

function calculateTotal() {
  let totalSavings = 0; 
  if(totalExpense() === 0) {
    totalSavings = totalIncome();
  }else {
    totalSavings = totalIncome() - totalExpense();
  }
  totalView.textContent = `$${totalSavings}`;
}

submitBtn.addEventListener("click", getInput);