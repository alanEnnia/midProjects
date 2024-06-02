    var video = document.querySelector('video');
    video.controls = false;

    const survey = document.querySelector("#survey");

    setTimeout(()=>{
            survey.style.opacity = 0;
    },1200);
    setTimeout(()=>{
            survey.style.opacity = 1;
            fetch('index02.html')
            .then(response => response.text())
            .then(data => {
                survey.innerHTML = data;
                    const formC = document.querySelector('form#formC');
                    formC.addEventListener('submit',function (e){
                            e.preventDefault();
                            let username = document.querySelector('#username').value;
                            console.log(username);
                            fetch('index03.html')
                            .then(response => response.text())
                            .then(data => {
                                survey.style.opacity = 0;
                                setTimeout (()=>{
                                    survey.innerHTML = data; 
                                    document.querySelector('span#name').textContent = username;
                                    survey.style.opacity = 1;

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

