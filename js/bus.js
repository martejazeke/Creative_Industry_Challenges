function filterEmirates() {
    var selectedEmirate = document.getElementById("emirate-dropdown").value;
    var cards = document.querySelectorAll(".emirate-card");

    cards.forEach(function(card) {
        if (selectedEmirate === "all") {
            gsap.to(card, { duration: 0.5, opacity: 1, y: 0, display: "flex" });
        } else {
            if (card.getAttribute("data-emirate") === selectedEmirate) {
                gsap.to(card, { duration: 0.5, opacity: 1, y: 0, display: "flex" });
            } else {
                gsap.to(card, { duration: 0.5, opacity: 0, y: 50, display: "none" });
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("emirate-dropdown").addEventListener('change', filterEmirates);
});


function sortBusTimings() {
    let emirateSections = document.querySelectorAll('.emirate-section');

    emirateSections.forEach(section => {
        let emirateCards = Array.from(section.querySelectorAll('.emirate-card'));
        
        emirateCards.sort((a, b) => {
            let timeA = new Date('1970/01/01 ' + a.querySelector('.time').textContent.trim());
            let timeB = new Date('1970/01/01 ' + b.querySelector('.time').textContent.trim());
            
            return timeA - timeB;
        });

        section.innerHTML = '';

        emirateCards.forEach(card => {
            section.appendChild(card);
        });
    });
}


window.onload = function () {
    sortBusTimings();
};