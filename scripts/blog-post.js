// Estimate reading time (JS)
const readingTimeElem = document.getElementById("reading-time");
if (readingTimeElem) {
  const words = document.body.innerText.split(' ').length;
  const readingTime = Math.ceil(words / 200);
  readingTimeElem.innerText = `${readingTime} min read`;
}

// Toggle Dark Mode (JS)
const toggleButton = document.getElementById('darkToggle');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = toggleButton.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-moon');
      icon.classList.toggle('fa-sun');
    }
  });
}
  