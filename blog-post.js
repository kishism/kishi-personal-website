// Estimate reading time (JS)
const words = document.body.innerText.split(' ').length;
const readingTime = Math.ceil(words / 200);
document.getElementById("reading-time").innerText = `${readingTime} min read`;

// Toggle Dark Mode (JS)
const toggleButton = document.getElementById('darkToggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = toggleButton.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });
  