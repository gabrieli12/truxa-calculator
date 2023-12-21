const result = document.getElementById("result")

const buttons = document.getElementsByTagName("input")

for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        result.textContent += buttons[i].value
        console.log(typeof result)
    })
}


let equal = document.getElementById("equal")

equal.addEventListener('click', function(){
    result.textContent = eval(result.textContent)
})

const removeAll = document.getElementById("c")

removeAll.addEventListener('click', function(){
    result.textContent = ""
})