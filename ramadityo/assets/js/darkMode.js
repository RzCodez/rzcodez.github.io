const toggleSwitch = document.querySelector('.toggle');
const toggleClicker = document.querySelector('.checkbox');
const switcher = document.querySelector('.switcher');
const element = document.body;
const navbarButton = document.querySelectorAll('.navbarLinks');
toggleClicker.addEventListener('click', function(){
    toggleSwitch.classList.toggle('darkmodetoggle')
    element.classList.toggle('darkmodebody')
    switcher.classList.toggle('darkmodeswitcher')
    navbarButton.forEach(nav => {
        nav.classList.toggle('darkmodenavbar');
    });
})