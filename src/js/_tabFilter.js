document.addEventListener('DOMContentLoaded', () => {

    const tabsItems = document.querySelectorAll('.cards__tabs .button');
    console.log("tabsItems", tabsItems);
    const cardsItems = document.querySelectorAll('.cards .card__item');
    console.log("cardsItems ", cardsItems);
    const showAllButton = document.getElementById('show_all');
    console.log("showAllButton", showAllButton);

    tabsItems.forEach(tabItem => {
        tabItem.addEventListener('click', () => {
            console.log("click")

            const filter = tabItem.textContent
            console.log('filter', filter)
            const filteredTabsEasy = Array.from(cardsItems).filter(block => block.textContent.includes(filter)); // короткая запись. Когда есть только одно выражение в теле функции, можно опустить фигурные скобки и слово return
            const filteredTabsFull = Array.from(cardsItems).filter((block) => {
                return block.textContent.includes(filter)
            });// это полная запись
            console.log("filteredTabsEasy", filteredTabsEasy);
            console.log('filteredTabsFull', filteredTabsFull)
        })
    })
})


