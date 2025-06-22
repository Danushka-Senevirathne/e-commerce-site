// import laptop data form object array
import {laptops} from './js/laptop.js';


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