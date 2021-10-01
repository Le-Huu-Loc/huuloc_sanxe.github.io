const slides = document.querySelector('.slider').children
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const radio = document.querySelector('.radio-btn')
let index = 0;
prev.addEventListener('click', () => {
    prevSlide()
    updateCircleIndicator()
    resetTimer()
})
next.addEventListener('click', () => {
    nextSlide()
    updateCircleIndicator()
    resetTimer()
})

circleIndicator()

function prevSlide() {
    if (index == 0)
        index = slides.length - 1
    else
        index--
    changeSlide()
}
function nextSlide() {
    if (index == slides.length - 1)
        index = 0
    else
        index++
    changeSlide()
}
function circleIndicator() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement('div')
        div.setAttribute('onclick', 'indicateSlide(this)')
        div.id = i
        if (i == 0)
            div.className = 'active'
        radio.appendChild(div)
    }
}
function indicateSlide(element) {
    index = element.id
    changeSlide()
    updateCircleIndicator()
    resetTimer()
}
function updateCircleIndicator() {
    for (let i = 0; i < radio.children.length; i++) {
        radio.children[i].classList.remove('active')
    }
    radio.children[index].classList.add('active')
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active')
    }
    slides[index].classList.add('active')
}

function autoPlay() {
    nextSlide()
    updateCircleIndicator()
}
let timer = setInterval(autoPlay, 5000)

function resetTimer() {
    clearInterval(timer)
    timer = setInterval(autoPlay, 5000)
}

//Back to top
$('#backtotop').click(function () {
    $('html').animate({
        scrollTop: 0
    }, 1000);
});

$(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
        $('#backtotop').fadeIn();
    } else {
        $('#backtotop').fadeOut();
    }
})

//Show login form

const loginElement = document.querySelector('.navbar--login')
const loginFormElement = document.querySelector('.formlogin')
const closeLoginElement = document.querySelector('.login--close')
const formElement = document.querySelector('.container')

loginElement.addEventListener('click', function () {
    loginFormElement.classList.add('show--login')
})
closeLoginElement.addEventListener('click', function () {
    loginFormElement.classList.toggle('show--login')
})
formElement.addEventListener('click', function () {
    loginFormElement.classList.toggle('show--login')
})
loginFormElement.addEventListener('click', function (e) {
    loginFormElement.classList.toggle('show--login')
    e.stopPropagation()
})
loginFormElement.addEventListener('click', function () {
})

//Show menu form reponsive
const headerMenu = document.querySelector('.topnav_menu')
const bottomMenu = document.querySelector('.header__botnav')
headerMenu.addEventListener('click', function () {
    headerMenu.classList.toggle('show-menu')
    bottomMenu.classList.toggle('show-menu')
})

//Scroll
window.addEventListener('scroll', reveal)
function reveal() {
    let reveals = document.querySelectorAll('.reveal')
    let scrollItem = document.querySelectorAll('.service__layout-item')

    for (let i = 0; i < reveals.length; i++) {
        let windownHeight = window.innerHeight;
        let revalTop = reveals[i].getBoundingClientRect().top
        let revalPoint = 150;

        if (revalTop < windownHeight - revalPoint) {
            reveals[i].classList.add('scroll')
            for (let i = 0; i < scrollItem.length; i++) {
                scrollItem[i].classList.add('scroll-item')
            }
        }
        else {
            reveals[i].classList.remove('scroll')
            for (let i = 0; i < scrollItem.length; i++) {
                scrollItem[i].classList.remove('scroll-item')
            }
        }
    }
}