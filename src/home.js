function createHome() {
    let home = document.createElement('div')
    home.id = "home";

    let heading = document.createElement('h1');
    heading.textContent = "Welcome To The Bakery"

    let slogan = document.createElement('p');
    slogan.textContent = "Devour more of our delicious and wonderful cakes!"

    home.appendChild(heading)
    home.appendChild(slogan)

    return home
}

function loadHome() {
    let main = document.querySelector('main')
    main.textContent = ""
    main.appendChild(createHome())
}

export default loadHome