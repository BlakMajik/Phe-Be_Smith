/**
 * Interactive Filterable Media Gallery
 * Supports filtering across Teaching, Performances, Rehearsals, and Community Residencies.
 * Connects with the Video Lightbox and fullscreen high-res image inspector.
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.media-filter-btn');
  const mediaItems = document.querySelectorAll('.media-item-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      mediaItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Attach Lightbox triggers to each media item card
  mediaItems.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title') || 'Performance Archive';
      const category = card.getAttribute('data-category-label') || 'Dance Archive';
      const desc = card.getAttribute('data-desc') || 'Capturing moments of discipline, joy, and transformative artistic expression.';
      const img = card.querySelector('.media-item-img');
      const imgSrc = img ? img.getAttribute('src') : 'assets/images/hero.jpg';

      if (window.videoLightbox) {
        window.videoLightbox.open({
          title: title,
          category: category,
          desc: desc,
          imageSrc: imgSrc
        });
      }
    });
  });
});
