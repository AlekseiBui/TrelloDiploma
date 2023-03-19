import { createTab } from "./progressTab"

const createThreeTabs = () => {
    const threeTabs = document.createElement('div')
    threeTabs.className = 'tabs'

    threeTabs.append(createTab('TODO', 'Add todo'), createTab('IN PROGRESS'), createTab('DONE', 'Delete all'))

    return threeTabs
}

export {
    createThreeTabs
}