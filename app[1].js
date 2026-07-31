document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ---------- Hero image (if provided) ---------- */
  const heroBg = document.getElementById('hero-bg');
  if (HERO.image) {
    heroBg.style.backgroundImage = `url("${HERO.image}")`;
    heroBg.classList.add('has-image');
  }

  /* ---------- Build rows from data ---------- */
  const rowMap = {
    continue: document.getElementById('track-continue'),
    jokes: document.getElementById('track-jokes'),
    trips: document.getElementById('track-trips'),
    romcom: document.getElementById('track-romcom'),
    soon: document.getElementById('track-soon'),
    because: document.getElementById('track-because'),
  };

  let gradientIndex = 0;

  Object.keys(rowMap).forEach(rowKey => {
    const track = rowMap[rowKey];
    const items = CARD_DATA[rowKey] || [];

    items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', item.title);

      // Visual: real image or gradient placeholder
      if (item.image) {
        card.innerHTML = `<img src="${item.image}" alt="${item.title}" loading="lazy">`;
      } else {
        const gradient = PLACEHOLDER_GRADIENTS[gradientIndex % PLACEHOLDER_GRADIENTS.length];
        gradientIndex++;
        card.innerHTML = `<div class="card-fallback-bg" style="background:${gradient}">${item.title}</div>`;
      }

      // Match badge
      const matchBadge = document.createElement('div');
      matchBadge.className = 'card-match';
      matchBadge.textContent = `${90 + (i % 8)}% Match`;
      card.appendChild(matchBadge);

      // Overlay title on hover
      const overlay = document.createElement('div');
      overlay.className = 'card-overlay';
      overlay.innerHTML = `<div class="card-overlay-title">${item.title}</div>`;
      card.appendChild(overlay);

      // Progress bar for "continue watching" row
      if (rowKey === 'continue' && typeof item.progress === 'number') {
        const progWrap = document.createElement('div');
        progWrap.className = 'card-progress';
        progWrap.innerHTML = `<div class="card-progress-fill" style="width:${item.progress}%"></div>`;
        card.appendChild(progWrap);
      }

      card.addEventListener('click', () => openModal(item));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(item); }
      });

      track.appendChild(card);
    });
  });

  /* ---------- Modal ---------- */
  const overlay = document.getElementById('modal-overlay');
  const modalHero = document.getElementById('modal-hero');
  const modalDesc = document.getElementById('modal-desc');
  const modalGenre = document.getElementById('modal-genre');
  const modalTags = document.getElementById('modal-tags');
  const modalStarring = document.getElementById('modal-starring');
  const modalClose = document.getElementById('modal-close');

  let lastFocused = null;

  function openModal(item) {
    lastFocused = document.activeElement;

    if (item.image) {
      modalHero.style.background = `center/cover no-repeat url("${item.image}")`;
    } else {
      const g = PLACEHOLDER_GRADIENTS[Math.floor(Math.random() * PLACEHOLDER_GRADIENTS.length)];
      modalHero.style.background = g;
    }

    // Rebuild fade + buttons (since we overwrite background via style each time)
    modalHero.innerHTML = `
      <div class="modal-hero-fade"></div>
      <div class="modal-hero-buttons">
        <button class="btn btn-play btn-sm">▶ Play</button>
        <button class="btn btn-circle" aria-label="Add to list">＋</button>
        <button class="btn btn-circle" aria-label="Like">👍</button>
      </div>
    `;

    modalDesc.textContent = item.desc || "";
    modalGenre.textContent = item.genre || "Romance";
    modalTags.textContent = item.tag || "🤍 Core Memory";
    modalStarring.textContent = "You, Me";
    document.getElementById('modal-year').textContent = item.tag ? item.tag : "Featured";

    overlay.classList.add('open');
    modalClose.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  /* ---------- Hero buttons ---------- */
  document.getElementById('play-btn').addEventListener('click', () => {
    document.getElementById('rows').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('info-btn').addEventListener('click', () => {
    openModal({
      title: "US",
      desc: "Starring two idiots who somehow found each other. A limited series with unlimited seasons, still in production, no finale scheduled.",
      genre: "Romance / Comedy / Comfort",
      tag: "Est. 2023",
    });
  });

});
