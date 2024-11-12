// TODO: Create logic to toggle the light/dark mode styles for the page and circle. 
//The mode should be saved to local storage.
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light'; 
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'; 

  document.body.classList.toggle('dark-mode', newTheme === 'dark');
  const circle = document.getElementById('theme-circle');
  circle.classList.toggle('dark-circle', newTheme === 'dark'); 

  localStorage.setItem('theme', newTheme);
}

// TODO: Create a function called `readLocalStorage` that reads from local storage 
//and returns the data. If no data exists, return an empty array.
function readLocalStorage(form) {
  console.log(readLocalStorage)
  const data = localStorage.getItem(intakeForm);
  return data ? JSON.parse(data) : [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and 
//saves the new data to the existing blog data in local storage.

let redirectURL = '';

const redirectPage = function (url) {
  event.preventDefault();

  windows.location.href = blog.html;
};

function validateForm() {
  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
const errorMessage = document.getElementById('errorMessage');
errorMessage.style.display = 'none';
if (username === '' || title ===''){
  errorMessage.style.display = 'block';
  return false;
}
return true
}