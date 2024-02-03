export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal-title'),
    buttonClose: document.querySelector('.close'),
    show() {
        Modal.wrapper.classList.remove('hide')
    },
    hide() {
        Modal.wrapper.classList.add('hide')
    },
}

Modal.buttonClose.onclick = () => {
    Modal.hide()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if(event.key === 'Escape') {
        Modal.hide()
    }
}
