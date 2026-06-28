function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const heading = document.createElement('h2');
    heading.style.cssText = 'color: #8b4513; font-size: 32px; margin-bottom: 30px; text-align: center;';
    heading.textContent = 'Our Menu';

    const menuGrid = document.createElement('div');
    menuGrid.className = 'menu-grid';

    const menuItems = [
        {
            name: 'Garlic Bread',
            price: '$5.99',
            description: 'Crispy bread with garlic butter and fresh herbs'
        },
        {
            name: 'Margherita Pasta',
            price: '$12.99',
            description: 'Fresh pasta with tomato sauce, basil, and mozzarella'
        },
        {
            name: 'Grilled Salmon',
            price: '$18.99',
            description: 'Atlantic salmon fillet with seasonal vegetables'
        },
        {
            name: 'Mushroom Risotto',
            price: '$14.99',
            description: 'Creamy arborio rice with wild mushrooms and parmesan'
        },
        {
            name: 'Chocolate Cake',
            price: '$6.99',
            description: 'Rich, decadent chocolate cake with ganache'
        },
        {
            name: 'Tiramisu',
            price: '$5.99',
            description: 'Classic Italian dessert with espresso and mascarpone'
        }
    ];

    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('div');
        itemPrice.className = 'price';
        itemPrice.textContent = item.price;

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(itemDesc);
        menuGrid.appendChild(itemDiv);
    });

    content.appendChild(heading);
    content.appendChild(menuGrid);

    // Update active button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('menuBtn').classList.add('active');
}

export { loadMenu };
