async function fetchUser(params) {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
        console.log(`name : ${data[0].name} \nemail ${data[0].email}`)
}

fetchUser()