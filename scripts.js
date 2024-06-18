// Function to create a typing effect
function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = "";
    let i = 0;
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add a transition class to the body for smooth loading
    document.body.classList.add('loaded');

    // Apply typing effect to the bio text
    const bioText = document.getElementById('bio-text');
    if (bioText) {
        typeEffect(bioText, 50);
    }
});


// Function to create a typing effect
function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = "";
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

// Function to add highlight effect to project cards and navigation links
function addHighlightEffect(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.add('highlight');
        });
        element.addEventListener('mouseout', () => {
            element.classList.remove('highlight');
        });
    });
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add a transition class to the body for smooth loading
    document.body.classList.add('loaded');

    // Apply typing effect to specific text elements
    const typingElements = document.querySelectorAll('.typing-effect');
    typingElements.forEach(element => {
        typeEffect(element, 50);
    });

    // Add highlight effects
    addHighlightEffect('.card');
    addHighlightEffect('.card .btn');
    addHighlightEffect('.nav-link');
    addHighlightEffect('.back-arrow');
});
