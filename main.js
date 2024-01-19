const resetBtn = document.getElementById('resetBtn');
const tip = document.querySelectorAll('.percent');
const billInput = document.getElementById('bill-amount');
const peopleCount = document.getElementById('people-count');
const custom = document.getElementById('custom');
const tip_total = document.getElementById('tip-total');
const total = document.getElementById('total-result');
const personError = document.getElementById('personError')
const userInput = document.querySelectorAll('.userInput');
let billInputTrue = 0;
let percentage = 0;
let billAmount = 0;
let peopleAmount = 0;
let customValue = 0;
let customValueTrue = 0;


billInput.onclick = () => {
    billInputTrue = 1;
    billInput.style.caretColor = "hsl(172, 67%, 45%)";
    billInput.style.border = "2px solid hsl(172, 67%, 45%)"
}

tip.forEach((button) => {
    button.addEventListener('click', (e) => {
        resetBtn.classList.add("reset-btn-clr");
        tip.forEach((button) => {
            custom.value = "";
            custom.style.border = "none";
            button.classList.remove('btn-clr');
        });
        if(e.target.id == "custom"){
            customValueTrue = true;
            customValue = e.currentTarget;
            e.currentTarget.style.caretColor = "hsl(172, 67%, 45%)";
            e.currentTarget.style.border = "2px solid hsl(172, 67%, 45%)"
        }else{
            customValueTrue = false;
            percentage = e.currentTarget.value;
            percentage = percentage.toString();
            percentage = percentage.slice(0,percentage.length-1);
            e.target.classList.add('btn-clr');
        }
        if(billInputTrue){
            billInput.style.border = "none";
        }
        error();
    });
});

peopleCount.oninput = () => {
    personError.style.display = "block";
    if(peopleCount.value == 0 ){
        borderError();
        personError.innerText = "Can't be zero"
    }else if(peopleCount.value < 0){
        borderError();
        personError.innerText = "Can't be less than zero";
    }else{
        personError.innerText = "";
        peopleCount.style.border ="none"
    }
    calculate();
}

function calculate(){
    let tipAmountValue;
    let totalValue;
    billAmount = +billInput.value;
    peopleAmount = +peopleCount.value;
    (customValueTrue) ?  tipAmountValue = billAmount  * (+customValue.value / 100)
                      :  tipAmountValue = billAmount  * (+percentage / 100); 

    totalValue =  billAmount + tipAmountValue;
    if (billAmount >= 1 && peopleAmount >= 1) {
      tipAmount = (tipAmountValue / peopleAmount).toFixed(2);
      totalAmount = (totalValue / peopleAmount).toFixed(2);
    } else {
      tipAmount = "0.00";
      totalAmount = "0.00";
    }
    tip_total.innerText = tipAmount;
    total.innerText = totalAmount;
}

resetBtn.addEventListener('click', () => {
    resetBtn.classList.remove("reset-btn-clr");
    tip.forEach(button => {
        button.classList.remove('btn-clr');
    });
    userInput.forEach((inp)=>{
        inp.style.border = "none";
    });
    custom.value = "";
    billInput.value = "";
    peopleCount.value= "";
    total.innerHTML = "0.00";
    personError.innerHTML="";
    tip_total.innerHTML = "0.00";
    peopleCount.style.border = 'none';
});

const borderError = () => peopleCount.style.border ="2px solid red";

function error(){
    personError.style.display = "block";
    if(peopleCount.value == 0 ){
        borderError();
        personError.innerText = "Can't be zero"
    }else if(peopleCount.value < 0){
        borderError();
        personError.innerText = "Can't be less than zero";
    }else{
        personError.innerText = "";
        peopleCount.style.border ="none"
    }
}