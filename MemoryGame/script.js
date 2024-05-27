const numbers = ["2black.png", "3black.png", "kblack.png", "qblack.png"];
let indexs = [];

for (let i = 0; i < numbers.length * 2; i++) {
    indexs.push(i % numbers.length);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffleArray(indexs);

const cards = document.querySelectorAll(".card .imgCard");
cards.forEach((card, i) => {
    card.src = "./imgs/cards/" + numbers[indexs[i]];
});

/**adjusting the rules */

let openedCards = []; 

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


let Wrounds = 0;



function displayHandler() {
    if (openedCards.length === 2) {
        const src1 = openedCards[0].card.src;
        const src2 = openedCards[1].card.src;
        if (src1 === src2) {
            openedCards = [];
            Weffects();
            Wrounds++;
            if (Wrounds == 4) {
                document.querySelector("#motivationalTxt p").textContent = "YOU WIN!!!";
                setTimeout(() => {
                        location.reload();
                }, 1000);
            }
            
        } else {
            setTimeout(() => {
                openedCards.forEach(({ Ucard, card }) => {
                    Ucard.style.display = "block";
                    card.style.display = "none";
                });
                openedCards = [];
            }, 1000); 
        }
    }
}

function Weffects(){
        const stars = document.querySelectorAll(".stars .star");

        stars.forEach(star => {
            star.style.animationName = "matchingEf";
            setTimeout(() => {
                star.style.animationName = "";
            }, 1000);
        })
}




