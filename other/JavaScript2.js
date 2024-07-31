// JavaScript source code

//grab title
const title = document.querySelector('h1')
//var text = document.getElementById("text")

//grab letters and remove spaces
const chars = title.innerText.split('')

// a for loop that creates a string of all the characters
let html = ''
chars.forEach(char => {
    let classes = ''
    if (char !== ' ') {
        classes = 'char js-letter'
    }
    html = html + `<span class = '${classes}'>${char}</span>`
})

title.innerHTML = html

const jsLetters = document.querySelectorAll(".js-letter")
jsLetters.forEach(node => {
    node.addEventListener('mouseover', function (event) {
        this.classList.add("active")
    })
    node.addEventListener('mouseout', function (event) {
        this.classList.remove("active")
    })
})


// modal code
//const close = document.querySelector("button")

//close.addEventListener('click', function (event) {
    //modal_box.classList.add("modal_active")
//})

//subtitle animation

const header = document.querySelector("header")

const Letters = header.innerText.split('')

let html1 = ''
Letters.forEach(Letter => {
    let Classes = ''
    if (Letter !== ' ') {
        Classes = 'letter javas-char'
    }

    html1 = html1 + `<span class="${Classes}">${Letter}</span>`
})

header.innerHTML = html1


const javasChar = document.querySelectorAll(".javas-char")
javasChar.forEach(node => {
    node.addEventListener('mouseover', function (event) {
        this.classList.add("active1")
    })
    node.addEventListener('mouseout', function (event) {
        this.classList.remove("active1")
    })
})