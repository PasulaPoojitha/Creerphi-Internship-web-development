// Get HTML elements
const balanceAmount = document.getElementById('balance-amount');
const depositAmount = document.getElementById('deposit-amount');
const depositBtn = document.getElementById('deposit-btn');
const withdrawalAmount = document.getElementById('withdrawal-amount');
const withdrawalBtn = document.getElementById('withdrawal-btn');

// Initial balance
let balance = 1000;

// Update balance display
function updateBalance() {
    balanceAmount.textContent = `$${balance}`;
}

// Deposit money
depositBtn.addEventListener('click', () => {
    const depositValue = parseInt(depositAmount.value);
    if (depositValue > 0) {
        balance += depositValue;
        updateBalance();
        depositAmount.value = '';
    }
});

// Withdraw money
withdrawalBtn.addEventListener('click', () => {
    const withdrawalValue = parseInt(withdrawalAmount.value);
    if (withdrawalValue > 0 && withdrawalValue <= balance) {
        balance -= withdrawalValue;
        updateBalance();
        withdrawalAmount.value = '';
    } else {
        alert('Sorry , you does not have enough funds!!');
    }
});

// Initialize balance display
updateBalance();