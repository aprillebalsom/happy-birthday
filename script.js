const bdayapp = {};

bdayapp.hat = [
    {
        name:'party-hat',
        image: './assets/party-hat.png',
        alt: 'A party hat.',
        class: 'party-items party-hat'
    },
    {
        name: 'top-hat',
        image: './assets/top-hat.png',
        alt: 'A top hat.',
        class: 'party-items top-hat'
    },
    {
        name: 'head-band',
        image: './assets/star-headband.png',
        alt: 'A star headband.',
        class: 'party-items head-band'
    }
]

bdayapp.cat = [
    {
        name: 'cat-1',
        image: './assets/cat.png',
        alt: 'A white cat lying on a chair.',
        class: 'party-items cat-1'
    },
    {
        name: 'cat-2',
        image: './assets/cat.png',
        alt: `A white cat sitting on a man's head.`,
        class: 'party-items cat-2'
    },
    {
        name: 'cat-3',
        image: './assets/cat.png',
        alt: 'A white cat lying on a ledge.',
        class: 'party-items cat-3'
    }
]

bdayapp.surprise = [
    {
        name: 'funky-glasses',
        image: './assets/funky-glasses.png',
        alt: 'Funky sunglasses.',
        class: 'party-items funky-glasses'
    },
    {
        name: 'bacon-socks',
        image: '/assets/bacon-socks.png',
        alt: `Funky socks.`,
        class: 'party-items bacon-socks'
    },
    {
        name: 'dilly-bar',
        image: './assets/dilly-bar.png',
        alt: 'A dilly bar icecream from Dairy Queen.',
        class: 'party-items dilly-bar'
    }
]

bdayapp.displayPhoto = function () {
  
    // on click, hide the button and show the card
    const btn = document.getElementById('main-btn');

    btn.addEventListener('click', () => {

        //remove the height on the first section
        const first = document.getElementById('first-page');
        first.style.height = "0px";

        //hide the button
        btn.classList.add('hide');

        const second = document.getElementById('second-page');
        second.classList.toggle('hide');
    });
}

bdayapp.selectPartyItems = function () {

    const btns = document.querySelectorAll('.party-btn');

    btns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const btnId = event.target.id;
        
            if (btnId === 'hat'){
                bdayapp.randomizePartyItems(bdayapp.hat);

            } else if (btnId === 'cat') {
                bdayapp.randomizePartyItems(bdayapp.cat);

            } else if (btnId === 'surprise') {
                bdayapp.randomizePartyItems(bdayapp.surprise);

            }
        });
    })
}

bdayapp.randomizePartyItems = function (array) {
    const rndmPartyItem = Math.floor(Math.random() * array.length);
    
    bdayapp.displayPartyItems(array[rndmPartyItem]);
}


bdayapp.displayPartyItems = function (item) {
   
    const image = document.createElement('img');
    image.setAttribute('src', `${item.image}`);
    image.setAttribute('alt',`${item.alt}`);
    image.setAttribute('class', `${item.class}`);
   

    const photo = document.querySelector('.photo');
    photo.appendChild(image);
}

bdayapp.displayMsg = function () {


    const btn = document.getElementById('second-btn');
    const third = document.getElementById('third-page');
    const exitBtn = document.getElementById('exit');

    // on click, hide the button and show the card
    btn.addEventListener('click', () => {
    
        third.classList.toggle('hide');
    });

    // on click, hide the card again
    exitBtn.addEventListener('click', () => {

        third.classList.toggle('hide');
    });

}

// function that kicks off the app
bdayapp.init = function () {
    bdayapp.displayPhoto();
    bdayapp.displayMsg();
    bdayapp.selectPartyItems();
}

// document ready
document.addEventListener("DOMContentLoaded", function () {
 bdayapp.init();
});



