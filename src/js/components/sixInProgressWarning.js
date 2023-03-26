const sixWarning = () => {
    const warningForm = document.createElement('div')
    warningForm.className = 'warningForm'

    const warningText = document.createElement('div')
    warningText.className = 'warningForm_text'
    warningText.textContent = 'Сначала завершите одно из заданий!'

    const warningCancel = document.createElement('button')
    warningCancel.className = 'warningForm_btn'
    warningCancel.textContent = 'Ок'
    warningCancel.addEventListener('click', () => {
        document.querySelector('.warningForm').remove()
    })

    warningForm.append(warningText, warningCancel)

    return warningForm
}

export {
    sixWarning
}