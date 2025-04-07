// Typing effect handler
document.addEventListener('DOMContentLoaded', () => {
    const typewriter = document.querySelector('.typewriter');
    
    // Add 'done' class after animation completes
    setTimeout(() => {
        typewriter.classList.add('done');
    }, 3000); // Match this with your typing animation duration
}); 