function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const amountText = inputField.value;
    const amountValue = parseFloat(amountText);

    // clear input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, inputAmount) {
    const total = document.getElementById(totalFieldId);
    const shownTotalText = total.innerText;
    const shownTotal = parseFloat(shownTotalText);
    total.innerText = shownTotal + inputAmount;
}
function shownBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const shownBalanceTotalText = balanceTotal.innerText;
    const shownBalanceTotal = parseFloat(shownBalanceTotalText);
    return shownBalanceTotal;
}
function updateBalance(inputAmount, condition) {
    const balanceTotal = document.getElementById('balance-total');
    const shownBalanceTotal = shownBalance();
    if (condition == true) {
        balanceTotal.innerText = shownBalanceTotal + inputAmount;
    }
    else {
        balanceTotal.innerText = shownBalanceTotal - inputAmount;
    }
}

// Deposit event
document.getElementById('deposit-button').addEventListener('click',
    function () {
        const depositAmount = getInput('deposit-input');
        if (depositAmount > 0) {
            // Get deposit updated
            updateTotalField('deposit-total', depositAmount);
            // Get balance updated
            updateBalance(depositAmount, true);
        }
        else {
            alert('No funky business here');
        }
    })

// Withdraw event
document.getElementById('withdraw-button').addEventListener('click',
    function () {
        const withdrawAmount = getInput('withdraw-input');
        const shownBalanceTotal = shownBalance();
        if (withdrawAmount > 0 && withdrawAmount <= shownBalanceTotal) {
            // Get withdraw updated
            updateTotalField('withdraw-total', withdrawAmount);
            // Get balalnce updated
            updateBalance(withdrawAmount, false);
        }
        else {
            alert("Insufficient balance");
        }
    })