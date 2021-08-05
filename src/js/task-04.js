
const valueEl = document.querySelector('#value')
console.log(valueEl);
const buttonDecrement = document.querySelector('[data-action="decrement"]')
console.log(buttonDecrement);
const buttonIncrement = document.querySelector('[data-action="increment"]')
console.log(buttonIncrement);
let counterValue = 0

const handleClickOnDecrement = () => {
    valueEl.textContent = counterValue
    counterValue -= 1
    if (valueEl.textContent <= 0) {
        return alert('Это минимальное количество')
     }
}

const handleClickOnIncrement = () => {
    valueEl.textContent = counterValue
    counterValue += 1
}

buttonDecrement.addEventListener('click', handleClickOnDecrement)
buttonIncrement.addEventListener('click', handleClickOnIncrement )
