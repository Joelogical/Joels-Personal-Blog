// TODO:  
const form = document.getElementById('form')
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage,
 //then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, 
 //display an error message to the user.
form.addEventListener('submit', function (event)); {
    event.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;


}

 localStorage.setItem('myKey', JSON.stringify(myData));
redirectPage('blog.html');{

}
document.getElementById('form').addEventListener('submit', function(event)){

}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.