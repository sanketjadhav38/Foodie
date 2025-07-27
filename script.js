
document.querySelectorAll('.rating-stars').forEach(group => {
  const stars = group.querySelectorAll('i');

  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      const value = parseInt(star.getAttribute('data-value'));
      stars.forEach((s, i) => s.classList.toggle('hovered', i < value));
    });

    star.addEventListener('mouseout', () => {
      stars.forEach(s => s.classList.remove('hovered'));
      const rating = parseInt(group.getAttribute('data-rating'));
      stars.forEach((s, i) => s.classList.toggle('selected', i < rating));
    });

    star.addEventListener('click', () => {
      const value = parseInt(star.getAttribute('data-value'));
      group.setAttribute('data-rating', value);
      stars.forEach((s, i) => s.classList.toggle('selected', i < value));
    });
  });

  // Initial state
  const rating = parseInt(group.getAttribute('data-rating'));
  stars.forEach((s, i) => s.classList.toggle('selected', i < rating));
});

// timer counter
function startCountdown(elementId, endTime) {
    const el = document.getElementById(elementId);
    function update() {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        el.innerHTML = `<div class="count-box">00<br><small>Days</small></div>
                        <div class="count-box">00<br><small>Hrs</small></div>
                        <div class="count-box">00<br><small>Mins</small></div>
                        <div class="count-box">00<br><small>Secs</small></div>`;
        return;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secs = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

      el.innerHTML = `<div class="count-box">${days}<br><small>Days</small></div>
                      <div class="count-box">${hours}<br><small>Hrs</small></div>
                      <div class="count-box">${mins}<br><small>Mins</small></div>
                      <div class="count-box">${secs}<br><small>Secs</small></div>`;
    }

    update();
    setInterval(update, 1000);
  }

  // Example end times for each card (set custom times here)
  const now = new Date().getTime();
  startCountdown('countdown1', now + 3600000);      // 1 hour
  startCountdown('countdown2', now + 7200000);      // 2 hours
  // Add countdown3...countdown8 for other cards

// comment
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    }
  });

  

