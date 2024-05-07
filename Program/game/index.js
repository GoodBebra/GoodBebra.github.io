//! Получение HTML элементов 
// Кнопка начать игру
let $start = document.querySelector('#start')
// Поле игры
let $game = document.querySelector('#game')
// Таймер игры
let $timeHeder = document.querySelector('#time-header')
let $time = document.querySelector('#time')
// Элемент input
let $gameTimeInput = document.querySelector('#game-time')
// Результат игры
let $resultHeader = document.querySelector('#result-header')
let $result = document.querySelector('#result')

//! Секция состояния игры
let score = 0
let isGameStarted = false

//! Секция полезныйе утилиты 
// Скрыть элемент
function hideElement($el) {
    $el.classList.add('hide')
}
// Показать элемент
function showElement($el) {
    $el.classList.remove('hide')
}
//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

//! Секция обработчита и входной точки в игру
$start.addEventListener('click', startGame)
$gameTimeInput.addEventListener('input', setGameTime)
$game.addEventListener('click', handleBoxClick)

//! Секция обработки логики игры
function startGame() {
    isGameStarted = true
    score = 0

    setGameTime()
    $gameTimeInput.setAttribute('disabled', true)

    // Скрыть кнопку
    hideElement($start)
    $game.style.backgroundColor = '#fff'
     
    // Таймер игры 
    let interal = setInterval(function() {
        let time = parseFloat($time.textContent)
        if (time <= 0) {
            clearInterval(interal)
            endGame()
        }else {
            $time.textContent = (time - 0.1).toFixed(1)
        } 

        // Обновить все состояния игры 
        
    },100)

    // Генерация всех объектов
    renderBox()
}
function setGameTime() {
    $time.textContent = +$gameTimeInput.value
    hideElement($resultHeader)
    showElement($timeHeder)
}
function handleBoxClick() {
    if (!isGameStarted){return}
    if (event.target.dataset.box) {
        score++
        renderBox()
    }

}
function renderBox() {
    // Очистка игрового поля
    $game.innerHTML = ''

    // Создание объектов
    let box = document.createElement('div')
    let boxSize = getRandomInt(10,50)
    let gameSize = $game.getBoundingClientRect()
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'
    box.style.left = getRandomInt(0, maxLeft) + 'px'
    box.style.top = getRandomInt(0, maxTop) + 'px'
    
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)
}
function endGame() {
    isGameStarted = false
    $result.textContent = score.toString()
    hideElement($timeHeder)
    showElement($resultHeader)
    $game.innerHTML = ''
    $game.style.backgroundColor = '#ccc'
    $gameTimeInput.removeAttribute('disabled')
    showElement($start)
}