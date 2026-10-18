/* ביחד נתקן — landing page behaviour */
(function () {
  'use strict';

  /* ---- Footer year ---------------------------------------------------- */
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---- Priorities poll ------------------------------------------------ */
  // Full class strings so Tailwind's content scanner keeps these utilities.
  var ACCENT_RING = {
    primary: 'ring-primary',
    secondary: 'ring-secondary',
    tertiary: 'ring-tertiary',
  };
  var RING_WIDTH = 'ring-4';
  var STORAGE_KEY = 'beyahad:poll-choice';

  var poll = document.querySelector('[data-poll]');
  if (!poll) return;

  var options = Array.prototype.slice.call(poll.querySelectorAll('[data-poll-option]'));
  var status = document.querySelector('[data-poll-status]');

  function clear(button) {
    button.setAttribute('aria-pressed', 'false');
    button.classList.remove(RING_WIDTH);
    Object.keys(ACCENT_RING).forEach(function (accent) {
      button.classList.remove(ACCENT_RING[accent]);
    });
  }

  function select(button, announce) {
    options.forEach(clear);

    button.setAttribute('aria-pressed', 'true');
    button.classList.add(RING_WIDTH);

    var ring = ACCENT_RING[button.dataset.pollAccent];
    if (ring) button.classList.add(ring);

    if (status && announce) {
      // No backend is wired up yet, so don't imply the vote was submitted.
      status.textContent =
        'בחרת: ' + button.textContent.trim() + ' · הבחירה נשמרת במכשיר שלך בלבד.';
    }

    try {
      localStorage.setItem(STORAGE_KEY, button.dataset.pollOption);
    } catch (err) {
      /* Private browsing or blocked storage — the poll still works for this visit. */
    }
  }

  options.forEach(function (button) {
    button.addEventListener('click', function () {
      select(button, true);
    });
  });

  // Restore a previous choice on this device.
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      var match = options.filter(function (button) {
        return button.dataset.pollOption === saved;
      })[0];
      if (match) select(match, false);
    }
  } catch (err) {
    /* Ignore unavailable storage. */
  }
})();
