import loadHome from "./home";
import loadMenu from "./menu";

function setActiveLink(button) {
    let links = [...document.querySelectorAll('.navlink')]

    links.forEach((button) => {
        if (button != this) {
            button.classList.remove('active')
        }
    })

    button.classList.add('active')

}


function createNav() {
    const nav = document.createElement('div');

    const logo = document.createElement('div')
    const logoImg = document.createElement('img');
    logoImg.src = './images/logo.png'
    logo.appendChild(logoImg)
    logo.innerHTML += 'Bakery'
    nav.id = "navbar"
    logo.id = "logo"


    // Nav links
    const navlinks = document.createElement('div')
    navlinks.classList.add('nav-links')

    const navlist = document.createElement('ul')
    navlist.id = "nav-links"


    // Home Link
    let homeLink = document.createElement('li');
    homeLink.classList.add('navlink')
    homeLink.classList.add('active')
    homeLink.textContent = 'Home'
    navlist.appendChild(homeLink)

    homeLink.addEventListener('click', function(e) {
        if (e.target.classList.contains('active')) {
            return
        }
        setActiveLink(homeLink)
        loadHome()

    })

    // Menu link
    let menuLink = document.createElement('li');
    menuLink.classList.add('navlink')
    menuLink.textContent = 'Menu'
    navlist.appendChild(menuLink)
    menuLink.addEventListener('click', function(e) {
            if (e.target.classList.contains('active')) {
                return
            }
            setActiveLink(menuLink)
            loadMenu()


        })
        //Contact Link
    let contactLink = document.createElement('li');
    contactLink.classList.add('navlink')
    contactLink.textContent = 'Contact'
    navlist.appendChild(contactLink)
    contactLink.addEventListener('click', function(e) {
        if (e.target.classList.contains('active')) {
            return
        }
        setActiveLink(contactLink)


    })

    navlinks.appendChild(navlist)


    nav.appendChild(logo)
    nav.appendChild(navlinks)

    return nav

}

function createMain() {
    let main = document.createElement('main')
    return main
}



function buildWebsite() {
    let content = document.getElementById('content');
    content.appendChild(createNav())
    content.appendChild(createMain())

    loadHome()
}


export default buildWebsite;