const createHeader = () => {
    const header = document.createElement('div')
    header.className = 'header'

    const appNameText = document.createElement('div')
    appNameText.textContent = 'Trello'
    appNameText.className = 'header_appNameText'

    const headerClock = document.createElement('div')
    headerClock.className = 'header_clock'
    headerClock.textContent = new Date().toLocaleTimeString()
    setInterval(() => {
        headerClock.textContent = new Date().toLocaleTimeString()
    }, 1000)

    header.append(appNameText, headerClock)

    return header
}

export {
    createHeader
}