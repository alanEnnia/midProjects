let part1  ='' ;
let part2p1 ='' ;
let part2p0 ='' ;
let part2Btn0 ='' ;
let part3p0 ='' ;
let part3Btn0 ='' ;
let part3Btn1 ='' ;
let part4p0 ='' ;
let part4Btn0 = '' ;
let part4Btn1 ='' ;
let part4Btn2 ='' ;
let part5p0 ='' ;  
let part6Name ='' ;
let part6H0 ='' ;
let part6Type ='' ;
   
   
    const survey = document.querySelector("#survey");
    // lang light btns  Animation sec 03 
    const lightSBtn = document.querySelector("#lightD");
    var actualMode = "light";

    let actualLanguage = "EN";
    const langSBtn = document.querySelector("#lBtn");

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

    function switchLang(lang) {
        if (part1 !=='' && lang == 'FR'  ) {
            part1.innerHTML = "Salut! <br> laissez-moi vous aider à trouver votre prochain emploi :)";
        } else 
        if (part1 !=='' && lang == 'EN' ) {
            part1.innerHTML = "Hi! <br> let me help you find your next job :)";
        }
        if (part2p1 !=='' && lang == 'FR'){
            part2p0.innerHTML = "Dites-moi d'abord....";
            part2p1.innerHTML = "Quel est ton nom :";
            part2Btn0.innerHTML = "suivant";

        } else 
        if (part2p1 !=='' && lang == 'EN'){
                part2p0.innerHTML = 'Tell me first..';
                part2p1.innerHTML = "What is your name :";
                part2Btn0.innerHTML = "next";
        }

        if (part3p0 !==''  && lang == 'FR') {
            part3p0.innerHTML = "D'accord <span id='name' style='font-weight: 600;'></span> Travaillons dessus ! <br> Vous recherchez un vrai travail ou simplement un stage ?";
            part3Btn0.innerHTML = 'Stage';
            part3Btn1.innerHTML = 'emploi';
        } else 
        if (part3p0 !==''  && lang == 'EN'){

            part3p0.innerHTML = "Okay <span id='name' style='font-weight: 600;'></span> Let's work on it! <br> Are you looking for a real job or just an internship? ";
            part3Btn0.innerHTML = 'Internship';
            part3Btn1.innerHTML = 'Job';

        }

        if(part4p0 !==''  && lang == 'FR' ) {

            part4p0.innerHTML = 'Cool! maintenant, faites-le-moi savoir.... <br>Quelle est ta spécialité?';
            part4Btn0.innerHTML = 'Infrastructure Digital';
            part4Btn1.innerHTML = 'Développement Digital';
            part4Btn2.innerHTML = "Gestion d'entreprise";
        }else 
        if (part4p0 !==''  && lang == 'EN'){

            part4p0.innerHTML = 'Cool! now Let Me Know.... <br>What is Your  speciality?';
            part4Btn0.innerHTML = 'Infrastructure Digital';
            part4Btn1.innerHTML = 'Development Digital';
            part4Btn2.innerHTML = "Business Management";

        }


        if (part5p0 !== ''  && lang == 'FR'){

            part5p0.innerHTML = "<span id='sp'></span>!!WOW Nice Spécialiste <span id='name'></span> <br>Maintenant, pour vous donner le meilleur résultat, j'ai besoin que vous me disiez ce qui vous intéresse le plus....  ";
        } else 
        if (part5p0 !==''  && lang == 'EN') {

            part5p0.innerHTML = "<span id='sp'></span>!! WOW Nice Specialist <span id='name'></span> <br> Now to give you the best result i need you to tell me about what interest you more....";
        }

        if (part6H0 !==''  && lang == 'FR'){
            part6H0.innerHTML = "Voici votre liste :)";
            part6Type.innerHTML = "genre";
            part6Name.innerHTML = "nom";
        } else 
        if (part6H0 !==''  && lang == 'EN'){

            part6H0.innerHTML = "Here is your list :)";
            part6Name.innerHTML = "name";
            part6Type.innerHTML = "type";  

        }
}

    function switchLight(mode){

        if ()


    }



    lightSBtn.addEventListener("click", function() {
        if (actualMode == "light") {
            actualMode = "dark";
            lightSBtn.style.animation = "LBtnActivate 550ms linear";
            lightSBtn.style.transform = "translateY(67px)";
        } else {
            actualMode = "light";
            lightSBtn.style.animation = "LBtnDeactivate 550ms linear";
            lightSBtn.style.transform = "translateY(0px)";
        }
    });

