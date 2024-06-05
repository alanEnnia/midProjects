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
const nameC2 = document.querySelector('#C2 span#name');
const C2Btns  = document.querySelectorAll('#C2 .btns button ');
var statue = '';
const C3Btns = document.querySelectorAll('#C3 .btns button');
var speciality = '';
const specialityC = document.querySelector('#C4 #sp');
const nameC3 = document.querySelector('#C4 #name');
const btnC4 = document.querySelector('#C4 #btn');
const btn1C4 = document.querySelector('#C4 #btn1');
const btn2C4 = document.querySelector('#C4 #btn2 ')
const C4Btns = document.querySelectorAll('#C4 .btns input[type="button"]');
var interest = '';
const Particle = document.querySelector('#particleCore');
const C6p = document.querySelector("#C6 p");
const C6btns = document.querySelector('#particleCore #btnContainer');
const C6ExportBtn = document.querySelector('#btnContainer #expoBtn');
const C6ResumeBtn = document.querySelector('#btnContainer #resuBtn');







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
                nameC3.textContent = username;
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
                    C5.style.display = "block";
                    Particle.style.animation = "part5AnParticle 1s ease-in-out";
                    survey.style.animation = "part5AnSurvey 1s ease-in-out";
                    Particle.style.marginLeft = '-800px';
                    Particle.style.marginBottom = '-322px';
                    survey.style.marginRight = '-450px';
                    await delay(100);
                    C5.style.opacity = 1; 
                    await delay(2500);
                    C5.style.opacity = 0;   
                    await delay(500);
                    C5.style.display = 'none';
                    C6.style.display = 'block';
                    await delay(800);
                    C6btns.style.opacity = 1;
                    C6ExportBtn.style.animation = "fromTheTop .8s ease-in-out";
                    C6ResumeBtn.style.animation = "fromTheTop .6s ease-in-out";
                    Particle.style.transform = 'translateY(-10px)';
                    C6.style.opacity = 1;
                });
    });
 }










/* lang and light modes */

const lightSBtn = document.querySelector("#lightD");
const langSBtn = document.querySelector("#lBtn");
var actualMode = "light";
var actualLanguage = "EN";

loadingParts();
/* export Csv */




