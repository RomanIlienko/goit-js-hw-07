
const valueEl = document.querySelector('#value')
console.log(valueEl);
const buttonDecrement = document.querySelector('[data-action="decrement"]')
console.log(buttonDecrement);
const buttonIncrement = document.querySelector('[data-action="increment"]')
console.log(buttonIncrement);
let counterValue = 0

const makeDecrement = () => {
    valueEl.textContent = counterValue
    counterValue -= 1
}

const makeIncrement = () => {
    valueEl.textContent = counterValue
    counterValue += 1
}

buttonDecrement.addEventListener('click', makeDecrement)
buttonIncrement.addEventListener('click', makeIncrement )
