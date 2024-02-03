import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = (event) => {
    event.preventDefault()
    
    let height = inputHeight.value
    let weight = inputWeight.value

    if(notANumber(height) || notANumber(weight))  {
        AlertError.show()
        return
    }

    AlertError.hide()

    let bmiResult = ((Number(weight) / Number(height)) / Number(height)) * 10000
    
    Modal.message.innerHTML = `Your BMI result: ${Math.floor(bmiResult)}`

    Modal.show()
}

function notANumber(value) {
    return isNaN(value) || value == ''
}