const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const errorAlert = document.querySelector('.alert-error')
const resultModal = document.querySelector('.modal-wrapper')
const modalTitle = document.querySelector('.modal-title')
const closeModal = document.querySelector('.close')

form.onsubmit = (event) => {
    event.preventDefault()
    let height = inputHeight.value
    let weight = inputWeight.value

    if(!Number.isInteger(Number(height)) || !Number.isInteger(Number(weight)))  {
        errorAlert.classList.remove('hide')
        return
    }

    !errorAlert.classList.contains('hide') && errorAlert.classList.toggle('hide')

    let bmiResult = ((Number(weight) / Number(height)) / Number(height)) * 10000
    modalTitle.innerHTML = `Your BMI result: ${Math.floor(bmiResult)}`

    resultModal.classList.remove('hide')
}

closeModal.addEventListener("click", () => {
    resultModal.classList.add('hide')
})