/*lang logic */

    setTimeout(()=>{
            part1  = document.querySelector('#survey #firstText');
            survey.style.opacity = 0;

            

    },1200);
    setTimeout(()=>{
            //name part 00           
            survey.style.opacity = 1;
            fetch('index00.html')
            .then(response => response.text())
            .then(data => {
                survey.innerHTML = data;
                 part2p1 = document.querySelector('#survey #part2p1');
                 part2p0 = document.querySelector('#survey #part2p0');
                 part2Btn0 = document.querySelector('#survey #part2Btn');
                switchLang(actualLanguage);
                    const formC = document.querySelector('form#formC');
                    formC.addEventListener('submit',function (e){
                            e.preventDefault();
                            let username = document.querySelector('#username').value;
                            console.log(username);
                            //status part
                            fetch('index01.html')
                            .then(response => response.text())
                            .then(data => {
                                survey.style.opacity = 0;
                                setTimeout (()=>{
                                    part1 = '';
                                    survey.innerHTML = data; 
                                     part3p0 = document.querySelector('#survey #pContainer');
                                     part3Btn0 = document.querySelector('#survey #internship');
                                     part3Btn1 = document.querySelector('#survey #job');
                                    switchLang(actualLanguage);
                                    document.querySelector('span#name').textContent = username;
                                    survey.style.opacity = 1;
                                    let btns  = document.querySelectorAll('.btns button ');
                                    btns.forEach( btn =>{
                                            btn.addEventListener('click',() =>{
                                                    if (btn.id == "job" || btn.id == "internship") {
                                                        let status  = btn.id;
                                                        console.log(status); 
                                                        //specialist part
                                                        fetch('index02.html')
                                                        .then(response => response.text())
                                                        .then(data =>{
                                                             survey.style.opacity = 0;
                                                             setTimeout(()=>{
                                                                     part3p0 = '';
                                                                     part3Btn0 = '';
                                                                     part3Btn1 = '';
                                                                     survey.innerHTML = data;
                                                                     part4p0 = document.querySelector('#survey #pContainer');
                                                                     part4Btn0 =  document.querySelector('#survey #ID');
                                                                     part4Btn1 = document.querySelector('#survey #DD');
                                                                     part4Btn2 = document.querySelector('#survey #BM');
                                                                     switchLang(actualLanguage);
                                                                     survey.style.opacity = 1;
                                                                     let btns = document.querySelectorAll(".btns button");
                                                                     btns.forEach (btn =>{
                                                                             btn.addEventListener('click',()=>{
                                                                                        survey.style.opacity = 0;
                                                                                         if (btn.id == "ID"|| btn.id == "DD" || btn.id == "BM"){
                                                                                             let specialist = btn.id;
                                                                                             //interest part
                                                                                             fetch('index03.html')
                                                                                             .then(response => response.text())
                                                                                             .then(data =>{
                                                                                                    setTimeout(()=>{
                                                                                                        part4p0 = '';
                                                                                                        part4Btn0 = '';
                                                                                                        part4Btn1 = '';
                                                                                                        part4Btn2 = '';
                                                                                                        survey.innerHTML = data;
                                                                                                        part5p0 = document.querySelector('#survey #pContainer');   
                                                                                                        switchLang(actualLanguage);
                                                                                            
                                                                                                        let  specialistC = document.querySelector('#sp');
                                                                                                        let   userC = document.querySelector('#name');
                                                                                                        let  btns = document.querySelectorAll('.btns input');
                                                                                                        let  btn = document.querySelector("#btn");
                                                                                                        let  btn1 = document.querySelector("#btn1");
                                                                                                        let  btn2 = document.querySelector("#btn2");
                                                                                                        
                                                                                                        specialistC.textContent = specialist;
                                                                                                        userC.textContent = username;
                                                                                                        if (specialist == 'ID'){
                                                                                                            if (actualLanguage == "EN"){ 
                                                                                                                btn.value = 'Healthcare';
                                                                                                                btn1.value = 'Telecommunications';
                                                                                                                btn2.value = 'Data Centers';
                                                                                                            } 
                                                                                                            if (actualLanguage == "FR") {
                                                                                                                btn.value = 'Soins de santé';
                                                                                                                btn1.value = 'Télécommunications';
                                                                                                                btn2.value = 'Centres de données';                                                                                                            }
                                                                                                        }
                                                                                                        if (specialist == 'DD'){
                                                                                                            if (actualLanguage == "EN") { 
                                                                                                                btn.value = 'EdTech';
                                                                                                                btn1.value = 'Telecommunications';
                                                                                                                btn2.value = 'E-commerce';
                                                                                                            }
                                                                                                            if (actualLanguage == "FR") { 
                                                                                                                btn.value = 'Technologie éducative';
                                                                                                                btn1.value = 'Télécommunications';
                                                                                                                btn2.value = 'E-commerce';
                                                                                                            }
                                                                                                        }
                                                                                                        if (specialist == 'BM'){
                                                                                                            if (actualLanguage == "EN") { 
                                                                                                            btn.value = 'Manufacturing';
                                                                                                            btn1.value = 'Renewable Energy';
                                                                                                            btn2.value = 'Automotive Industry';
                                                                                                             }
                                                                                                            if (actualLanguage == "FR") {
                                                                                                                btn.value = 'Fabrication';
                                                                                                                btn1.value = 'Énergie renouvelable';
                                                                                                                btn2.value = 'Industrie automobile';
                                                                                                            }
                                                                                                        }
                                                                                                        part5p0 = '';
                                                                                                        survey.style.opacity = 1;
                                                                                                        btns.forEach(btn =>{
                                                                                                                btn.addEventListener("click",()=>{
                                                                                                                    var interest  = btn.value;
                                                                                                                    if (actualLanguage == 'EN') {
                                                                                                                        survey.innerHTML = "Okey,i received your informations!<br>  give me a second to see what companies matches with your states..... ";
                                                                                                                    } else 
                                                                                                                    if (actualLanguage == 'FR'){
                                                                                                                        survey.innerHTML = "Okey, j'ai reçu vos informations !<br> donnez-moi une seconde pour voir quelles entreprises correspondent à vos états.....";
                                                                                                                    }
                                                                                                                    let homeS = document.querySelector('#homeSection');
                                                                                                                    let particle = document.querySelector('#particleCore');
                                                                                                                    let btnsC = document.querySelector('div#btnContainer');
                                                                                                                    survey.style.animation = 'waitingPt1 .5s linear';
                                                                                                                    particle.style.animation = 'waitingPt2 .5s linear';
                                                                                                                    setTimeout(()=>{
                                                                                                                        survey.classList.add('waitingPt1');
                                                                                                                        particle.classList.add('waitingPt2');
                                                                                                                        setTimeout(() => {
                                                                                                                                survey.style.opacity = 0;
                                                                                                                                setTimeout(()=>{
                                                                                                                                    //table
                                                                                                                                    fetch('index04.html')
                                                                                                                                    .then(response => response.text())
                                                                                                                                    .then(data =>{
                                                                                                                                        survey.innerHTML = data;
                                                                                                                                                                            
                                                                                                                                         part6H0 = document.querySelector('#survey #Header');
                                                                                                                                         part6Type = document.querySelector('#survey #type');
                                                                                                                                         part6Name = document.querySelector('#survey #name'); 

                                                                                                                                        switchLang(actualLanguage);
                                                                                                                                        particle.style.animation = "toTheTop .5s linear";
                                                                                                                                        btnsC.style.animation = "fromTheTop .5s linear";
                                                                                                                                        particle.style.marginBottom =0;
                                                                                                                                        btnsC.style.opacity = 1;
                                                                                                                                        survey.style.opacity = 1;
                                                                                                                                    })
                                                                                                                                },1500);

                                                                                                                        }, 2000);

                                                                                                                    },450);
                                                                                                                });
                                                                                                        });
                                                                                                    },1200)
                                                                                             });
                                                                                         }
                                                                             });
                                                                     });
                                                             },1200);
                                                        });
                                                    }
                                            });
                                    });
                                    },700);
                            })
                    });}     
            )
            .catch(error => console.error('Error loading content:', error));
    },2000);







