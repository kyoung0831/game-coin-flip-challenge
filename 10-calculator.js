let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
console.log(`Loaded from localStorage: ${calculation}`);
document.querySelector('.js-update-calculation').innerHTML = calculation;

function updateCalculation() {
  console.log(`${calculation}`); 

  document.querySelector('.js-update-calculation') 
    .innerHTML = calculation;

  localStorage.setItem('calculation', JSON.stringify(calculation));
}
      
