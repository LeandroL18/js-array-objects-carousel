// Al click dell’utente sulle frecce (sia Prev che Next), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

const images = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    },
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    },
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

// selezioniamo il contenitore degli item
const itemsContainer = document.querySelector(".items_container");

// creiamo gli item
for(let i = 0; i < images.length; i++){
    const item = 
    `<div class="item">
        <img src="${images[i].image}" alt="Img1">
        <div class="title">${images[i].title}</div>
        <div class="subtitle">${images[i].text}</div>
    </div>`;

    // inseriamo gli item nel contenitore
    itemsContainer.innerHTML += item;
}

// definizione variabili
let activeItem = 0;

document.getElementsByClassName("item")[activeItem].classList.add("active");

// selezione bottoni
const right = document.getElementById("button_right");
const left = document.getElementById("button_left");

// al click del bottone right spostiamo la classe active all'immagine successiva e se è all'ultima immagin ritorna alla prima
right.addEventListener("click", 
    function(){
        if(activeItem < images.length -1){
            document.getElementsByClassName("item")[activeItem].classList.remove("active");

            activeItem ++;

            document.getElementsByClassName("item")[activeItem].classList.add("active");

        } else if (activeItem === images.length - 1){
            document.getElementsByClassName("item")[activeItem].classList.remove("active");

            activeItem = 0;

            document.getElementsByClassName("item")[activeItem].classList.add("active");
        }

    }
)
 

// al click del bottone left spostiamo la classe active all'immagine precedente e se è alla prima immagine ritorna all'ultima
left.addEventListener("click", 
    function(){
        document.getElementsByClassName("item")[activeItem].classList.remove("active");

        if(activeItem === 0){

            activeItem = images.length - 1;

            document.getElementsByClassName("item")[ activeItem].classList.add("active");
        } else{
            activeItem --;

            document.getElementsByClassName("item")[ activeItem].classList.add("active");
        } 
    }
)