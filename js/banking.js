// Handle deposit button event

// update deposit total
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmaount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmaount) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;

    // Update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;

    // Clear the deposit input field
    depositInput.value = '';
})

// Handle withdraw button event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    // Set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(withdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;

    // Update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(withdrawAmount);
    balanceTotal.innerText = newBalanceTotal;

    // Clear the withdraw input field
    withdrawInput.value = '';
})