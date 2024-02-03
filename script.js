import { Modal } from './modal.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const errorAlert = document.querySelector('.alert-error')

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
    
    Modal.message.innerHTML = `Your BMI result: ${Math.floor(bmiResult)}`

    Modal.show()
}