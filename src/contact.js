function createContact() {
    const contactCard = document.createElement('div')
    contactCard.id = 'contact'


    //Phone Number
    let phone = document.createElement('h1')
    let phoneIcon = document.createElement('span')
    phoneIcon.classList.add('icon')
    phoneIcon.textContent = '☎️'

    phone.appendChild(phoneIcon)
    phone.textContent += " +254772455667"

    contactCard.appendChild(phone)

    // Address 
    let address = document.createElement('h1')
    let addressIcon = document.createElement('span')
    addressIcon.classList.add('icon')
    addressIcon.textContent = '🏠'

    address.appendChild(addressIcon)
    address.textContent += " Kenya, Nairobi, Kenyatta Avenue."

    contactCard.appendChild(address)

    contactCard.innerHTML += `<iframe src="https: //www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63820.9964368889!2d36.82971917240479!3d-1.2867034819243246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjava%20kenyatta%20avenue!5e0!3m2!1sen!2ske!4v1680889639739!5m2!1sen!2ske" width="400"
        height = "400"
    style = "border:0;"
    allowfullscreen = ""
    loading = "lazy"
    referrerpolicy = "no-referrer-when-downgrade">< /iframe>`


    return contactCard
}

function loadContact() {
    let main = document.querySelector('main')
    main.textContent = ""
    main.appendChild(createContact())
}

export default loadContact