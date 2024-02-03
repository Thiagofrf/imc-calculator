import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const formInputs = [inputHeight, inputWeight]

form.onsubmit = (event) => {
    event.preventDefault()

    const height = inputHeight.value
    const weight = inputWeight.value

    if(notANumber(height) || notANumber(weight))  {
        AlertError.show()
        return
    }

    AlertError.hide()

    const bmiResult = ((Number(weight) / Number(height)) / Number(height)) * 10000
    
    Modal.message.innerHTML = `Your BMI result: ${Math.floor(bmiResult)}`

    Modal.show()
}


formInputs.forEach((item) => {
    item.addEventListener('input', () => {
        AlertError.hide()
    })
})
