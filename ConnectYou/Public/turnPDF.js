async function turnPDF(username,Email,PhoneNumber,OutputPrompt,Experiences,Degrees,Projects,habits,speciality,actualLanguage){
    let sp
    if (speciality == 'DD'){
         sp = 'developement digital'; 
    }else
    if(speciality == 'ID'){
        sp = 'Infrastructure digital';
    }else 
    if (speciality == 'BM'){
        sp = 'Business Management';
    }
    var skills  = await genTxt (sp,actualLanguage);
 
    fetch('resume.html')
    .then(response => response.text())
    .then(html => {
        // Modify the fetched HTML if needed
        // For example, replace all instances of "old-text" with "new-text"
        html = html.replace(/old-text/g, 'new-text');

        // Insert the modified HTML into the main HTML file
        document.querySelector('#survey #C12').innerHTML = html;
        const fNameCC = document.querySelector('#survey #C12 .first-name');
        const lNameCC = document.querySelector('#survey #C12 .last-name');
        const EmailC = document.querySelector('#survey #C12 .email-val');
        const NumC = document.querySelector('#C12 .phone-val');
        const aboutMeC = document.querySelector('#C12 .about .desc');
        const ExperienceC =document.querySelector('#C12 .Experiences .section__list');
        const DegreeC = document.querySelector('#C12 .Degrees .section__list');
        const ProjectC = document.querySelector('#C12 .Projects .section__list'); 
        const SkillsC = document.querySelector('#C12 .SKills .name');
        const HabitC = document.querySelector('#C12 .Habits .name');
        EmailC.textContent = Email;
        NumC.textContent = PhoneNumber;
        aboutMeC.textContent = OutputPrompt;
        if (Experiences.length != 0){ 
        Experiences.forEach(Experience => {
            ExperienceC.innerHTML += `
            <div class="section__list-item">
            <div class="left">
            <div class="name">${Experience.company}</div>
            <div class="addr"></div>
            <div class="duration">${Experience.fromDate} + , + ${Experience.toDate} </div>
          </div>
          <div class="right">
            <div class="name">${Experience.jobTitle}</div>
            <div class="desc">${Experience.jobDesc}</div>
          </div></div>
            `; }); }else{
                document.querySelector("#C12 .Experiences ").innerHTML = "";
            }
            if (Degrees.length != 0){
                Degrees.forEach(Degree => {
                    DegreeC.innerHTML += `
                    <div class="section__list-item">
                    <div class="left">
                        <div class="name">${Degree.degreeName}</div>
                        <div class="addr">${Degree.universityName} , ${Degree.degreeDate} Years</div>
                        <div class="duration">${Degree.degreeDuration}</div>
                    </div>
                    </div>
                    `; }
                )
                }else{
                    document.querySelector("#C12 .Degrees ").innerHTML = "";
                };
                if (Projects.length != 0){
                    Projects.forEach(Project => {
                        ProjectC.innerHTML += `
                               <div class="section__list-item">
           <div class="name">${Projects.projectName}</div>
           <div class="text">${Projects.projectDesc}</div>
         </div>
                        `;}) }else{
                            document.querySelector("#C12 .Projects ").innerHTML = "";
                        };


                                                
        



        ExperienceC.textContent = Experiences;
        DegreeC.textContent = Degrees;
        ProjectC.textContent = Projects;
        SkillsC.textContent = skills;
        HabitC.textContent = habits;
        var names = username.split(" ");
        var firstName = names[0];
        var lastName = names.slice(1).join(" ");
        fNameCC.textContent = firstName;
        lNameCC.textContent = lastName;
    })
    .catch(error => console.error('Error fetching HTML:', error));
    
}

async function genTxt (speciality,actualLanguage){
    let promptInput = `give me 4 skills important in this ${speciality} speciality , give them to me with "," between them. just give me general skills , on this language ${actualLanguage} `; // Get the value from the input field

    // Fetch the result from the server with the input value as the prompt
    const response = await fetch('/generateContent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: promptInput }) // Send the prompt as JSON data
    });
    const result = await response.text();

    // Update the content of the result div
  return result;
}