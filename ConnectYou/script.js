    const survey = document.querySelector("#survey");
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
                                                                                                            btn.value = 'Healthcare';
                                                                                                            btn1.value = 'Telecommunications';
                                                                                                            btn2.value = 'Data Centers';
                                                                                                        }
                                                                                                        if (specialist == 'DD'){
                                                                                                            btn.value = 'EdTech';
                                                                                                            btn1.value = 'Telecommunications';
                                                                                                            btn2.value = 'E-commerce';
                                                                                                        }
                                                                                                        if (specialist == 'BM'){
                                                                                                            btn.value = 'Manufacturing';
                                                                                                            btn1.value = 'Renewable Energy';
                                                                                                            btn2.value = 'Automotive Industry';
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





    // Animation sec 03
    const langSBtn = document.querySelector("#lBtn");
    const lightSBtn = document.querySelector("#lightD");
    var actualMode = "light";

    var actualLanguage = "EN";
    langSBtn.addEventListener("click", function() {
        if (actualLanguage == "EN") { 
            actualLanguage = "FR";
            langSBtn.style.animation = "LBtnActivate 550ms linear";
            langSBtn.style.transform = "translateY(67px)";
        } else {
            actualLanguage = "EN";
            langSBtn.style.animation = "LBtnDeactivate 550ms linear";
            langSBtn.style.transform = "translateY(0px)";
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
