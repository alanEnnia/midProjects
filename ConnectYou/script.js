const survey = document.querySelector("#survey");
const firstText = document.querySelector("#firstText");
const containers = document.querySelectorAll(".container");


/* the switching between parts */

const C1 = document.querySelector("#C1");
const C2 = document.querySelector("#C2");
const C3 = document.querySelector("#C3");
const C4 = document.querySelector("#C4");
const C5 = document.querySelector("#C5");
const C6 = document.querySelector("#C6");
const formC = document.querySelector('form#formC');
var username = '';
var nameC2 = document.querySelector('#C2 span#name');
const C2Btns  = document.querySelectorAll('#C2 .btns button ');
var statue = '';
const C3Btns = document.querySelectorAll('#C3 .btns button');
var speciality = '';
var specialityC = document.querySelector('#C4 #sp');
var nameC4 = document.querySelector('#C4 #name');
const btnC4 = document.querySelector('#C4 #btn');
const btn1C4 = document.querySelector('#C4 #btn1');
const btn2C4 = document.querySelector('#C4 #btn2 ')
const C4Btns = document.querySelectorAll('#C4 .btns input[type="button"]');
var interest = '';
const Particle = document.querySelector('#particleCore');
const C6btns = document.querySelector('#particleCore #btnContainer');
const C6ExportBtn = document.querySelector('#btnContainer #expoBtn');
const C6ResumeBtn = document.querySelector('#btnContainer #resuBtn');


/*lang*/

const C1p = document.querySelector('#C1 #part2p0');
const C1p1 = document.querySelector('#C1 #part2p1');
const C1Btn = document.querySelector('#C1 #C1Btn');

const C2p  = document.querySelector('#C2  #pContainer');
const C2Btn = document.querySelector('#C2 #internship');
const C2Btn1 =document.querySelector('#C2 #job');

const C3p = document.querySelector('#C3 #pContainer');
const C3Btn = document.querySelector('#C3 #ID');
const C3Btn1 = document.querySelector('#C3 #DD');
const C3Btn2 = document.querySelector('#C3 #BM');

const C4p = document.querySelector("#C4 #pContainer");

const C5p = document.querySelector("#C5 p");

const C6H0 = document.querySelector("#C6 #Header ");
const C6Type = document.querySelector("#C6 #type");
const C6Name = document.querySelector("#C6 #name");

var actualPart = 0;
const backBtn = document.querySelector('#backBtn');



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadingParts(){
    firstText.style.opacity = 1;
    await delay(1000);
    firstText.style.opacity = 0;
    await delay(800);
    firstText.style.display  ="none";
    C1.style.display = "block";
    await delay(100);
    actualPart = 1;
    C1.style.opacity = 1;
    formC.addEventListener('submit',async function(e){
        e.preventDefault();
        username = document.querySelector('#username').value;
        console.log(username);
        C1.style.opacity = 0;
        await delay(800);
        C1.style.display = "none";
        C2.style.display = "block";
        nameC2.textContent = username;
        await delay(100);
        actualPart = 2;
        backBtn.style.opacity = 1;
        C2.style.opacity = 1;
    });

    C2Btns.forEach((btn)=>{
            btn.addEventListener("click",async function(){
                statue = this.id;
                console.log(statue);
                C2.style.opacity = 0;
                await delay(800);
                C2.style.display = "none";
                C3.style.display = "block";
                await delay(100);
                actualPart = 3;
                C3.style.opacity = 1;
            });
    });

    C3Btns.forEach((btn)=>{
            btn.addEventListener("click",async function(){
                speciality = this.id;
                console.log(speciality);
                C3.style.opacity = 0;
                await delay(800);
                C3.style.display = 'none';
                C4.style.display = "block";
                specialityC.textContent = speciality;
                nameC4.textContent = username;
                if (speciality == 'ID'){
                    if (actualLanguage == "EN"){ 
                        btnC4.value = 'Healthcare';
                        btn1C4.value = 'Telecommunications';
                        btn2C4.value = 'Data Centers';
                    } 
                    if (actualLanguage == "FR") {
                        btnC4.value = 'Soins de santé';
                        btn1C4.value = 'Télécommunications';
                        btn2C4.value = 'Centres de données';                                                                                                            }
                }
                if (speciality == 'DD'){
                    if (actualLanguage == "EN") { 
                        btnC4.value = 'EdTech';
                        btn1C4.value = 'Telecommunications';
                        btn2C4.value = 'E-commerce';
                    }
                    if (actualLanguage == "FR") { 
                        btnC4.value = 'Technologie éducative';
                        btn1C4.value = 'Télécommunications';
                        btn2C4.value = 'E-commerce';
                    }
                }
                if (speciality == 'BM'){
                    if (actualLanguage == "EN") { 
                        btnC4.value = 'Manufacturing';
                        btn1C4.value = 'Renewable Energy';
                        btn2C4.value = 'Automotive Industry';
                     }
                    if (actualLanguage == "FR") {
                        btnC4.value = 'Fabrication';
                        btn1C4.value = 'Énergie renouvelable';
                        btn2C4.value = 'Industrie automobile';
                    }}
                await delay(100);
                actualPart = 4;
                C4.style.opacity = 1;
            });
    });

    C4Btns.forEach((btn)=>{
                btn.addEventListener('click',async function(){
                    interest = btn.value;
                    console.log(interest);
                    C4.style.opacity = 0;
                    await delay(800);
                    C4.style.display = 'none';
                    actualPart = 5;
                    backBtn.style.opacity = 0;
                    C5.style.display = "block";
                    Particle.style.animation = "part5AnParticle 1s ease-in-out";
                    survey.style.animation = "part5AnSurvey 1s ease-in-out";
                    Particle.style.marginLeft = '-800px';
                    Particle.style.marginBottom = '-322px';
                    survey.style.marginRight = '-450px';
                    await delay(100);
                    backBtn.style.opacity = 0;
                    actualPart = 'C5';
                    C5.style.opacity = 1; 
                    await delay(2500);
                    C5.style.opacity = 0;   
                    await delay(500);
                    C5.style.display = 'none';
                    actualPart = 6;
                    backBtn.style.opacity = 1;
                    C6.style.display = 'flex';
                    await delay(800);
                    C6btns.style.opacity = 1;
                    C6ExportBtn.style.animation = "fromTheTop .8s ease-in-out";
                    C6ResumeBtn.style.animation = "fromTheTop .6s ease-in-out";
                    Particle.style.transform = 'translateY(-20px)';
                    C6.style.opacity = 1;
                });
    });
 }


