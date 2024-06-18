// AUTHOR: M. ALEXANDRA DODU
// DATE: JUN 2024

/*
 *Implementation of an interactive menu system in JavaScript:
    - Presents separate menus for breakfast, lunch, and dinner depending on the selected time.
    - Allows the client to choose one main dish, one side dish and drink.
    - Provides random comments on client selections.
    - Calculates and displays the ticket with the total price based on the choices made.
 */

const breakfastMenu = {
    mainMenu: [
        { id: 1, name: 'Granola', price: 12.95 },
        { id: 2, name: 'Tostada con setas y hummus', price: 10.50 },
        { id: 3, name: 'Tostada con tomate y aceite de oliva', price: 3.50 },
    ],

    sideMenu: [
        { id: 4, name: 'Ensalada de fruta', price: 5.95 },
        { id: 5, name: 'Yogur de frutos del bosque', price: 5.50 },
        { id: 6, name: 'Cupcake de vainilla y frambuesa', price: 3.95 },
    ],

    drinks: [
        {id: 7, name: 'Café con leche vegetal', price: 2.50 },
        {id: 8, name: 'Té negro', price: 2.50 },
        {id: 9, name: 'Zumo de naranja', price: 2.50 },
    ]
};

const lunchDinnerMenu = {
    mainMenu: [
        { id: 10, name: 'Tacos de tofu', lunchPrice: 9.50, dinnerPrice: 10.50 },
        { id: 11, name: 'Ensalada de quinoa', lunchPrice: 11.95, dinnerPrice: 12.95 },
        { id: 12, name: 'Garbanzos al curry', lunchPrice: 10.50, dinnerPrice: 11.50 },
    ],

    sideMenu: [
        { id: 13, name: 'Hummus con crudites', lunchPrice: 5.95, dinnerPrice: 6.50 },
        { id: 14, name: 'Patatas al horno', lunchPrice: 4.95, dinnerPrice: 5.50 },
        { id: 15, name: 'Mini poke bowl', lunchPrice: 6.95, dinnerPrice: 7.50 },
    ],

    drinks: [
        {id: 16, name: 'Coca-cola', lunchPrice: 2.50, dinnerPrice: 2.95 },
        {id: 17, name: 'Refresco de limón', lunchPrice: 2.50, dinnerPrice: 2.95 },
        {id: 18, name: 'Agua filtrada', lunchPrice: 2.50, dinnerPrice: 2.95 },
    ]
};


function getRandomComment() {
    const comments = [
        "¡Gran elección!",
        "¡Es un favorito de los clientes!",
        "¡Es recomendación de la casa!",
        "¡Te va a encantar!",
        "¡No podrías haber hecho mejor elección!",
        "¡No te vas a arrepentir!",
    ];

    return comments[Math.floor(Math.random() * comments.length)];
};


function totalPrice(prices) {
    const totalSum = prices.reduce((total, price) => total + price, 0).toFixed(2);
    return totalSum;
}


