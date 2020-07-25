const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll('.card')
const close = document.querySelector(".close-modal")
const modalContent = document.getElementById('modal-content');


for (let card of cards) {
    card.addEventListener("click", function() {
        const shallowCard = card.outerHTML;
        /**crio uma cópia do HTML "card" com o outerHTML puxando junto o elemento "pai"
         * falo que minha div "modal content", vai agregar a ela as informaçoes da linha acima. O motivo da utilização do "innerHTML"
         * é para alterar o conteudo do modal content, se utilizar o outerHTML a modal content dedixaria de existir, pois seria substituida pela
         * a cópia do card.
         */
        modalContent.innerHTML = shallowCard;
        modalOverlay.classList.add('active')
    })
}

close.addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})