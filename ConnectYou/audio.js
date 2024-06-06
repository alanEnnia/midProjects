document.addEventListener('DOMContentLoaded', function() {
    const currentAudio = document.querySelector('#currentAudio'); 

    document.body.addEventListener('click', function() {
        playAudio(0);
        document.body.removeEventListener('click', arguments.callee);
    });
});


function playAudio(actualPart){
    if (actualPart != 0) {
        if (actualLanguage == 'EN'){ 
            currentAudio.src = "./vocals/EN/C" + actualPart +".mp3";
            currentAudio.play(); 
        } else
        if(actualLanguage == 'FR') {
            currentAudio.src = "./vocals/FR/C" + actualPart +"Fr.mp3"; 
            currentAudio.play(); 
        }  
    } else {
        currentAudio.play();
    }
}