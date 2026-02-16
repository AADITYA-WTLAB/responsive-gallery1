const galleryImages = document.querySelectorAll('.gallery-item img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox';

    // show clicked image larger
    overlay.innerHTML = `
      <img src="${img.src}" alt="${img.alt}">
      <div class="close">&#10006;</div>
    `;

    document.body.appendChild(overlay);

    // close on clicking 'X'
    overlay.querySelector('.close').onclick = () => {
      document.body.removeChild(overlay);
    };

    // close when clicking outside image
    overlay.addEventListener('click', (e) => {
      if (e.target.className === 'lightbox') {
        document.body.removeChild(overlay);
      }
    });
  });
});
