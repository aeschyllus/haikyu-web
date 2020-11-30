document.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector('#menu-icon')
    const links = document.querySelector('#links')
    
    icon.addEventListener('click', () => {
        if(links.classList.contains('hidden')) {
            links.classList.remove('hidden')
        } else {
            links.classList.add('hidden')
        }
    })
})
