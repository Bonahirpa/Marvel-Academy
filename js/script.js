//Header part
// Toggle mobile menu
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});


// Event and Announcement
document.addEventListener("DOMContentLoaded", function() {
  const eventCards = document.querySelectorAll('.event-card');

  eventCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          card.style.transform = 'scale(1.05)';
      });

      card.addEventListener('mouseleave', () => {
          card.style.transform = 'scale(1)';
      });
  });

  const eventButtons = document.querySelectorAll('.event-button');

  eventButtons.forEach(button => {
      button.addEventListener('click', () => {
          alert('More details about the event will be available soon!');
      });
  });
});

// Interactivity for  all
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      section.classList.add("fade-in"); // Ensure sections start faded
      observer.observe(section);
    });
  });
