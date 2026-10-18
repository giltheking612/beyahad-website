/* ביחד נתקן — priorities poll behaviour. Language switching lives in i18n.js. */
(function () {
  'use strict';

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
  var selected = null;

  function clear(button) {
    button.setAttribute('aria-pressed', 'false');
    button.classList.remove(RING_WIDTH);
    Object.keys(ACCENT_RING).forEach(function (accent) {
      button.classList.remove(ACCENT_RING[accent]);
    });
  }

  function labelFor(button) {
    // The button also holds a Material Symbols glyph, whose "icon name" is
    // literal text content (e.g. "menu_book") rendered as a ligature — read
    // only the translated label span, not button.textContent, or that
    // ligature name leaks into the status message.
    var labelEl = button.querySelector('[data-i18n]');
    return labelEl ? labelEl.textContent.trim() : button.textContent.trim();
  }

  function renderStatus() {
    if (!status || !selected) return;
    var lang = (window.Beyahad && window.Beyahad.currentLang) || 'he';
    var t = window.Beyahad && window.Beyahad.t;
    var prefix = (t && t(lang, 'poll.statusPrefix')) || '';
    var suffix = (t && t(lang, 'poll.statusSuffix')) || '';
    status.textContent = [prefix, labelFor(selected), '·', suffix].filter(Boolean).join(' ');
  }

  function select(button, announce) {
    options.forEach(clear);

    button.setAttribute('aria-pressed', 'true');
    button.classList.add(RING_WIDTH);

    var ring = ACCENT_RING[button.dataset.pollAccent];
    if (ring) button.classList.add(ring);

    selected = button;
    if (announce) renderStatus();

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

  // Re-render the status line (and keep the saved label in sync) when the
  // visitor switches language after already voting.
  document.addEventListener('beyahad:langchange', function () {
    if (selected) renderStatus();
  });
})();
