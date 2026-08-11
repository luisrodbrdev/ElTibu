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

const modal = document.getElementById('modal-zoom');
const modalImg = document.getElementById('img-zoomed');
const cerrarBtn = document.querySelector('.cerrar-modal');

document.querySelectorAll('.promo-card img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

cerrarBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const btnVerMenu = document.getElementById('btnVerMenu');
const modalMenu = document.getElementById('modalMenu');
const btnCerrarMenu = document.getElementById('btnCerrarMenu');

btnVerMenu.addEventListener('click', () => {
  modalMenu.style.display = 'flex';
});

btnCerrarMenu.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modalMenu) {
    modalMenu.style.display = 'none';
  }
});