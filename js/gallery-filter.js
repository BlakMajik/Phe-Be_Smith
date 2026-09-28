/**
 * Interactive Filterable Media Gallery
 * Supports filtering across Teaching, Classroom, Choreography, Performance,
 * Rehearsal, Recitals, Community, Behind the Scenes, and Video.
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
        const itemCategory = item.getAttribute('data-category') || '';
        const itemCategories = itemCategory.split(' ');

        if (filterValue === 'all' || itemCategories.includes(filterValue)) {
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
      const title = card.getAttribute('data-title') || 'Dance Archive';
      const category = card.getAttribute('data-category-label') || 'Dance Media';
      const desc = card.getAttribute('data-desc') || 'Capturing moments of discipline, joy, and creative expression.';
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
