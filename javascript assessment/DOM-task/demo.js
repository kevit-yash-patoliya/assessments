// task 1
const task1button = document.getElementById('task1button')
task1button.addEventListener("click",()=>{
    const task1div = document.getElementById('task1div')
    if(task1div.style.backgroundColor == 'blue'){
        task1div.style.backgroundColor = 'white'
    }else{
        task1div.style.backgroundColor = 'blue'
    }
})

// task 2

const ul = document.getElementsByTagName("ul")[0]
const task2button = document.getElementById('task2button')

task2button.addEventListener("click",()=>{
    let input = document.getElementById("task2input")
    const value = input.value;
    const li = document.createElement('li')
    li.textContent = value;
    console.log(ul)
    ul.appendChild(li)
    input.value = ""
})

//task 3
const task3button = document.getElementById('task3button')

task3button.addEventListener("click",()=>{
const p = document.getElementsByTagName('p')[0]

p.textContent = "You have clicked me !!"

})


//task 4

const task4button = document.getElementById('task4button')

task4button.addEventListener("click",()=>{
    const task4div = document.getElementById('task4div')
    task4div.remove()
})

//task 5

const task5button = document.getElementById('task5button')

task5button.addEventListener("click",()=>{
    const div = document.getElementById('task5div')
    div.classList.toggle("dark")
})



