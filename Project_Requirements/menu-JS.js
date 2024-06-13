// AUTHOR: M. ALEXANDRA DODU
// DATE: JUN 2024

/*
 *Implementation of an interactive menu system in JavaScript:
    - Presents separate menus for breakfast, lunch, and dinner.
    - Allows the client to choose one main dish and two side dishes.
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


function printFullMenu() {
    // Breakfast
    console.log('--- MENÚ DE DESAYUNO ---');
    console.log('\tPrincipales (a elegir 1)');
    breakfastMenu.mainMenu.forEach(item => {
        console.log(`\t - nº ${item.id}) ${item.name}`);
    });
    console.log('\tAcompañamientos (a elegir 2)');
    breakfastMenu.sideMenu.forEach(item => {
        console.log(`\t - nº ${item.id}) ${item.name}`);
    });
    console.log('\tBebidas');
    breakfastMenu.drinks.forEach(item => {
        console.log(`\t - nº ${item.id}) ${item.name}`);
    });

    // Lunch and dinner
    console.log('--- MENÚ DE ALMUERZO Y CENA ---');
    console.log('\tPrincipales (a elegir 1)');
    lunchDinnerMenu.mainMenu.forEach(item => {
        console.log(`\t - nº ${item.id}) ${item.name}`);
        if (item.extras) {
            console.log('\t\tIngredientes extras:');
            item.extras.forEach(extra => {
                console.log(`\t\t\t${extra.name}: ${extra.price.toFixed(2)} €`);
            });
        };
    });
    console.log('\tAcompañamientos (a elegir 2)');
    lunchDinnerMenu.sideMenu.forEach(item => {
        console.log(`\t - nº ${item.id}) ${item.name}`);
    });
    console.log('\tBebidas');
    lunchDinnerMenu.drinks.forEach(item => {
        console.log(`\t - nº ${item.id}) ${item.name}`);
    });
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
    let selectedMainMenu;
    let selectedSideMenu1;
    let selectedSideMenu2;
    let selectedDrink;
    let selectedItemsPrices = [];

    function itemSelection(menu, itemType) {
        let continueSelection = true;

        while (continueSelection) {
            let inputItem = prompt(`Introduzca el número del/la ${itemType} que va a desear:`);
    
            if (inputItem === null) {
                console.log('El cliente ha cancelado el proceso.');
                return null; 
            }
    
            let selectedItemID = parseInt(inputItem);
            if (isNaN(selectedItemID)) {
                alert('Por favor, introduzca un número válido.');
                continue; 
            }
    
            let selectedItem = menu.find(item => item.id === selectedItemID);
    
            if (selectedItem) {
                let itemPrice = selectedItem.price;

                if (mealType === 'lunch') {
                    itemPrice = selectedItem.lunchPrice;
                } else if (mealType === 'dinner') {
                    itemPrice = selectedItem.dinnerPrice;
                } 

                const confirmation = prompt(`Has elegido ${selectedItem.name}. ¿Desea continuar con tu elección? (S/N)`).toLocaleLowerCase();

                if (confirmation === 's') {
                    continueSelection = false;
                    alert(`${getRandomComment()} El precio es de ${itemPrice.toFixed(2)} €.`);
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

    selectedSideMenu1 = itemSelection(menuType.sideMenu, 'primer acompañamiento');
    if (!selectedSideMenu1) return;

    selectedSideMenu2 = itemSelection(menuType.sideMenu, 'segundo acompañamiento');
    if (!selectedSideMenu2) return;

    selectedDrink = itemSelection(menuType.drinks, 'bebida');
    if (!selectedDrink) return;

    selectedItemsPrices.push(selectedMainMenu.price);
    selectedItemsPrices.push(selectedSideMenu1.price);
    selectedItemsPrices.push(selectedSideMenu2.price);
    selectedItemsPrices.push(selectedDrink.price);

    console.log(`CUENTA FINAL DEL MENÚ ELEGIDO:

        - Plato principal: ${selectedMainMenu.name} (${selectedMainMenu.price.toFixed(2)} €)
        - Primer acompañamiento: ${selectedSideMenu1.name} (${selectedSideMenu1.price.toFixed(2)} €)
        - Segundo acompañamiento: ${selectedSideMenu2.name} (${selectedSideMenu2.price.toFixed(2)} €)
        - Bebida: ${selectedDrink.name} (${selectedDrink.price.toFixed(2)} €)
        
        TOTAL: ${totalPrice(selectedItemsPrices)} €`);
};


// Selection of the type of menu (breakfast, lunch or dinner)
function menuTypeSelection() {
    let inputMenu;
    
    while (true) {
        inputMenu = prompt('Elige tipo de menú (desayuno, almuerzo o cena):').toLowerCase();

        if (inputMenu === 'desayuno' || inputMenu === 'almuerzo' || inputMenu === 'cena') {
            break; 
        } else {
            alert("Menú no válido. Inténtalo de nuevo.");
        }
    }
    
    if (inputMenu === 'desayuno') {
        menuSelection(breakfastMenu);
    } else if (inputMenu === 'almuerzo') {
        menuSelection(lunchDinnerMenu, 'lunch');
    } else {
        menuSelection(lunchDinnerMenu, 'dinner');
    }
};



printFullMenu();
menuTypeSelection();
