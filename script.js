// listing element
var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // type assertion
    var profilepictureinput = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // **
    var userdataElement = document.getElementById('userdata');
    if (profilepictureinput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement && userdataElement) {
        // getting user data
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // **
        var userdata = userdataElement.value;
        var uniquePath = "resumes/".concat(userdata.replace(/\s/g, '-'), ".html");
        // picture elements
        var profilepicturefile = (_a = profilepictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureurl = profilepicturefile ? URL.createObjectURL(profilepicturefile) : '';
        // id="profilePicture"
        // creating resume output
        var resumeoutput = "\n    <h2>Resume</h2>\n    ".concat(profilepictureurl ? "<img src=\"".concat(profilepictureurl, "\" alt=\"profile Picture\" class=\"profilePicture\">") : '', "\n    <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n    <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, "</span></p>\n    <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span></p>\n    <p><strong>Address:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(address, "</span></p>\n    <h3>Education</h3>\n    <pid=\"edit-education\" class=\"editable\">").concat(education, "</p>\n    <h3>Experience</h3>\n    <pid=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    <h3>Skills</h3>\n    <pid=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n    ");
        // **
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeoutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download';
        // inserting resume output
        var resumeOutputElement = document.getElementById('resumeoutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeoutput;
            resumeOutputElement.appendChild(downloadLink);
            makeEditable();
        }
        else {
            console.error('Resume output element not found');
        }
    }
});
// Making resume editable without reloading
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === 'P' || currentElement.tagName === 'span') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editable-input');
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
            }
        });
    });
}
