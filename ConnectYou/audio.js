    const currentAudio = document.querySelector('#currentAudio'); 
 

    let isFirstTime = true;

    function playAudio(actualPart){
        
        if (actualPart != 0) {
            if (actualLanguage == 'EN'){ 
                currentAudio.src = "./vocals/EN/C" + actualPart +".mp3";
                currentAudio.play(); 
            } else if(actualLanguage == 'FR') {
                currentAudio.src = "./vocals/FR/C" + actualPart +"Fr.mp3"; 
                currentAudio.play(); 
            }  
        } else {
            currentAudio.play();
        }
    }
    

    currentAudio.addEventListener('play',()=>{
        increaseCameraPosWithDelay(10, 800, 50);
    });

    currentAudio.addEventListener('ended',()=>{
        decreaseCameraPosWithDelay(10,800,50);
    });