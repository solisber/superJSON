const templateCard = document.getElementById('template-card').content
const usuariosHYML = document.getElementById('usuarios')
const fragmnet = document.createDocumentFragment()
let usuarios = []

document.addEventListener('DOMContentLoaded', () => {
    obtenerUsuarios()

})

const pintarCards = () => {
    usuarios.forEach(user => {
        templateCard.querySelector('.card-header').textContent = user.name
        templateCard.querySelectorAll('h7')[0].textContent = user.email
        templateCard.querySelectorAll('h7')[1].textContent = user.phone
        templateCard.querySelectorAll('h7')[2].textContent = user.username
        templateCard.querySelectorAll('h7')[3].textContent = user.website
        templateCard.querySelector('.btn-primary').dataset.id = user.id


        const clone = templateCard.cloneNode(true)
        fragmnet.appendChild(clone)
    })
    usuariosHTML.appendChild(fragmnet)
}

function obtenerUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(async(data) => {
            usuarios = await data.json()
            pintarCards()
        })
        .catch(error => console.log(error))
}