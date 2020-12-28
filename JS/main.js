 const menu = document.querySelector('#mobile-menu')
 const menuLinks = document.querySelector('.navbar-menu')

 // Display mobile menu
 const mobilemenu = () => {
     menu.classList.toggle('is-active')
     menuLinks.classList.toggle('active')
 }

 menu.addEventListener('click', mobilemenu)