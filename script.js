window.addEventListener('resize', e => {
    const details = document.querySelector('details.burger-nav')
    
    if(window.innerWidth >= 1024) {
        details.open = true
    } else {
        details.open = false
    }
});