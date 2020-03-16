const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const clearBtn = document.querySelector('#btn-clear');
const addbtn = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

var totalExpenses = 0;

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
}

addbtn.addEventListener('click', ()=>{
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }

  const newItem = document.createElement('ion-item');
  newItem.textContent =  enteredReason + ': $' + enteredAmount;

  expensesList.appendChild(newItem);

  //the '+' in front of enteredAmount serves to convert the string into a number
  totalExpenses += +enteredAmount;

  totalExpensesOutput.textContent = totalExpenses;

  clear();

})

// notice that the clear method reference has to be without '()'
clearBtn.addEventListener('click', clear)