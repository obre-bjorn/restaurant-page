function createNav() {
    const nav = document.createElement('div');

    const logo = document.createElement('div')
    const logoImg = document.createElement('img');
    logoImg.src = './images/logo.png'
    logo.appendChild(logoImg)
    logo.innerHTML += 'Bakery'
    nav.id = "navbar"
    logo.id = "logo"


    nav.appendChild(logo)

    return nav

}



function buildWebsite() {
    let content = document.getElementById('content');
    content.appendChild(createNav())

}


export default buildWebsite;