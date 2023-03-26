import { editTodoCard } from "./editCard"

const createProgressCard = (titleText, descripText, userText) => {
    const progressCard = document.createElement('div')
    progressCard.className = 'progressCard'

    const header = document.createElement('div')
    header.className = 'progressCard_header'

    const title = document.createElement('div')
    title.className = 'progressCard_title'
    title.textContent = titleText

    const editBtn = document.createElement('button')
    editBtn.className = 'progressCard_editBtn'
    editBtn.textContent = 'EDIT'
    editBtn.addEventListener('click', (e) => {
        if (!document.querySelector('.createForm')) {
            const ourCard = e.target.closest('.progressCard')
            const titleCard = title.textContent
            const descripCard = descripForm.textContent
            document.body.append(editTodoCard(titleCard, descripCard, ourCard))
        }
    })

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'progressCard_deleteBtn'
    deleteBtn.textContent = 'DELETE'
    deleteBtn.addEventListener('click', (e) => {
        const ourCard = e.target.closest('.progressCard')
        ourCard.remove()
    })
    header.append(title, editBtn, deleteBtn)

    const middleForm = document.createElement('div')
    middleForm.className = 'progressCard_middleForm'

    const descripForm = document.createElement('div')
    descripForm.className = 'progressCard_descripForm'
    descripForm.textContent = descripText

    const middleFormBtn = document.createElement('button')
    middleFormBtn.className = 'progressCard_btn'
    middleFormBtn.textContent = '>'
    middleForm.append(descripForm, middleFormBtn)

    const footer = document.createElement('div')
    footer.className = 'progressCard_footer'

    const userForm = document.createElement('div')
    userForm.className = 'progressCard_userForm'
    userForm.textContent = userText

    const timeForm = document.createElement('div')
    timeForm.className = 'progressCard_timeForm'
    timeForm.textContent = `${new Date().toLocaleTimeString()}`
    footer.append(userForm, timeForm)

    progressCard.append(header, middleForm, footer)
    return progressCard
}

export {
    createProgressCard
}