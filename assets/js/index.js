const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');

let activeStep = 1;
const maxStep = 4;
const minStep = 1

nextEl.addEventListener('click', onNextClick);
previousEl.addEventListener('click', onPreviousClick);

checkButtonState();


function onNextClick() {
  activeStep = activeStep + 1;
  document.querySelector(`[data-step="${activeStep}"]`).classList.add('active');
  checkButtonState();
}

function onPreviousClick() {
  document.querySelector(`[data-step="${activeStep}"]`).classList.remove('active');
  activeStep = activeStep - 1;
  checkButtonState();
}

function checkButtonState() {
  
  nextEl.disabled = false;
  previousEl.disabled = false;

  if(activeStep === maxStep) {
    nextEl.disabled = true;
  }

  if(activeStep === minStep) {
    previousEl.disabled = true;
  }
}

