const createTab = (tabName, btnName) => {
    const tab = document.createElement('div')
    if (tabName === 'IN PROGRESS') { tab.className = 'progressTab IN-PROGRESS' } else {
        tab.className = `progressTab ${tabName}`
    }

    const tabsHeader = document.createElement('div')
    tabsHeader.className = 'progressTab_header'

    const tabsHeaderName = document.createElement('div')
    tabsHeaderName.className = 'header_tabsName'
    tabsHeaderName.textContent = `${tabName}:`
    const tabsHeaderCounter = document.createElement('div')
    tabsHeaderCounter.className = 'header_counter'
    tabsHeaderCounter.textContent = '0'
    tabsHeader.append(tabsHeaderName, tabsHeaderCounter)

    const progressCardsWrapper = document.createElement('div')
    progressCardsWrapper.className = 'progressTab_progressCardsWrapper'
    tab.append(tabsHeader, progressCardsWrapper)

    if (btnName) {
        const tabsBtn = document.createElement('button')
        tabsBtn.className = 'progressTab_btn'
        tabsBtn.textContent = btnName
        tab.append(tabsBtn)
    }

    return tab
}

export {
    createTab
}