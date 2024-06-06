

var actualPart = 0;
const backBtn = document.querySelector('#backBtn');

/*backBtn logic */
backBtn.addEventListener("click",async function(){
    if (actualPart != 0){
        Cpart = 'C' + actualPart;
        Cpart = document.querySelector('#' + Cpart);
        Cpart.style.opacity = 0;
        if (actualPart != 6){        
            await delay(100);
            Cpart.style.display = "none";
            actualPart--;
            Cpart = 'C' + actualPart;
            Cpart = document.querySelector('#' + Cpart);
            Cpart.style.display = "block";
            await delay(100);
            Cpart.style.opacity = 1;
        }
        else {
            Particle.style.animation = "part5AnParticleR 1s ease-in-out";
            survey.style.animation = "part5AnSurvey 1s ease-in-out";
            survey.style.animation = "part5AnSurveyR 1s ease-in-out";
            C6btns.style.opacity = 0;       
            await delay(800);    
            C6btns.style.display = 'none';
            Particle.style.transform = 'translateY(0px)';
            Particle.style.marginLeft = '0px';
            Particle.style.marginBottom = '0px';
            survey.style.marginRight = '0px';
            Cpart.style.opacity = 0;
            await delay(100);
            Cpart.style.display = "none";
            actualPart = 4;
            Cpart = 'C' + actualPart;
            Cpart = document.querySelector('#' + Cpart);
            Cpart.style.display = "flex";
            await delay(800);
            Cpart.style.opacity = 1;
        }

    }
});
