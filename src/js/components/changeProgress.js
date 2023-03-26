import { editTodoCard } from "./editCard"

const changeProgressCard = (titleText, descripText, userText, timeText) => {
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
        document.querySelector('.createForm').remove()
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
    middleFormBtn.addEventListener('click', (e) => {
        const ourCard = e.target.closest('.progressCard')
        const titleContent = ourCard.childNodes[0].childNodes[0].textContent
        const descripContent = ourCard.childNodes[1].childNodes[0].textContent
        const userContent = ourCard.childNodes[2].childNodes[0].textContent
        const timeContent = ourCard.childNodes[2].childNodes[1].textContent
        if (ourCard.parentElement.parentElement.className === 'progressTab TODO') {
            const inProgress = document.querySelector('.IN-PROGRESS>.progressTab_progressCardsWrapper')
            inProgress.append(changeProgressCard(titleContent, descripContent, userContent, timeContent))
        } else if (ourCard.parentElement.parentElement.className === 'progressTab IN-PROGRESS') {
            const done = document.querySelector('.DONE>.progressTab_progressCardsWrapper')
            done.append(changeProgressCard(titleContent, descripContent, userContent, timeContent))
        }
        ourCard.remove()
    })
    middleForm.append(descripForm, middleFormBtn)

    const footer = document.createElement('div')
    footer.className = 'progressCard_footer'

    const userForm = document.createElement('div')
    userForm.className = 'progressCard_userForm'
    userForm.textContent = userText

    const timeForm = document.createElement('div')
    timeForm.className = 'progressCard_timeForm'
    timeForm.textContent = timeText
    footer.append(userForm, timeForm)

    progressCard.append(header, middleForm, footer)
    return progressCard
}

export {
    changeProgressCard
}