const elementsToFade = document.querySelectorAll('.this');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing after fade-in
    }
  });
}, { threshold: 0.1 }); // Adjust threshold as needed

elementsToFade.forEach(element => observer.observe(element));
