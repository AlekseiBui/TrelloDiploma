const removeWarning = () => {
    const removeWarningForm = document.createElement('div')
    removeWarningForm.className = 'removeWarningForm'

    const removeWarningText = document.createElement('div')
    removeWarningText.className = 'warningForm_text'
    removeWarningText.textContent = 'Вы точно хотите удалить выполненные задачи?'

    const removeWarningCancelYes = document.createElement('button')
    removeWarningCancelYes.className = 'warningForm_btnYes'
    removeWarningCancelYes.textContent = 'Да'
    removeWarningCancelYes.addEventListener('click', () => {
        document.querySelector('.DONE>.progressTab_progressCardsWrapper').innerHTML = ''
        document.querySelector('.removeWarningForm').remove()
    })

    const removeWarningCancelNo = document.createElement('button')
    removeWarningCancelNo.className = 'warningForm_btnNo'
    removeWarningCancelNo.textContent = 'Нет'
    removeWarningCancelNo.addEventListener('click', () => {
        document.querySelector('.removeWarningForm').remove()
    })

    removeWarningForm.append(removeWarningText, removeWarningCancelYes, removeWarningCancelNo)

    return removeWarningForm
}

export {
    removeWarning
}