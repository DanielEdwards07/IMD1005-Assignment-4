
//Menu parallax
const hero = document.getElementById("hero");

if (window.innerWidth > 768) {

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        hero.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;

    });

}






//menu items

let cart = [];

//Dynamic Content Rendering
const food = [
    {
    name: "Ribeye Steak", image: "Assets/Menu/Ribeye Steak.jpg",
    desc: "A rich, marbled ribeye grilled to perfection and finished with garlic butter.",
    price: "$24.99"
},
{
    name: "New York Strip", image: "Assets/Menu/New York Strip.jpg",
    desc: "A classic New York strip steak with bold flavor and a perfectly seared crust.",
    price: "$22.99"
},
{
    name: "Filet Mignon", image: "Assets/Menu/Filet Mignon.jpg",
    desc: "An incredibly tender cut of beef served with herb butter and roasted vegetables.",
    price: "$29.99"
},
{
    name: "Burger", image: "Assets/Menu/Burger.jpg",
    desc: "A juicy grilled burger topped with lettuce, tomato, and cheese, served with fries.",
    price: "$12.99"
},
{
    name: "Roasted Chicken", image: "Assets/Menu/Roasted Chicken.jpg",
    desc: "Seasoned roasted chicken served with garlic potatoes and fresh vegetables.",
    price: "$18.99"
},
{
    name: "Chicken Sandwich", image: "Assets/Menu/Chicken Sandwich.jpg",
    desc: "A crispy chicken breast sandwich with lettuce, tomato, and house sauce.",
    price: "$10.99"
},
{
    name: "Hot Wings", image: "Assets/Menu/Hot Wings.jpg",
    desc: "Crispy chicken wings tossed in a spicy house buffalo sauce.",
    price: "$14.99"
},
{
    name: "Chicken Fingers", image: "Assets/Menu/Chicken Fingers.jpg",
    desc: "Golden fried chicken tenders served with honey mustard dipping sauce.",
    price: "$11.99"
},
{
    name: "Pork Chop", image: "Assets/Menu/Pork Chops.jpg",
    desc: "Juicy grilled pork chops seasoned with herbs and served with mashed potatoes.",
    price: "$19.99"
},
{
    name: "BBQ Ribs", image: "Assets/Menu/BBQ Ribs.jpg",
    desc: "Slow-cooked pork ribs glazed with smoky barbecue sauce.",
    price: "$21.99"
},
{
    name: "Club Sandwich", image: "Assets/Menu/Club Sandwich.jpg",
    desc: "A stacked sandwich with roasted turkey, bacon, lettuce, tomato, and mayo.",
    price: "$13.99"
},
{
    name: "Roasted Salmon", image: "Assets/Menu/Roasted Salmon.jpg",
    desc: "Fresh salmon roasted with lemon and herbs, served with seasonal vegetables.",
    price: "$23.99"
},
{
    name: "Fried Shrimp", image: "Assets/Menu/Fried Shrimp.jpg",
    desc: "Crispy fried shrimp served with cocktail sauce and a side of coleslaw.",
    price: "$16.99"
},
{
    name: "Lobster Tail", image: "Assets/Menu/Lobster Tail.jpg",
    desc: "Succulent lobster tail broiled and served with warm drawn butter.",
    price: "$34.99"
},
{
    name: "Onion Soup", image: "Assets/Menu/Onion Soup.jpg",
    desc: "Classic French onion soup topped with melted cheese and toasted bread.",
    price: "$8.99"
}
];

//creates the cards
let foodContainer = document.getElementById('foodContainer');

if (foodContainer) {

    for (let i = 0; i < food.length; i++) {
        let m = food[i];

        let item = document.createElement("div");
        item.classList.add("foodCard");

        item.innerHTML = 
            "<h1>" + m.name + "</h1>" +
            "<img src='" + m.image + "'height='200' 'width='300'>" +
            "<p>" + m.desc + "</p>" +
            "<h2>" + m.price + "</h2>" +
            "<button class='cartButton'>Add to Cart</button>";

        foodContainer.appendChild(item);

        item.querySelector(".cartButton").addEventListener("click", function(){
            cart.push(m);
            updateCart();
        });

    }

};

//updates the cart window
function updateCart(){

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartOpen = document.getElementById("cartOpen");

    cartItems.innerHTML = "";

    let total = 0;

    for(let i = 0; i < cart.length; i++){

        let item = document.createElement("div");
        item.textContent = cart[i].name + " - " + cart[i].price;
        cartItems.appendChild(item);

        total += parseFloat(cart[i].price.replace("$",""));
    }

    cartTotal.textContent = "Total: $" + total.toFixed(2);

    cartOpen.textContent = "Cart (" + cart.length + ")";
};

const cartOpenBtn = document.getElementById("cartOpen");
const cartCloseBtn = document.getElementById("cartClose");
const checkOutBtn = document.getElementById("checkOut");
const cartBox = document.getElementById("cartBox");

if (cartOpenBtn) {
    cartOpenBtn.onclick = function(){
        cartBox.style.display = "block";
    };
}

if (cartCloseBtn) {
    cartCloseBtn.onclick = function(){
        cartBox.style.display = "none";
    };
}

if (checkOutBtn) {
    checkOutBtn.onclick = function(){
        cart = [];
        updateCart();
    };
}


//Email submitter
const reserveForm = document.querySelector('.reserveForm');
const successMessage = document.getElementById('successMessage');

if (reserveForm) {
    reserveForm.addEventListener('submit', function(event) {
        event.preventDefault();
        reserveForm.style.display = 'none';
        successMessage.style.display = 'block';
    });
};

//Accordion Menu
const acc = document.getElementsByClassName('faqTitle');

for (let i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            for (let x = 0; x < acc.length; x++) { 
                    acc[x].nextElementSibling.style.maxHeight = null; 
                };
            panel.style.maxHeight = panel.scrollHeight + "px";
        };
    });

};

//Back to top button
const backToTopButton = document.querySelector('.backToTop');

window.addEventListener("scroll", () => { 
    if (window.scrollY >= 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

//Career application submitter
const careerForm = document.getElementById('careerForm');
const careerSuccessMessage = document.getElementById('careerSuccessMessage');

if (careerForm) {
    careerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        careerForm.style.display = 'none';
        careerSuccessMessage.style.display = 'flex';
    });
};

//Hamburger menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
};