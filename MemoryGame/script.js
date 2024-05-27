const numbers = ["2black.png", "3black.png", "kblack.png", "qblack.png"];
let indexs = [];
let indexsR = {};
for (let i = 0; i < numbers.length * 2; i++) {
    let index = Math.floor(Math.random() * 4);
    if (!indexs.includes(index)) {
        indexs.push(index);
        indexsR[index] = 1;
    }
    if (indexs.includes(index) && indexsR[index] == 1) {
        indexs.push(index);
        indexsR[index] += 1;
    }
    if (indexs.includes(index) && indexsR[index] == 2) {
        continue;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffleArray(indexs);

var cards = document.querySelectorAll(".card .imgCard");
let i = 0;
cards.forEach(card => {
    card.src = "./imgs/cards/" + numbers[indexs[i]];
    i++;
});

let openedCards = []; // Keep track of opened cards

const unknownCards = document.querySelectorAll(".card .unkownC");
unknownCards.forEach(Ucard => {
    Ucard.addEventListener("click", function() {
        if (openedCards.length < 2) {
            const card = document.querySelector(`img[alt="${Ucard.alt}"].imgCard`);
            Ucard.style.display = "none";
            card.style.display = "block";
            openedCards.push({ Ucard, card });
            displayHandler();
        }
    });
});

cards.forEach(card => {
    card.addEventListener("click", function() {
        if (openedCards.length < 2 && card.style.display !== "block") {
            const Ucard = document.querySelector(`img[alt="${card.alt}"].unkownC`);
            card.style.display = "none";
            Ucard.style.display = "block";
            openedCards.push({ Ucard, card });
            displayHandler();
        }
    });
});

function displayHandler() {
    if (openedCards.length === 2) {
        const src1 = openedCards[0].card.src;
        const src2 = openedCards[1].card.src;
        if (src1 === src2) {
            // Cards match, keep them displayed
            openedCards = [];
        } else {
            // Cards don't match, hide them after a delay
            setTimeout(() => {
                openedCards.forEach(({ Ucard, card }) => {
                    Ucard.style.display = "block";
                    card.style.display = "none";
                });
                openedCards = [];
            }, 1000); // Adjust delay as needed
        }
    }
}
