const bdayapp = {};

bdayapp.displayPhoto = function () {

    // on click, hide the button and show the card
    const btn = document.getElementById('main-btn');

    btn.addEventListener('click', () => {
        btn.classList.add('hide');

        const second = document.getElementById('second-page');
        second.classList.toggle('hide');
    });
}

bdayapp.init = function () {
    bdayapp.displayPhoto();
}

// document ready
document.addEventListener("DOMContentLoaded", function () {
 bdayapp.init();
});



