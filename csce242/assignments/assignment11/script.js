class Pizza {
    constructor(name, image, ingredients, sauce, cheese, price) {
        this.name = name;
        this.image = image;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
    }

    getSection() {
        return `
            <div class="pizza-box" onclick="showModal('${this.name}')">
                <img src="images/${this.image}" alt="${this.name}">
                <h3>${this.name}</h3>
            </div>
        `;
    }
}

const pizzas = [
    new Pizza('Hawaiian', 'hawaiian.jpg', 'Pineapple, Ham', 'Tomato Sauce', 'Mozzarella', '$15.99'),
    new Pizza('Buffalo Chicken Ranch', 'buffalo_chicken_ranch.jpg', 'Buffalo Chicken, Ranch', 'Buffalo Sauce', 'Mozzarella', '$18.99'),
    new Pizza('Margarita', 'margarita.jpg', 'Basil, Tomatoes', 'Extra Virgin Olive Oil', 'Fresh Mozzarella', '$19.20'),
    new Pizza('Pepperoni', 'pepperoni.jpg', 'Pepperoni, Tomato', 'Tomato Sauce', 'Mozzarella', '$16.50'),
    new Pizza('Veggie', 'veggie.jpg', 'Olives, Bell Peppers', 'Tomato Sauce', 'Mozzarella', '$17.75')
];

function displayPizzas() {
    const gallery = document.getElementById('pizza-gallery');
    gallery.innerHTML = pizzas.map(pizza => pizza.getSection()).join('');
}

function showModal(pizzaName) {
    const pizza = pizzas.find(pizza => pizza.name === pizzaName);

    if (pizza) {
        document.getElementById('modalTitle').innerText = pizza.name;
        document.getElementById('modalImage').src = `images/${pizza.image}`;
        document.getElementById('modalImage').alt = pizza.name;
        document.getElementById('modalDetails').innerHTML = `
            <strong>Ingredients:</strong> ${pizza.ingredients} <br>
            <strong>Sauce:</strong> ${pizza.sauce} <br>
            <strong>Cheese:</strong> ${pizza.cheese}
        `;
        document.getElementById('modalPrice').innerHTML = `<strong>Price:</strong> ${pizza.price}`;

        document.getElementById('pizzaModal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('pizzaModal').style.display = 'none';
}

document.getElementById('closeModalBtn').addEventListener('click', closeModal);

document.getElementById('pizzaModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    displayPizzas();
    document.getElementById('pizzaModal').style.display = 'none';
});
