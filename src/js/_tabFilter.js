document.addEventListener('DOMContentLoaded', () => {

    const tabsItems = document.querySelectorAll('.cards__tabs .button');
    console.log("tabsItems", tabsItems);
    const cardsItems = document.querySelectorAll('.cards .card__item');
    console.log("cardsItems ", cardsItems);
    const showAllButton = document.getElementById('show_all');
    console.log("showAllButton", showAllButton);

    tabsItems.forEach(tabItem => {
        tabItem.addEventListener('click', () => {
            tabsItems.forEach(item => {
                item.style.backgroundColor = tabItem === item ? '#000' : '';
                item.style.color = tabItem === item ? '#fff' : '';
            })
            console.log("click")

            const filter = tabItem.textContent
            console.log('filter', filter)
            const filteredTabs = Array.from(cardsItems).filter((block) => {
                return block.textContent.includes(filter)
            });
            console.log('filteredTabs', filteredTabs)
            cardsItems.forEach(cardItem => {
                // if (filteredTabs.includes(cardItem)) {
                //     cardItem.style.display = 'block'
                // } else {
                //     cardItem.style.display = 'none'
                // }
                cardItem.style.display = filteredTabs.includes(cardItem) ? `flex` : 'none';
            })
        })
    })
    showAllButton.addEventListener('click', () => {
        cardsItems.forEach(item => {
            item.style.display = 'flex'
        })
    })
})