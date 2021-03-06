import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar tds os botões com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

// Quando o botão marcar como lido for clicado ele abre o modal
checkButtons.forEach(button => {
    button.addEventListener('click', handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete")

// Quando o botão Excluir for clicado ele abre o modal
deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? 'marcar como lida' : 'excluir'
    const slug = check ? 'check' : 'delete'
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = check ? 'Marcar como lida' : 'Excluir pergunta'
    modalDescription.innerHTML = `Tem certeza que deseja ${text} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
    // Abrir modal
    modal.open()
}