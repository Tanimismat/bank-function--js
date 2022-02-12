/* function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
 */


function getInputValue() {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    // clean input field
    depositeInput.value = '';
    return depositeAmount;

}



document.getElementById('deposite-button').addEventListener('click', function () {
    /* const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText); */
    const depositeAmount = getInputValue();

    // get current deposite
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);

    depositeTotal.innerText = previousDepositeTotal + depositeAmount;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositeAmount;



});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalText)

    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;

    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // clear withdrau input field
    withdrawInput.value = '';
});