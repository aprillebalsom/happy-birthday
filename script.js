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

bdayapp.displayMsg = function () {

    // on click, hide the button and show the card
    const btn = document.getElementById('second-btn');

    btn.addEventListener('click', () => {
        
        const third = document.getElementById('third-page');
        third.classList.toggle('hide');
    });
}

// function that kicks off the app
bdayapp.init = function () {
    bdayapp.displayPhoto();
    bdayapp.displayMsg();
}

// document ready
document.addEventListener("DOMContentLoaded", function () {
 bdayapp.init();
});



