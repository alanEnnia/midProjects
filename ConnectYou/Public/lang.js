const langSBtn = document.querySelector("#lBtn");
var actualLanguage = "EN";

langSBtn.addEventListener("click", function() {
    if ( actualLanguage == 'FR' ){ 
        actualLanguage = "EN";  
        switchLang(actualLanguage);
        langSBtn.style.animation = "LBtnDeactivate 550ms linear";
        langSBtn.style.transform = "translateY(0px)";
        langSBtn.textContent = "EN";

    } else
    if (actualLanguage == 'EN') {
        actualLanguage = "FR";
        switchLang(actualLanguage);
        langSBtn.style.animation = "LBtnActivate 550ms linear";
        langSBtn.style.transform = "translateY(67px)";     
        langSBtn.textContent = "FR";     
    }
});


function switchLang(actualLanguage){
    if(actualLanguage == "FR"){

        firstText.innerHTML = "Salut! <br> laissez-moi vous aider à trouver votre prochain emploi :)";
        
        C1p.innerHTML = "Dites-moi d'abord....";
        C1p1.innerHTML = "Quel est ton nom :";
        C1Btn.innerHTML = "suivant";

        C2p.innerHTML =  "D'accord <span id='name' style='font-weight: 600;'></span> Travaillons dessus ! <br> Vous recherchez un vrai travail ou simplement un stage ?";
        C2Btn.innerHTML = 'Stage';
        C2Btn1.innerHTML = 'Emploi';

        C3p.innerHTML = 'Cool! maintenant, faites-le-moi savoir.... <br>Quelle est ta spécialité?';
        C3Btn.innerHTML = 'Infrastructure Digital';
        C3Btn1.innerHTML = 'Développement Digital';
        C3Btn2.innerHTML = "Gestion d'entreprise";

        C4p.innerHTML = "<span id='sp'></span>!!WOW Nice Spécialiste <span id='name'></span> <br>Maintenant, pour vous donner le meilleur résultat, j'ai besoin que vous me disiez ce qui vous intéresse le plus....  ";

        C5p.innerHTML = "<p>Okey, j'ai reçu vos informations !<br> donnez-moi une seconde pour voir quelles entreprises correspondent à vos états..... </p>";

        C6H0.innerHTML = "Voici votre liste :)";
        jobName.innerHTML = "nom du travail";
        companyName.innerHTML = "Nom de l'entreprise";
        locationC.innerHTML = "localisation";
        dateC.innerHTML = "date";
        jobType.innerHTML = "Type d'emploi";
        applyLink.innerHTML = "lien d'applique";
        

        nameC2 = document.querySelector('#C2 #name');
        nameC4 = document.querySelector("#C4 #name");
        specialityC= document.querySelector('#C4 #sp');

        nameC2.innerHTML = username;
        nameC4.innerHTML = username;
        specialityC.innerHTML = speciality;

    } else 
    if (actualLanguage == 'EN'){
        
        firstText.innerHTML = "Hey There! <br> let’s me help you find your next job :)";
        
        C1p.innerHTML = "Tell me first..";
        C1p1.innerHTML = "What is your name :";
        C1Btn.innerHTML = "next";

        C2p.innerHTML =  "Okay <span id='name' style='font-weight: 600;'></span> Let's work on it! <br> Are you looking for a real job or just an internship? ";
        C2Btn.innerHTML = 'Internship';
        C2Btn1.innerHTML = 'Job';

        C3p.innerHTML = 'Cool! now Let Me Know.... <br>What is Your  speciality?';
        C3Btn.innerHTML = 'Infrastructure Digital';
        C3Btn1.innerHTML = 'Development Digital';
        C3Btn2.innerHTML = "Business Management";

        C4p.innerHTML = "<span id='sp'></span>!! WOW Nice Specialist <span id='name'></span> <br> Now to give you the best result i need you to tell me about what interest you more....";

        C5p.innerHTML = "<p>Okey,i received your informations!<br>  give me a second to see what jobs matches with your states..... </p>";

        C6H0.innerHTML = "Here is your List :)";
        jobName.innerHTML = "Job Name";
        companyName.innerHTML = "Company Name";
        locationC.innerHTML = "Location";
        dateC.innerHTML = "Date";
        jobType.innerHTML = "Job Type";
        applyLink.innerHTML = "Apply Link";

        nameC2 = document.querySelector('#C2 #name');
        nameC4 = document.querySelector("#C4 #name");
        specialityC= document.querySelector('#C4 #sp');

        nameC2.textContent = username;
        nameC4.textContent = username;
        specialityC.textContent = speciality;
          
    }
}