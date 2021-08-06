// const input = document.querySelector('#font-size-control');
// const spanText = document.querySelector('#text')
// spanText.textContent = 'Это МАААаааагия!'

// const changeInputValue = (event) => {
//     console.log(event.currentTarget);
//     spanText.style.fontSize = event.currentTarget.value + 'px'
//     console.log(event.currentTarget.value);
// }

// input.addEventListener('input', changeInputValue)

const input = document.querySelector('input')
console.log(input);
const spanText = document.querySelector('#text')
console.log(spanText);
spanText.textContent = 'ФАК Ю БИЧЬ'

const makeMagic = (event) => {
    spanText.style.fontSize = event.currentTarget.value + 'px'
    console.log(event.currentTarget.value);
}

input.addEventListener('input', makeMagic )