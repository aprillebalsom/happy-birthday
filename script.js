const bdayapp = {};

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
    // const hatBtn = document.getElementById('hat');
    // const catBtn = document.getElementById('cat');
    // const surpriseBtn = document.getElementById('surprise');

    const btns = document.querySelectorAll('.party-btn');

    btns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
           const btnId = event.target.id;

            if (btnId === 'hat'){
                bdayapp.randomizePartyItems();

            } else if (btnId === 'cat') {
                bdayapp.randomizePartyItems();

            } else if (btnId === 'surprise') {
                bdayapp.randomizePartyItems();

            }
        });
    })


}

bdayapp.randomizePartyItems = function () {

    

}


bdayapp.displayPartyItems = function () {

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



