const input = document.querySelector('#name-input')
const outputSpan = document.querySelector('#name-output')

const changeOnInput = (event) => {
    outputSpan.textContent = event.currentTarget.value.trim() === ""
        ? "незнакомец"
        : event.currentTarget.value;
}

input.addEventListener('input', changeOnInput)

