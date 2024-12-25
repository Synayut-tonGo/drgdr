const btnEl = document.getElementById("calculate");
const salaryInput = document.getElementById("salary");
const commissionInput = document.getElementById("commission");
const totalSpan = document.getElementById("total");
var USDDollar = new Intl.NumberFormat("en-US",{
    style:"currency",
    currency:"USD"
})
function calculateTotal (){
    const salary = salaryInput.value;
    const commission = commissionInput.value;
    const totalValue = salary*(1+commission/100);
    totalSpan.innerText = USDDollar.format(totalValue);
}
btnEl.addEventListener("click", calculateTotal);