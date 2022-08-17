// step-1..add event listener to the withdraw button..
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2...get withdraw amount from the deposit input field..
    const withdrawField = document.getElementById('withdraw-field');
    //step-2.5...convert string deposit amount to a number type..
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step-3...clear the deposit input field after getting the value..
    withdrawField.value = '';

    // step-4...get the withdraw previous total..
    const withdrawTotalElement = document.getElementById('withdraw-total');
    //step-4.5...convert string deposit amount to a number type..
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousWithdrawTotalString);

    // step-5... calculate the new withdraw amount and set the to the withdraw total element..
    const newWithdrawTotal = previousDepositTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-6...get previous balance
    const balanceElement = document.getElementById('balance-total');
    //step-6.5...convert string deposit amount to a number type..
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-7....calculate the new balance total and set it to the balance total element..
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;

})