
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
//Dynamic Content Rendering
const food = [
    {
    name: "Ribeye Steak", image: "Assets/Menu/Ribeye Steak.jpg",
    desc: "A rich, marbled ribeye grilled to perfection and finished with garlic butter."
},
{
    name: "New York Strip", image: "Assets/Menu/New York Strip.jpg",
    desc: "A classic New York strip steak with bold flavor and a perfectly seared crust."
},
{
    name: "Filet Mignon", image: "Assets/Menu/Filet Mignon.jpg",
    desc: "An incredibly tender cut of beef served with herb butter and roasted vegetables."
},
{
    name: "Burger", image: "Assets/Menu/Burger.jpg",
    desc: "A juicy grilled burger topped with lettuce, tomato, and cheese, served with fries."
},
{
    name: "Roasted Chicken", image: "Assets/Menu/Roasted Chicken.jpg",
    desc: "Seasoned roasted chicken served with garlic potatoes and fresh vegetables."
},
{
    name: "Chicken Sandwich", image: "Assets/Menu/Chicken Sandwich.jpg",
    desc: "A crispy chicken breast sandwich with lettuce, tomato, and house sauce."
},
{
    name: "Hot Wings", image: "Assets/Menu/Hot Wings.jpg",
    desc: "Crispy chicken wings tossed in a spicy house buffalo sauce."
},
{
    name: "Chicken Fingers", image: "Assets/Menu/Chicken Fingers.jpg",
    desc: "Golden fried chicken tenders served with honey mustard dipping sauce."
},
{
    name: "Pork Chop", image: "Assets/Menu/Pork Chops.jpg",
    desc: "Juicy grilled pork chops seasoned with herbs and served with mashed potatoes."
},
{
    name: "BBQ Ribs", image: "Assets/Menu/BBQ Ribs.jpg",
    desc: "Slow-cooked pork ribs glazed with smoky barbecue sauce."
},
{
    name: "Club Sandwich", image: "Assets/Menu/Club Sandwich.jpg",
    desc: "A stacked sandwich with roasted turkey, bacon, lettuce, tomato, and mayo."
},
{
    name: "Roasted Salmon", image: "Assets/Menu/Roasted Salmon.jpg",
    desc: "Fresh salmon roasted with lemon and herbs, served with seasonal vegetables."
},
{
    name: "Fried Shrimp", image: "Assets/Menu/Fried Shrimp.jpg",
    desc: "Crispy fried shrimp served with cocktail sauce and a side of coleslaw."
},
{
    name: "Lobster Tail", image: "Assets/Menu/Lobster Tail.jpg",
    desc: "Succulent lobster tail broiled and served with warm drawn butter."
},
{
    name: "Onion Soup", image: "Assets/Menu/Onion Soup.jpg",
    desc: "Classic French onion soup topped with melted cheese and toasted bread."
}
];

let foodContainer = document.getElementById('foodContainer');

if (foodContainer) {

    for (let i = 0; i < food.length; i++) {
        let m = food[i];

        let item = document.createElement("div");
        item.classList.add("foodCard");

        item.innerHTML = 
            "<h1>" + m.name + "</h1>" +
            "<img src='" + m.image + "'height='200' 'width='300'>" +
            "<p>" + m.desc + "</p>";

        foodContainer.appendChild(item);

    }

};

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
}