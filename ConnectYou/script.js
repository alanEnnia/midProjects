

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
                                                                                         if (btn.id == "ID"|| btn.id == "DD" || btn.id == "BM"){
                                                                                             let specialist = btn.id;
                                                                                             localStorage.setItem('specialist',specialist);
                                                                                             //interest part
                                                                                             fetch('index03.html')
                                                                                             .then(response => response.text())
                                                                                             .then(data =>{
                                                                                                    survey.innerHTML = data;
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
    const lBtn = document.querySelector("#lBtn");
    var actualLanguage = "EN";

    const lightD = document.querySelector("#lightD");
    var actualMode = "light";

    lBtn.addEventListener("click", function() {
        if (actualLanguage == "EN") { 
            actualLanguage = "FR";
            lBtn.style.animation = "LBtnActivate 550ms linear";
            lBtn.style.transform = "translateY(67px)";
        } else {
            actualLanguage = "EN";
            lBtn.style.animation = "LBtnDeactivate 550ms linear";
            lBtn.style.transform = "translateY(0px)";
        }
    });

    lightD.addEventListener("click", function() {
        if (actualMode == "light") {
            actualMode = "dark";
            lightD.style.animation = "LBtnActivate 550ms linear";
            lightD.style.transform = "translateY(67px)";
        } else {
            actualMode = "light";
            lightD.style.animation = "LBtnDeactivate 550ms linear";
            lightD.style.transform = "translateY(0px)";
        }
    });



/*functions*/

