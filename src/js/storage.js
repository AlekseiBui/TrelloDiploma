const URL = 'https://641725644f4c1cd3a328937e.mockapi.io/Users'
const userKey = 'Users'

async function fetchUsers() {
    const response = await fetch(URL)
    const users = response.json()
    return users
}

export {
    fetchUsers,
    userKey
}