document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const items = document.querySelectorAll(".galeria-item");
  items.forEach((item) => observer.observe(item));
});