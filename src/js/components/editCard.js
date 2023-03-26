import { userKey } from "../storage"

const editTodoCard = (titleCard, descripCard, ourCard) => {
    const createForm = document.createElement('div')
    createForm.className = 'createForm'

    const titleForm = document.createElement('input')
    titleForm.type = 'text'
    titleForm.value = titleCard
    titleForm.className = 'createForm_title'

    const descripForm = document.createElement('input')
    descripForm.type = 'text'
    descripForm.value = descripCard
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
        ourCard.childNodes[0].childNodes[0].textContent = titleForm.value
        ourCard.childNodes[1].childNodes[0].textContent = descripForm.value
        ourCard.childNodes[2].childNodes[0].textContent = selectForm.value
        document.querySelector('.createForm').remove()
    })
    footerWrapper.append(selectForm, cancelBtn, confirmBtn)

    createForm.append(titleForm, descripForm, footerWrapper)
    return createForm
}

export {
    editTodoCard
}