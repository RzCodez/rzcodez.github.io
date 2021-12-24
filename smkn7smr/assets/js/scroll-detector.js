var scrollvalue = document.getElementById('scroll-detector');
window.addEventListener('scroll', (e) => {
    let scroll = this.scrollY;
    // console.log(scrollY);
    scrollvalue.innerHTML = 'Scroll Value' + scroll + 'px';
})