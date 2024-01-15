const resetBtn = document.getElementById('resetBtn');
const tip = document.querySelectorAll('.percent');
const billInput = document.getElementById('bill-amount');
const peopleCount = document.getElementById('people-count');
const custom = document.getElementById('custom');
const tip_total = document.getElementById('tip-total');
const total = document.getElementById('total-result');
const personError = document.getElementById('personError')
const userInput = document.querySelectorAll('.userInput');


tip.forEach((button) => {
    button.addEventListener('click', calculateTip);
});

function calculateTip(){
    error();
    resetBtn.classList.add("reset-btn-clr");
    tip.forEach((button) => {
        button.classList.remove('btn-clr');
    });
    this.classList.add('btn-clr');
}

function calculate(){

}

userInput.forEach((Input) =>{
    Input.addEventListener('click',userinp);
});

function userinp(){
    userInput.forEach((inp)=>{
        inp.style.border ="none";
    });
    this.style.border = "2px solid hsl(172, 68%, 51%)";
}

resetBtn.addEventListener('click', () => {
    resetBtn.classList.remove("reset-btn-clr");
    tip.forEach(button => {
        button.classList.remove('btn-clr');
    });
    userInput.forEach((inp)=>{
        inp.style.border ="none";
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
    }else if(peopleCount.value <= 0){
        borderError();
        personError.innerHTML = "Can't be less than zero";
    }else{
        personError.innerHTML = "";
    }
}