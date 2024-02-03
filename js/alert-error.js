export const AlertError = { 
    element: document.querySelector('.alert-error'),
    show() {
        AlertError.element.classList.remove('hide')
    },
    hide() {
        AlertError.element.classList.add('hide')
    }
}
