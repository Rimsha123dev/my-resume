document.getElementById("resumeform")?.addEventListener("submit",function(event)
{
    event.preventDefault();


const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement; 
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const contactInput = document.getElementById("contact") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLInputElement;
const experienceInput = document.getElementById("experience") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const usernameInput=document.getElementById("username") as HTMLInputElement;

if( profilePictureInput && nameInput && emailInput &&  contactInput  &&  educationInput  &&  experienceInput && skillsInput && usernameInput)
   
   {
    
    const name = nameInput.value;
    const email = emailInput.value;
    const contact = contactInput.value;
    const education = educationInput.value;
    const experience = experienceInput.value;
    const skills= skillsInput.value;
    const profilePictureFile= profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile? URL.createObjectURL(profilePictureFile):"";
    const usernameURL = usernameInput.value;
    const uniquePath=`resumes/${usernameURL.replace(/\s+/g, '_')}_resume.html`


    const resumeOutput =`
    <h2>RESUME</h2>
    ${profilePictureURL?` <img src="${profilePictureURL}" alt="profile" class="profilePicture">` : ""}
    <p><strong>Name:</strong> <span id="edit-name" class="editable">${name} </span> </p>
     <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
      <p><strong>Contact #:</strong>  <span id="edit-contact" class="editable"> ${contact}</span> </p>
       <h3>Education</h3>
       <p>  <span id="edit-education" class="editable"> ${education}</span> </p>
        <h3>Experience</h3>
        <p>  <span id="edit-experience" class="editable"> ${experience}</span> </p>
         <h3>Skills</h3>
         <p>  <span id="edit-skills" class="editable"> ${skills}</span> </p>

    
    `;
    const downloadLink= document.createElement('a')
    downloadLink.href='data:text/html;charset=UTF-8,'+ encodeURIComponent(resumeOutput)
    downloadLink.download= uniquePath
    downloadLink.textContent="DOwnload your resume"





    const resumeOutputElement = document.getElementById("resumeOutput")
    if(resumeOutputElement){
         resumeOutputElement.innerHTML= resumeOutput

         resumeOutputElement.appendChild(downloadLink)
      
      makeEditable()
        }

}else{
    console.error("more elements missing")
}
})

function makeEditable(){
const editableElements  = document.querySelectorAll(".editable")
editableElements.forEach(
    element=>{
        element.addEventListener("click",function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || " ";

            if(currentElement.tagName === "P"  || currentElement.tagName ==="SPAN"){
                const input= document.createElement("input")
                input.type = "text"
                input.value= currentValue
                input.classList.add("editing.input")

                currentElement.style.display = "none"
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()




                        }



        })
    }
)


}