// Selection of dishes and drink, with the final display of the ticket with the total price.
function menuSelection(menuType, mealType) {
    // Printing selected menu
    let menuHeader = '';

    switch (mealType) {
        case 'lunch':
            menuHeader = '--- MENÚ DE ALMUERZO ---';
            break;
        case 'dinner':
            menuHeader = '--- MENÚ DE CENA ---';
            break;
        default:
            menuHeader = '--- MENÚ DE DESAYUNO ---';
    };

    function gettingItemsPrice(item) {
        if (mealType === 'lunch') {
            return item.lunchPrice.toFixed(2) + ' €';
        } else if (mealType === 'dinner') {
            return item.dinnerPrice.toFixed(2) + ' €';
        } else {
            return item.price.toFixed(2) + ' €';
        }
    }

    const mainMenuSection = menuType.mainMenu.map( item => `    - nº ${item.id}) ${item.name} (${gettingItemsPrice(item)})` ).join('\n');
    const sideMenuSection = menuType.sideMenu.map( item => `    - nº ${item.id}) ${item.name} (${gettingItemsPrice(item)})` ).join('\n');
    const drinksSections = menuType.drinks.map( item => `   - nº ${item.id}) ${item.name} (${gettingItemsPrice(item)})` ).join('\n');

    alert(`${menuHeader}\nPLATOS PRINCIPALES\n${mainMenuSection}\n\nACOMPAÑAMIENTOS\n${sideMenuSection}\n\nBEBIDAS\n${drinksSections}`);

    // Items selection
    let selectedMainMenu;
    let selectedSideMenu;
    let selectedDrink;
    let selectedItemsPrices = [];

    function itemSelection(menu, itemType) {
        let continueSelection = true;

        while (continueSelection) {
            let inputItem = prompt(`Introduzca el número del/la ${itemType} que va a desear:\n${itemType === 'plato principal' ? mainMenuSection : itemType === 'acompañamiento' ? sideMenuSection : drinksSections}`);
    
            if (inputItem === null) {
                console.log(`El cliente ha cancelado el proceso de selección de plato/bebida.`);
                return null; 
            }
    
            let selectedItemID = parseInt(inputItem);
            if (isNaN(selectedItemID)) {
                alert('Por favor, introduzca un número válido.');
                continue; 
            }
    
            let selectedItem = menu.find(item => item.id === selectedItemID);
    
            if (selectedItem) {
                let itemPrice;
                    
                if (mealType === 'lunch') {
                    itemPrice = selectedItem.lunchPrice;
                } else if (mealType === 'dinner') {
                    itemPrice = selectedItem.dinnerPrice;
                } else {
                    itemPrice = selectedItem.price;
                }

                const confirmation = prompt(`Has elegido ${selectedItem.name}. ¿Desea continuar con tu elección? (S/N)`).toLocaleLowerCase();

                if (confirmation === 's') {
                    continueSelection = false;
                    alert(`${getRandomComment()}`);
                    return { ...selectedItem, price: itemPrice };
                } else if (confirmation === 'n') {
                    alert(`Vuelve a seleccionar tu ${itemType}.`);
                } else {
                    alert(`Respuesta no válida. Por favor, responde S para continuar o N para cambiar tu elección. Vuelve a seleccionar tu ${itemType}.`)
                }
                    
            } else {
                alert(`El/La ${itemType} seleccionado no corresponde al menú. Inténtalo de nuevo.`)
            }
        }
    }

    selectedMainMenu = itemSelection(menuType.mainMenu, 'plato principal');
    if (!selectedMainMenu) return;

    selectedSideMenu = itemSelection(menuType.sideMenu, 'acompañamiento');
    if (!selectedSideMenu) return;

    selectedDrink = itemSelection(menuType.drinks, 'bebida');
    if (!selectedDrink) return;

    selectedItemsPrices.push(selectedMainMenu.price);
    selectedItemsPrices.push(selectedSideMenu.price);
    selectedItemsPrices.push(selectedDrink.price);

    alert(`CUENTA FINAL DEL MENÚ ELEGIDO:

        - Plato principal: ${selectedMainMenu.name} (${selectedMainMenu.price.toFixed(2)} €)
        - Acompañamiento: ${selectedSideMenu.name} (${selectedSideMenu.price.toFixed(2)} €)
        - Bebida: ${selectedDrink.name} (${selectedDrink.price.toFixed(2)} €)
        
        TOTAL: ${totalPrice(selectedItemsPrices)} €
        
    ¡Muchas gracias por apoyar este negocio!`);
};


// Selection of menu (breakfast, lunch or dinner)
function menuTypeSelection() {
    const currentTime = moment().format('HH:mm');
    const breakfastOpeningTime = moment('09:00', 'HH:mm');
    const lunchOpeningTime = moment('13:00', 'HH:mm');
    const dinnerOpeningTime = moment('20:00', 'HH:mm');
    const dinnerClosingTime = moment('23:30', 'HH:mm');
    
    let inputTime = prompt('¡Bienvenido/a! Introduce una hora para poder elegir el menú (HH:mm):', currentTime);

    if (inputTime === null) {
        console.log('El cliente ha cancelado la selección de menú.');
        return; 
    }

    while (true) {
        while (!moment(inputTime, 'HH:mm', true).isValid()) {
            inputTime = prompt('La hora no es válida. Por favor, inténtalo de nuevo, usando el formato HH:mm. Gracias.', currentTime);
            if (inputTime === null) {
                console.log('El cliente ha cancelado la selección de menú.');
                return; 
            }
        }
    
        const selectedTime = moment(inputTime, 'HH:mm');
    
        if (selectedTime.isBetween(breakfastOpeningTime, lunchOpeningTime, null, '[)')) {
            menuSelection(breakfastMenu);
            break;
        } else if (selectedTime.isBetween(lunchOpeningTime, dinnerOpeningTime, null, '[)')) {
            menuSelection(lunchDinnerMenu, 'lunch');
            break;
        } else if (selectedTime.isBetween(dinnerOpeningTime, dinnerClosingTime, null, '[]')) {
            menuSelection(lunchDinnerMenu, 'dinner');
            break;
        } else {
            inputTime = prompt("Lo sentimos, estamos cerrados a esa hora. Introduce una hora dentro de nuestro horario de apertura (HH:mm):", currentTime);
            if (inputTime === null) {
                console.log('El cliente ha cancelado la selección de menú.');
                return; 
            }
        }
    }
};


menuTypeSelection();
