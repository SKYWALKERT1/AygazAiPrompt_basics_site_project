document.addEventListener('DOMContentLoaded', (event) => {
    // This code runs when the DOM is ready and creates a fade-in effect on the main content
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = 0;
    setTimeout(() => {
        mainContent.style.opacity = 1;
        mainContent.style.transition = 'opacity 2s';
    }, 100);

    // Add more interactive or dynamic behaviors as needed
});
