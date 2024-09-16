// listing element

document.getElementById('resumeform')?.addEventListener('submit', function (event) {
    event.preventDefault();


    // type assertion
    const profilepictureinput = document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

// **
const userdataElement = document.getElementById('userdata') as HTMLInputElement;


    if (profilepictureinput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement && userdataElement) {



        // getting user data
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        // **
        const userdata = userdataElement.value;
        const uniquePath = `resumes/${userdata.replace(/\s/g, '-')}.html`;

        // picture elements
        const profilepicturefile = profilepictureinput.files?.[0];
        const profilepictureurl = profilepicturefile ? URL.createObjectURL(profilepicturefile) : '';
// id="profilePicture"
        // creating resume output
        const resumeoutput = `
    <h2>Resume</h2>
    ${profilepictureurl ? `<img src="${profilepictureurl}" alt="profile Picture" class="profilePicture">` : ''}
    <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email}</span></p>
    <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone}</span></p>
    <p><strong>Address:</strong> <span id="edit-phone" class="editable"> ${address}</span></p>
    <h3>Education</h3>
    <pid="edit-education" class="editable">${education}</p>
    <h3>Experience</h3>
    <pid="edit-experience" class="editable">${experience}</p>
    <h3>Skills</h3>
    <pid="edit-skills" class="editable">${skills}</p>
    `;

    
        // **
const downloadLink = document.createElement('a');
downloadLink.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeoutput);
downloadLink.download = uniquePath;
downloadLink.textContent = 'Download';


        // inserting resume output
        const resumeOutputElement = document.getElementById('resumeoutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeoutput;
            resumeOutputElement.appendChild(downloadLink);
            makeEditable();
        } else {
            console.error('Resume output element not found');
        }
    }
});

// Making resume editable without reloading
function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach((element) => {
        element.addEventListener('click', () => {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";


            // replace content
            if (currentElement.tagName === 'P' || currentElement.tagName === 'span') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editable-input');

                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
                input.addEventListener('blur', function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                })
            }
        });
    });
}