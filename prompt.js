// Using a Prompt allow user to enter numbers separated by commas the printout the 
// sum of the numbers

const num = document.querySelector('#num')
const numbers = document.querySelector('#number')
const submit = document.querySelector('#submit')

let sum;

numbers.addEventListener('input', ()=>{
    if(!numbers.value.innerHTML=== "numbers,number" ){
        prompt("Please seperate numbers with a comma")
    } else {
        sum = numbers+numbers
    }
})

