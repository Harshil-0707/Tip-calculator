const resetBtn = document.getElementById('resetBtn');
const tip = document.querySelectorAll('.percent');
const billInput = document.getElementById('bill-amount');
const peopleCount = document.getElementById('people-count');
const custom = document.getElementById('custom');
const tip_total = document.getElementById('tip-total');
const total = document.getElementById('total-result');
const personError = document.getElementById('personError');


tip.forEach((button) => {
    button.addEventListener('click', calculateTip);
});

function calculateTip(){
    resetBtn.classList.add("reset-btn-clr");
    one();
    tip.forEach((button) => {
        button.classList.remove('btn-clr');
        custom.value = "";
    });
    this.classList.add('btn-clr');
}

resetBtn.addEventListener('click', () => {
    resetBtn.classList.remove("reset-btn-clr");
    tip.forEach((button) => {
        button.classList.remove('btn-clr');
    });
    custom.value = "";
    billInput.value = "";
    peopleCount.value= "";
    total.innerHTML = "0.00";
    personError.innerHTML="";
    tip_total.innerHTML = "0.00";
});

function one(){
    if(personError.value == 0){
        personError.innerHTML = "Can't be zero";
    }else if(personError.value == ""){
        personError.innerHTML = "Can't be empty";
    }else if(personError.value <= 0){
        personError.innerHTML = "Can't be lest than zero";
    }else{
        personError.innerHTML = "";
    }
}