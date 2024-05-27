const tabsItems = document.querySelectorAll('.cards__tabs .button');
console.log("tabsItems" , tabsItems);
const cardsItems = document.querySelectorAll('.cards .card__item');
console.log("cardsItems ", cardsItems);
const showAllButton = document.getElementById('show_all');
console.log("showAllButton", showAllButton);

tabsItems.forEach(tabItem => {
    tabItem.addEventListener('click', () => {
        console.log("click")

        let filter = this.textContent
        cardsItems.forEach(cardItem => {
            if (cardItem.textContent.includes(filter)) {
                cardItem.style.display = 'block'
            } else {
                cardItem.style.display = 'none'
            }
        })
    })
})
