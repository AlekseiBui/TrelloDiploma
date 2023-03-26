'use strict'

import { createTodoCard } from "./components/createCard";
import { createHeader } from "./components/header";
import { removeWarning } from "./components/removeFromDone";
import { createThreeTabs } from "./components/threeTabs";
import { fetchUsers, userKey } from "./storage";

fetchUsers().then(users => {
    localStorage.setItem(userKey, JSON.stringify(users))
})

document.body.append(createHeader(), createThreeTabs())

const addTodo = document.querySelector('.TODO>.progressTab_btn')
addTodo.addEventListener('click', () => {
    if (!document.querySelector('.createForm')) {
        document.body.append(createTodoCard())
    }
})

const removeTodo = document.querySelector('.DONE>.progressTab_btn')
removeTodo.addEventListener('click', () => {

    if (!document.querySelector('.removeWarningForm')) {
        document.body.append(removeWarning())
    }
})