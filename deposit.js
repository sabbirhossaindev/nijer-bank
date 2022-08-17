// step-1.....add event listener to the deposit button..
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2...get deposit amount from the deposit input field..
    const depositField = document.getElementById('deposit-field');
    // step-2.5... convert string deposit amount to a number type..
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3....clear the deposit input field after getting the value..
    depositField.value = ''; // input field ta faka korer jonno..

    // step-4... get the deposit previous deposit total..
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-5...calculate the new deposit total and set the value to the deposit total..
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step-6...get current balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    // step-7...calculate the new balance and set it to the balance total element..
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
});