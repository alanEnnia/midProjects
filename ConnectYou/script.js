    const survey = document.querySelector("#survey");
    
    // lang light btns  Animation sec 03 
    const langSBtn = document.querySelector("#lBtn");
    const lightSBtn = document.querySelector("#lightD");
    var actualMode = "light";

    var actualLanguage = "EN";

    langSBtn.addEventListener("click", function() {


        if ( actualLanguage == 'FR' ){
          
            actualLanguage = "EN";
            langSBtn.style.animation = "LBtnDeactivate 550ms linear";
            langSBtn.style.transform = "translateY(0px)";

        } 
        if (actualLanguage == 'EN') {

                 
            actualLanguage = "FR";
            langSBtn.style.animation = "LBtnActivate 550ms linear";
            langSBtn.style.transform = "translateY(67px)";          
        }
    });


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
  
langSBtn.addEventListener("click", function() {
    const part1  = document.querySelector('#survey #firstText');
    const part2p0 = document.querySelector('#survey #part2p0');
    const part2p1 = document.querySelector('#survey #part2p1');
    const part2Btn0 = document.querySelector('#survey #part2Btn');
    const part3p0 = document.querySelector('#survey #pContainer');
    const part3Btn0 = document.querySelector('#survey #internship');
    const part3Btn1 = document.querySelector('#survey #job');
    const part4p0 = document.querySelector('#survey #pContainer');
    const part4Btn0 =  document.querySelector('#survey #ID');
    const part4Btn1 = document.querySelector('#survey #DD');
    const part4Btn2 = document.querySelector('#survey #BM');
    const part5p0 = document.querySelector('#survey #pContainer');    
    const part6H0 = document.querySelector('#survey #Header');
    const part6Name = document.querySelector('#survey #name');
    const part6Type = document.querySelector('#survey #type');
    
    if ( actualLanguage == 'FR' ){
        
        part1.innerHTML = "Salut! <br> laissez-moi vous aider à trouver votre prochain emploi :)";
        part2p0.innerHTML = "Dites-moi d'abord....";
        part2p1.innerHTML = "Quel est ton nom :";
        part2Btn0.innerHTML = "suivant";
        part3p0.innerHTML = 'Bien <span id="name" style="font-weight: 600;"></span> Travaillons-y ! <br> Êtes-vous à la recherche d\'un véritable emploi ou simplement d\'un stage ? ';
        part3Btn0.innerHTML = 'Stage';
        part3Btn1.innerHTML = 'Emploi';
        part4p0.innerHTML = 'Cool! maintenant, faites-le-moi savoir.... <br>Quelle est ta spécialité?';
        part4Btn0.innerHTML = 'Infrastructure Digital';
        part4Btn1.innerHTML = 'Développement Digital';
        part4Btn2.innerHTML = "Gestion d'entreprise";
        part5p0.innerHTML = "<span id='sp'></span>!!WOW Nice Spécialiste <span id='name'></span> <br>Maintenant, pour vous donner le meilleur résultat, j'ai besoin que vous me disiez ce qui vous intéresse le plus....  ";
        part6H0.innerHTML = "Voici votre liste :)";
        part6Name.innerHTML = "nom";
        part6Type.innerHTML = "genre";
     

    } 
    if (actualLanguage == 'EN') {

        part1.innerHTML = "Hi! <br> let me help you find your next job :)";
        part2p0.innerHTML = 'Tell me first..';
        part2p1.innerHTML = "What is your name :";
        part2Btn0.innerHTML = "next";
        part3p0.innerHTML = "Okay <span id='name' style='font-weight: 600;'></span> Let's work on it! <br> Are you looking for a real job or just an internship? ";
        part3Btn0.innerHTML = 'Internship';
        part3Btn1.innerHTML = 'Job';
        part4p0.innerHTML = 'Cool! now Let Me Know.... <br>What is Your  speciality?';
        part4Btn0.innerHTML = 'Infrastructure Digital';
        part4Btn1.innerHTML = 'Development Digital';
        part4Btn2.innerHTML = "Business Management";
        part5p0.innerHTML = "<span id='sp'></span>!! WOW Nice Specialist <span id='name'></span> <br> Now to give you the best result i need you to tell me about what interest you more....";
        part6H0.innerHTML = "Here is your list :)";
        part6Name.innerHTML = "name";
        part6Type.innerHTML = "type";                  
               
    }
});
    























    setTimeout(()=>{
            survey.style.opacity = 0;
    },1200);
    setTimeout(()=>{
            //name part 00
            survey.style.opacity = 1;
            fetch('index00.html')
            .then(response => response.text())
            .then(data => {
                survey.innerHTML = data;
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
                                    survey.innerHTML = data; 
                                    document.querySelector('span#name').textContent = username;
                                    survey.style.opacity = 1;
                                    let btns  = document.querySelectorAll('.btns button ');
                                    btns.forEach( btn =>{
                                            btn.addEventListener('click',() =>{
                                                    if (btn.id == "job" || btn.id == "internship") {
                                                        let status  =btn.id;
                                                        console.log(status); 
                                                        //specialist part
                                                        fetch('index02.html')
                                                        .then(response => response.text())
                                                        .then(data =>{
                                                             survey.style.opacity = 0;
                                                             setTimeout(()=>{
                                                                     survey.innerHTML = data;
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
                                                                                                        survey.innerHTML = data;
                                                                                                        const specialistC = document.querySelector('#sp');
                                                                                                        const userC = document.querySelector('#name');
                                                                                                        const btns = document.querySelectorAll('.btns input');
                                                                                                        const btn = document.querySelector("#btn");
                                                                                                        const btn1 = document.querySelector("#btn1");
                                                                                                        const btn2 = document.querySelector("#btn2");
                                                                                                        
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
                                                                                                        survey.style.opacity = 1;
                                                                                                        btns.forEach(btn =>{
                                                                                                                btn.addEventListener("click",()=>{
                                                                                                                    var interest  = btn.value;
                                                                                                                    survey.innerHTML = "Okey,i received your informations!<br>  give me a second to see what companies matches with your states..... ";
                                                                                                                    const homeS = document.querySelector('#homeSection');
                                                                                                                    const particle = document.querySelector('#particleCore');
                                                                                                                    const btnsC = document.querySelector('div#btnContainer');
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







