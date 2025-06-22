function search (){
    //inport input text as a lowercase
    const inputText = document.getElementById('search_laptop').value.toLowerCase();
    // import laptop card
    const laptopCard = document.querySelectorAll('.laptop_card');

    // call all the card one by one
    laptopCard.forEach(card =>{
        // get card id as a lowercase
        const id_text = card.querySelector('h5').textContent.toLowerCase();
        //search algoruthm
        card.style.display = id_text.includes(inputText) ? '': 'none';
    });
}

function searchAccesories (){
    //inport input text as a lowercase
    const inputText = document.getElementById('accesorries_search_text').value.toLowerCase();
    // import accessories card
    const accCard = document.querySelectorAll('.accessories_card');

    // call all the card one by one
    accCard.forEach(card =>{
        // get card id as a lowercase
        const id_text = card.querySelector('h5').textContent.toLowerCase();
        //search algoruthm
        card.style.display = id_text.includes(inputText) ? '': 'none';
    });
}