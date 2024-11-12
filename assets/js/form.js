// TODO: Create a variable that selects the form element
const intakeForm = document.getElementById("intakeform");
const usernameInput = document.getElementById("username");

intakeForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const userName = usernameInput.value;
    console.log("username:", userName);
});
// TODO: Create a function that handles the form submission. 
// Grab the form data and store it in local storage, 
// then redirect to the blog page using the `redirectPage` function. 
// If the form is submitted with missing data, display an error message to the user.

function handleFormSubmission(event) {
    event.preventDefault();
    const intakeForm = event.target; //get data
    const intakeFormData = new FormData(intakeForm);

    const formValues = {}; // FormData object
    FormData.forEach((userName, usernameInput) => {
        formValues[userName] = value;
        
    });
    // error message
    const missingFeilds = Object.keys(formValues).filter(userName => !formValues[userName]);

    if (missingFeilds.length > 0) {
        const errorMessage = `Please complete the form.`;
        displayErrorMessage(errorMessage);
        return;
    }
    
    localStorage.setItem('formData', JSON.stringify(formValues));
    
}

 function displayErrorMessage(message){
    let errorContainer = document.getElementById('error-message');
    if (!errorContainer) {
        document.createElement('div');
        errorContainer.id = 'error-message';
        errorContainer.style.color = 'red';
        errorContainer.style.marginBottom = '10px';
      document.body.prepend(errorContainer);
    }

    errorContainer.textContent = message;
 }

 function redirectPage() {
    window.location.href = "file:///C:/Users/jm_sm/Links/FSF-PT-WEST-OCTOBER-100724/01-Class-Content/04-Web-APIs/02-Challenge/Develop/index.html"
 }

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
const form = document.getElementById('intakeForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    handleFormSubmission();
});

function handleFormSubmission() {
    console.log('intake form');
}