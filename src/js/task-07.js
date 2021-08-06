const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text')
spanText.textContent = 'Это МАААаааагия!'

const changeInputValue = (event) => {
    console.log(event.currentTarget);
    spanText.style.fontSize = event.currentTarget.value + 'px'
    console.log(event.currentTarget.value);
}

input.addEventListener('input', changeInputValue)