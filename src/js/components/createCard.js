import { userKey } from "../storage"
import { createProgressCard } from "./progressCard"

const createTodoCard = () => {
    const createForm = document.createElement('div')
    createForm.className = 'createForm'

    const titleForm = document.createElement('input')
    titleForm.type = 'text'
    titleForm.placeholder = 'Title'
    titleForm.className = 'createForm_title'

    const descripForm = document.createElement('input')
    descripForm.type = 'text'
    descripForm.placeholder = 'Description'
    descripForm.className = 'createForm_descrip'

    const footerWrapper = document.createElement('div')
    footerWrapper.className = 'createForm_footer'

    const selectForm = document.createElement('select')
    selectForm.className = 'footer_select'
    const allUsers = JSON.parse(localStorage.getItem(userKey))
    allUsers.forEach(user => {
        let selectOption = document.createElement('option')
        selectOption.textContent = user.name
        selectForm.append(selectOption)
    })

    const cancelBtn = document.createElement('button')
    cancelBtn.className = 'progressTab_cancelBtn'
    cancelBtn.textContent = 'Cancel'
    cancelBtn.addEventListener('click', () => {
        document.querySelector('.createForm').remove()
    })

    const confirmBtn = document.createElement('button')
    confirmBtn.className = 'progressTab_confirmBtn'
    confirmBtn.textContent = 'Confirm'
    confirmBtn.addEventListener('click', () => {
        const titleText = document.querySelector('input.createForm_title').value || 'Title'
        const descripText = document.querySelector('input.createForm_descrip').value || 'Description'
        const userText = document.querySelector('select.footer_select').value
        document.querySelector('.progressTab_progressCardsWrapper').append(createProgressCard(titleText, descripText, userText))
        document.querySelector('.createForm').remove()
    })
    footerWrapper.append(selectForm, cancelBtn, confirmBtn)

    createForm.append(titleForm, descripForm, footerWrapper)
    return createForm
}

export {
    createTodoCard
}