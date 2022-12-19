//Creo array oggetti
let videoGames = [
    {
        title:'Marvel\'s Spiderman Miles Morales',
        description:'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        image:'01.webp',
    },
    {
        title:'Ratchet & Clank: Rift Apart',
        description:'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality. Jump between action-packed worlds, and beyond at mind-blowing speeds.',
        image:'02.webp',
    },
    {
        title:'Fortnite: Chapter 3',
        description:'The Island has flipped. The Foundation is seeking help from the Loopers and Agent Jones helps him and The Seven reunite and find Geno.',
        image:'03.webp',
    },
    {
        title:'Stray',
        description:'Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
        image:'04.webp',
    },
    {
        title:'Marvel\'s Avengers',
        description:'Marvel\'s Avengers begins at A-Day, where our heroes reveal their own helicarrier powered by an experimental energy source. The celebration turns into a catastrophic accident. Blamed for the tragedy, the Avengers disband.',
        image:'05.webp',
    },
]


const cards_list = document.getElementById('cards');

for (let i = 0; i<videoGames.length; i++){
    let game = videoGames[i];

    console.log(`${game.title} - ${game.description} - ${game.image}`);

    cards_list.innerHTML += `
    <div class="item">
    <img class="cover" src="./img/${game.image}" width="100%"/>
    <div class="text-container">
        <p class="text"><strong>${game.title}</strong></p>
        <p class="text">${game.description}</p>
    </div>
    </div>
    `
}

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');


const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){

    if (itemActive < videoGames.length - 1) {

        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');

        itemActive = itemActive + 1;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');

    }

    else {
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');

        itemActive = 0;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active')
    }
    
});

prev.addEventListener('click', function(){
    
    if (itemActive > 0) {

        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');

        itemActive = itemActive - 1;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');

    }

    else {
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');

        itemActive = videoGames.length - 1;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active')
    }

})


