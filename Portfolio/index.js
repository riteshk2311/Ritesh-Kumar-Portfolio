
var icon = document.querySelector('.mobile-theme-mode-section i');
function toggleTheme() {
    var root = document.documentElement;
    var body = document.body;
    var themeSwitch = document.querySelector('.theme-switch');
    var theme = false;
    icon.onclick = () => {
        themeSwitch.checked = !themeSwitch.checked;
    }

    if (themeSwitch.checked) {
        icon.classList.toggle('fa-fa-sun-o');
        icon.classList.remove('fa-moon-o');
        body.classList.add('dark-theme');
        root.style.setProperty('--text-color', 'white'); // Set text color to white
        root.style.setProperty('--background-color', '#111111'); // Set text color to black
        root.style.setProperty('--menu-header-color', '#04fffb');
        root.style.setProperty('--shadow-one', '#7e7e7e');
        localStorage.setItem('theme', 'dark'); // Store theme preference in local storage
    } else {
        icon.classList.toggle('fa-moon-o');
        icon.classList.remove('fa-fa-sun-o');
        body.classList.remove('dark-theme');
        root.style.setProperty('--text-color', 'black'); // Set text color to black
        root.style.setProperty('--background-color', 'white'); // Set text color to white
        root.style.setProperty('--menu-header-color', '#d8860b');
        root.style.setProperty('--shadow-one', 'rgba(0, 0, 0, 0.4)');
        localStorage.setItem('theme', 'light'); // Store theme preference in local storage
    }
}

// Check local storage for theme preference on page load
document.addEventListener('DOMContentLoaded', function () {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelector('.theme-switch').checked = true;
        document.documentElement.style.setProperty('--text-color', 'white'); // Set text color to white
        document.documentElement.style.setProperty('--background-color', '#111111');
        document.documentElement.style.setProperty('--menu-header-color', '#04fffb');
        document.documentElement.style.setProperty('--shadow-one', '#7e7e7e');
    }
    else {
        document.documentElement.style.setProperty('--text-color', 'black'); // Set text color to black
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--menu-header-color', '#d8860b');
        document.documentElement.style.setProperty('--shadow-one', 'rgba(0, 0, 0, 0.4)');
    }
});

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('#navigation')
menuIcon.onclick = () => {
    menuIcon.classList.toggle('menu-icon-active')
    navbar.classList.toggle('navigation-icon')
}

// Smooth scroll menu links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .list-menu a');
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.header .list-menu a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

// typing

var typed = new Typed('.animated-typing', {
    strings: ['Web Developer', 'Vuejs Developer', 'Photographer', 'Content Creator', 'Sleeper'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



const text = document.querySelector('#circular-text');
text.innerHTML = text.innerText.split('').map((char, i) =>
    `<span style="transform: rotate(${i * 12}deg)">${char}</span>`).join('');



// Portfolio
let valueDisplays = document.querySelectorAll('.count');
let interval = 3000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-value'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue++;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
            clearInterval(counter);
        }
    }, duration);
});

//project
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', () => {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
});
prev.addEventListener('click', () => {
    let slides = document.querySelectorAll('.slides');
    slider.insertBefore(slides[slides.length - 1], slides[0]);
});



// Contact form
document.querySelector('.contact-form').addEventListener('keyup', () => {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if (username !== '' && email !== '' && message !== '') {
        document.getElementById('button').removeAttribute('disabled');
    }
    else {
        document.getElementById('button').setAttribute('disabled', 'disabled');
    }
});

const inputs = document.querySelectorAll('.contact-input');

let notification = document.querySelector('.notification-container');
function sendMessage() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 1000);

}

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentNode.classList.add('focus');
        input.parentNode.classList.add('not-empty');
    });
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentNode.classList.remove('not-empty');
        }
        input.parentNode.classList.remove('focus');
    });
})


const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;