/* lang and light modes */

const lightSBtn = document.querySelector("#lightD");
const langSBtn = document.querySelector("#lBtn");
var actualMode = "light";
var actualLanguage = "EN";

//light func

function switchLight(actualMode){

    if (actualMode == "dark") {
            const styleBlock = `body {
                background: #121212!important;
                color: #E7E7E7;
            }

            i,#lBtn {
                color: #121212!important;
            }
            
            div#backBtn {
                background: #333!important;
                border: 3px solid #444!important;
            }
            
            #backBtn:hover {
                background: #444!important;
            }
            
            #langBtn {
                background: #333!important;
                border: 5px solid #444!important;
            }
            
            #lBtn {
                border: 5px solid #444!important;
            }
            
            #mode {
                background: #333!important;
                border: 5px solid #444!important;
            }
            
            #lightD {
                border: 5px solid #444!important;
            }

            input {
                color:white;
            }

            table, tr, td, th {
                border: 1px solid white!important;
                border-collapse: collapse;
            }
            
            #expoBtn, #resuBtn {
              
                box-shadow: 2px 2px 5px rgba(119, 0, 255, 0.473);
            
            }
            
                #expoBtn:hover ,#resuBtn:hover{
                    box-shadow: 4px 4px 10px rgba(119, 0, 255, 0.9);
                }
            
            `;

            const style = document.createElement('style');
            style.setAttribute("id", "styleV2");
            style.innerHTML = styleBlock;
            document.head.appendChild(style);
    } else {
        document.querySelector('style#styleV2').remove();
    }
}

lightSBtn.addEventListener("click", function() {
    if (actualMode == "light") {
        actualMode = "dark";
        switchLight(actualMode);            
        lightSBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
        lightSBtn.style.animation = "LBtnActivate 550ms linear";
        lightSBtn.style.transform = "translateY(67px)";
    } else {
        actualMode = "light";
        switchLight(actualMode);
        lightSBtn.innerHTML = '<i class="fa-regular fa-sun">';
        lightSBtn.style.animation = "LBtnDeactivate 550ms linear";
        lightSBtn.style.transform = "translateY(0px)";
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
        C6Type.innerHTML = "genre";
        C6Name.innerHTML = "nom";

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

        C5p.innerHTML = "<p>Okey,i received your informations!<br>  give me a second to see what companies matches with your states..... </p>";

        C6H0.innerHTML = "Here is your list :)";
        C6Type.innerHTML = "type";
        C6Name.innerHTML = "name";

        nameC2 = document.querySelector('#C2 #name');
        nameC4 = document.querySelector("#C4 #name");
        specialityC= document.querySelector('#C4 #sp');

        nameC2.textContent = username;
        nameC4.textContent = username;
        specialityC.textContent = speciality;
          
    }
}

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


loadingParts();


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


