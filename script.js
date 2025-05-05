var _a;
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var contactInput = document.getElementById("contact");
    var educationInput = document.getElementById("education");
    var experienceInput = document.getElementById("experience");
    var skillsInput = document.getElementById("skills");
    if (profilePictureInput && nameInput && emailInput && contactInput && educationInput && experienceInput && skillsInput) {
        var name_1 = nameInput.value;
        var email = emailInput.value;
        var contact = contactInput.value;
        var education = educationInput.value;
        var experience = experienceInput.value;
        var skills = skillsInput.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var resumeOutput = "\n    <h2>RESUME</h2>\n    ".concat(profilePictureURL ? " <img src=\"".concat(profilePictureURL, "\" alt=\"profile\" class=\"profilePicture\">") : "", "\n    <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, " </span> </p>\n     <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n      <p><strong>Contact #:</strong>  <span id=\"edit-contact\" class=\"editable\"> ").concat(contact, "</span> </p>\n       <h3>Education</h3>\n       <p>  <span id=\"edit-education\" class=\"editable\"> ").concat(education, "</span> </p>\n        <h3>Experience</h3>\n        <p>  <span id=\"edit-experience\" class=\"editable\"> ").concat(experience, "</span> </p>\n         <h3>Skills</h3>\n         <p>  <span id=\"edit-skills\" class=\"editable\"> ").concat(skills, "</span> </p>\n\n    \n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("more elements missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || " ";
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input = document.createElement("input");
                input.type = "text";
                input.value = currentValue;
                input.classList.add("editing.input");
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
