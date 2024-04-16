const display = document.getElementById('display')
const clearButton = document.getElementById('clear')
const equalsButton = document.getElementById('equals')
const buttons = document.querySelectorAll('.btn')
const Koreni = document.getElementById('sqrt')

let lastSymbol = display.value[display.value.length-1]
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.innerHTML
        if ((['+', '-', '*', '/','.','**'].includes(lastSymbol)) && (['+', '-', '*', '/','.','**'].includes(value))) {
        } else {
            display.value += value
            lastSymbol = value
        }
    })
})

clearButton.addEventListener('click', ()=>{
    display.value = ''
})
Koreni.addEventListener('click', ()=>{
    display.value = Math.sqrt(display.value)
})
equalsButton.addEventListener('click', () => {
    try {
        display.value = eval(display.value)       
    } catch(error) {
        display.value =  `Ошибка: ${error.message}`
    }
})