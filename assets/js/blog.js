// TODO: Create a variable that selects the main element, 
// and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", (submit) => {
    history.back();
});

// TODO: Create a function that builds an element and appends it to the DOM
function createAndAppendElement(button, backButton, goBack) {
    // Create the element
    const newElement = document.createElement(button);
    
    // Set the text content (if provided)
    if (goBack) {
        newElement.textContent = goBack;
    }
    
    // Find the parent element using the selector
    const parentElement = document.querySelector(button);
    
    // Append the new element to the parent element
    if (parentElement) {
        parentElement.appendChild(newElement);
    } else {
        console.error("Parent element not found");
    }
}


// TODO: Create a function that handles the case where there are no blog posts to display
function displayBlogPosts() {
    // Retrieve blog posts from localStorage
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const blogContainer = document.getElementById('blog-container');

    // Clear the blog container
    blogContainer.innerHTML = '';

    if (blogPosts.length === 0) {
        // If no blog posts are found, display a message
        const noPostsMessage = document.createElement('p');
        noPostsMessage.textContent = 'No Blog posts yet...';
        blogContainer.appendChild(noPostsMessage);
    } else {
        // Render each blog post
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>By ${post.username}</p>
                <p>${post.content}</p>
            `;
            blogContainer.appendChild(postElement);
        });
    }
}

// Call the function to display blog posts
displayBlogPosts();



// TODO: Create a function called `renderBlogList` that renders the list of 
// blog posts if they exist. If not, call the no posts function.



// TODO: Call the `renderBlogList` function



// TODO: Redirect to the home page using the `redirectPage` function found in logic.js 
// when the back button is clicked
