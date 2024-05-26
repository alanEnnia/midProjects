const numbers = ["2black.png", "3black.png", "kblack.png", "qblack.png"];
let indexs = [];
let indexsR = {};
for (let i= 0; i <numbers.length*2; i++){
    let index = Math.floor(Math.random()*4);
    if (!indexs.includes(index)){
            indexs.push(index);
            indexsR[index] = 1;
    } 
    if (indexs.includes(index) && indexsR[index] == 1 ){
        indexs.push(index);
        indexsR[index] += 1;
        
    }
    if (indexs.includes(index) && indexsR[index] == 2 ){
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

const cards = document.querySelectorAll(".card .imgCard");
let i = 0;
cards.forEach(card => {
    
    card.src = "./imgs/cards/" + numbers[indexs[i]];
    i++;
})
