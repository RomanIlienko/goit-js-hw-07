const input = document.querySelector('#validation-input')
const inputLength = input.getAttribute('data-length')
const inputNumLength = Number(inputLength)

const blurOnInput = () => {
    if (input.value.length === inputNumLength) {
        input.classList.remove('invalid')
        input.classList.add('valid')

        return
    }
        input.classList.remove('valid')
        input.classList.add('invalid')

}

input.addEventListener('blur', blurOnInput)