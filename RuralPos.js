
  document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const itemsPerPage = 3;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    let currentPage = 0;

    function updateCarousel() {
      const moveX = currentPage * (100 / itemsPerPage);
      track.style.transform = `translateX(-${moveX}%)`;
    }

    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages - 1) {
        currentPage++;
        updateCarousel();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        updateCarousel();
      }
    });
  });
