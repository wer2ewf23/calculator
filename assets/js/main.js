const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const multiBtn = document.querySelector('.multi')
const divisionBtn = document.querySelector('.division')
const submitBtn = document.querySelector('.submitBtn')
const resultEl = document.querySelector('.result')

let action = '+'



plusBtn.onclick = function (){
    action = '+'
} 
minusBtn.onclick = function (){
    action = '-'
}
multiBtn.onclick = function (){
    action = '*'
}
divisionBtn.onclick = function (){
    action = '/'
}



submitBtn.onclick = function () {
    if(action === '+'){
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        resultEl.textContent = sum
    }else if (action === '-'){
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        resultEl.textContent = sum
    }else if (action === '*'){
        const sum = Number(inputOne.value) * Number(inputTwo.value)
        resultEl.textContent = sum
    }else if (action === '/'){
        const sum = Number(inputOne.value) / Number(inputTwo.value)
        resultEl.textContent = sum
    }
}