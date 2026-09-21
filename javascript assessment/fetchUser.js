async function fetchUser(params) {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    for (const key in data) {
        console.log(`name : ${data[key].name} email ${data[key].email}`)
    }
}

fetchUser()