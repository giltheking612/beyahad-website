/* ביחד — renders the candidate grid from team-data.js and keeps it in
 * the current language. Runs after i18n.js (needs window.Beyahad.currentLang)
 * and team-data.js (needs window.Beyahad.team).
 */
(function () {
  'use strict';

  var fullContainer = document.querySelector('[data-team-full]');
  var compactContainer = document.querySelector('[data-team-compact]');
  if (!fullContainer || !compactContainer || !window.Beyahad || !window.Beyahad.team) return;

  var team = window.Beyahad.team;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderFullCard(person, lang) {
    var card = el('article', 'team-card');

    var img = el('img', 'team-card__photo');
    img.src = person.photo;
    img.loading = 'lazy';
    img.width = 400;
    img.height = 400;
    img.alt = person.name[lang] || person.name.he;
    card.appendChild(img);

    var body = el('div', 'team-card__body');

    body.appendChild(el('h3', 'team-card__name', person.name[lang] || person.name.he));
    body.appendChild(el('p', 'team-card__meta', (person.age + ' · ' + (person.city[lang] || person.city.he))));

    var tags = el('div', 'team-card__tags');
    (person.tags[lang] || person.tags.he).forEach(function (tag) {
      tags.appendChild(el('span', 'team-card__tag', tag));
    });
    body.appendChild(tags);

    if (person.bio) {
      body.appendChild(el('p', 'team-card__bio', person.bio[lang] || person.bio.he));
    }

    card.appendChild(body);
    return card;
  }

  function renderCompactCard(person, lang) {
    var card = el('article', 'team-card team-card--compact');

    var img = el('img', 'team-card__photo team-card__photo--sm');
    img.src = person.photo;
    img.loading = 'lazy';
    img.width = 200;
    img.height = 200;
    img.alt = person.name[lang] || person.name.he;
    card.appendChild(img);

    var body = el('div', 'team-card__body');
    body.appendChild(el('h3', 'team-card__name team-card__name--sm', person.name[lang] || person.name.he));
    body.appendChild(el('p', 'team-card__meta', (person.age + ' · ' + (person.city[lang] || person.city.he))));
    var tag = (person.tags[lang] || person.tags.he)[0];
    if (tag) body.appendChild(el('span', 'team-card__tag', tag));

    card.appendChild(body);
    return card;
  }

  function render(lang) {
    fullContainer.innerHTML = '';
    compactContainer.innerHTML = '';
    team.forEach(function (person) {
      if (person.bio) {
        fullContainer.appendChild(renderFullCard(person, lang));
      } else {
        compactContainer.appendChild(renderCompactCard(person, lang));
      }
    });
  }

  render((window.Beyahad && window.Beyahad.currentLang) || 'he');

  document.addEventListener('beyahad:langchange', function (e) {
    render(e.detail.lang);
  });
})();
