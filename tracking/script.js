const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount'); 
 
// const dummyTranscations = [
//     {id:1, text:'Flower', amount: -20 },
//     {id:2, text:'Salary', amount: 300},
//     {id:3, text:'Book', amount:-10},
//     {id:4, text:'Camera', amount: 150},
// ];

const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"))
let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions:[];
//Add Transaction
function addTransaction(e){
    e.preventDefault();
    if(text.value.trim() === "" || amount.value.trim() === "")
    {
        alert("Please Enter Text And Value");
    }
    else{
        const transaction = {
            id: generateId(),
            text:text.value,
            amount: +amount.value,
        };

        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateLocalStorage();
        updateValues();
        text.value = '';
        amount.value = '';
    }
}

//Generate Id
function generateId(){
return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction){
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    item.classList.add(
        transaction.amount < 0 ? 'minus' : 'plus'
    );

    item.innerHTML = `${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>`;

    list.appendChild(item);
}

//removeTransaction
function removeTransaction(id){
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    Init();
}

//Update updateValues
function updateValues(){
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0) * -1).toFixed(2);

    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
}

//Update Local Storage 
function updateLocalStorage(){
    localStorage.setItem("transactions",JSON.stringify(transactions));
}
//Init App
function Init(){
    list.innerHTML="";
    transactions.forEach(addTransactionDOM);
    updateValues();
}
addTransactionDOM(transactions);
Init();

form.addEventListener('submit', addTransaction)