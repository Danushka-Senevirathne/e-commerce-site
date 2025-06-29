// import laptop data form object array
import {laptops} from './js/laptop.js';
import {accessories} from './js/accessories.js';

// for laptop
const laptop_container = document.getElementById('laptop_container');

laptops.forEach(data => {    
    const laptop_card = document.createElement('div');
    laptop_card.className = "laptop_card";
    laptop_card.innerHTML = `
        <div class="lap_image">
            <img src="${data.main_image}" alt="${data.name}">
        </div>
        <h5>${data.brand} ${data.name}</h5>
        <p>${data.price}</p>
        <button>View Specs</button>
    `;
    laptop_container.appendChild(laptop_card);
});

// for accessories
const accessories_container = document.getElementById('accessories_container');

accessories.forEach(data => {    
    const accessories_card = document.createElement('div');
    accessories_card.className = "laptop_card";
    accessories_card.innerHTML = `
        <div class="lap_image">
            <img src="${data.main_image}" alt="${data.name}">
        </div>
        <h5>${data.brand} ${data.name}</h5>
        <p>${data.price}</p>
        <button>View Specs</button>
    `;
    accessories_container.appendChild(accessories_card);
});
