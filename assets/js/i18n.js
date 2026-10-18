/* ביחד נתקן — translations + language switching.
 *
 * Content is written for short attention spans: short headlines, one line
 * of support text, no paragraphs. Every piece of on-page copy lives here,
 * keyed to match the `data-i18n="key.path"` / `data-i18n-attr="attr:key.path"`
 * attributes in index.html, so index.html never hard-codes language text.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'beyahad:lang';
  var SUPPORTED = ['he', 'ar', 'en', 'ru'];

  var META = {
    he: { dir: 'rtl', short: 'עב', ogLocale: 'he_IL' },
    ar: { dir: 'rtl', short: 'عر', ogLocale: 'ar_IL' },
    en: { dir: 'ltr', short: 'EN', ogLocale: 'en_US' },
    ru: { dir: 'ltr', short: 'RU', ogLocale: 'ru_RU' },
  };

  var TRANSLATIONS = {
    he: {
      nav: { skip: 'דילוג לתוכן הראשי' },
      brand: { name: 'ביחד נתקן' },
      site: {
        title: 'ביחד נתקן | תנועה אזרחית לישראל',
        description: 'תנועה אזרחית צעירה. חינוך, יוקר מחיה ואחדות — בלי סיסמאות, רק עשייה.',
      },
      hero: {
        badge: 'תנועה אזרחית אמיתית, מלמטה',
        titleMain: 'תיקון המדינה.',
        titleHighlight: 'מתחילים עכשיו.',
        subtitle: 'חינוך. יוקר מחיה. אחדות. בלי סיסמאות — רק עשייה.',
        cta: 'המצע ב-60 שניות',
        pill1: '⚡ חינוך מודרני',
        pill2: '📱 שקיפות מלאה',
        pill3: '🤝 שוויון אמיתי',
        imageAlt: 'פעילי ופעילות ביחד נתקן בשיחה עם אזרחים ואזרחיות בכיכר עירונית, סביב דוכן התנועה.',
        imageBadge: 'קולות מהשטח',
        imageCaption: 'מנהיגות אמיתית. היום.',
      },
      about: {
        eyebrow: 'ב-10 שניות',
        heading: 'מי אנחנו? ⚡',
        card1Title: 'מי אנחנו',
        card1Text: 'אזרחים. לא פוליטיקאים.',
        card2Title: 'המטרה',
        card2Text: 'לתקן מה ששבור.',
        card3Title: 'למה אנחנו',
        card3Text: '100% שקיפות. תמיד.',
      },
      plan: {
        eyebrow: "תכל'ס",
        heading: '3 דברים שאנחנו עושים',
        subheading: 'בלי מגילות ארוכות. רק זה:',
        card1Title: 'חינוך שעובד',
        card1Text: 'פחות לחץ, יותר למידה אמיתית.',
        card2Title: 'מחירים הוגנים',
        card2Text: 'שוברים מונופולים. מוזילים חיים.',
        card3Title: 'חברה מחוברת',
        card3Text: 'פחות שנאה, יותר שיח.',
      },
      poll: {
        eyebrow: 'ההצבעה שלך',
        question: 'מה הכי דחוף מבחינתך?',
        subtext: 'בחר/י עכשיו:',
        option1: '📚 חינוך',
        option2: '💰 מחירים',
        option3: '🤝 חברה',
        statusPrefix: 'בחרת:',
        statusSuffix: 'נשמר במכשיר שלך בלבד.',
      },
      footer: {
        tagline: 'לתקן ביחד. להתחיל עכשיו.',
        rights: '© {year} כל הזכויות שמורות למפלגת ביחד נתקן.',
      },
      lang: {
        toggleLabel: 'החלף שפה',
      },
    },

    ar: {
      nav: { skip: 'تخطَّ إلى المحتوى الرئيسي' },
      brand: { name: 'بيَحَد نتاكين' },
      site: {
        title: 'بيَحَد نتاكين | حركة مدنية في إسرائيل',
        description: 'حزب سياسي شاب في إسرائيل. التعليم وغلاء المعيشة والوحدة — بلا شعارات، فقط عمل.',
      },
      hero: {
        badge: 'حركة مدنية حقيقية من القاعدة',
        titleMain: 'إصلاح الدولة.',
        titleHighlight: 'نبدأ الآن.',
        subtitle: 'التعليم. غلاء المعيشة. الوحدة. بلا شعارات — فقط عمل.',
        cta: 'البرنامج خلال 60 ثانية',
        pill1: '⚡ تعليم عصري',
        pill2: '📱 شفافية كاملة',
        pill3: '🤝 مساواة حقيقية',
        imageAlt: 'ناشطو وناشطات بيَحَد نتاكين يتحدثون مع مواطنين في ساحة عامة، حول كشك الحركة.',
        imageBadge: 'صوت من الميدان',
        imageCaption: 'قيادة حقيقية. اليوم.',
      },
      about: {
        eyebrow: 'خلال 10 ثوانٍ',
        heading: 'من نحن؟ ⚡',
        card1Title: 'من نحن',
        card1Text: 'مواطنون، لا سياسيون.',
        card2Title: 'هدفنا',
        card2Text: 'إصلاح ما هو مكسور.',
        card3Title: 'لماذا نحن',
        card3Text: 'شفافية 100%. دائمًا.',
      },
      plan: {
        eyebrow: 'باختصار',
        heading: '3 أشياء نعمل عليها',
        subheading: 'بلا خطابات طويلة. هذا كل شيء:',
        card1Title: 'تعليم فعّال',
        card1Text: 'ضغط أقل، وتعلّم حقيقي.',
        card2Title: 'أسعار عادلة',
        card2Text: 'كسر الاحتكارات. تخفيض الأسعار.',
        card3Title: 'مجتمع متماسك',
        card3Text: 'كراهية أقل، وحوار أكثر.',
      },
      poll: {
        eyebrow: 'صوتك',
        question: 'ما الأهم بالنسبة لك؟',
        subtext: 'اختر/ي الآن:',
        option1: '📚 التعليم',
        option2: '💰 الأسعار',
        option3: '🤝 المجتمع',
        statusPrefix: 'اخترت:',
        statusSuffix: 'يُحفظ على جهازك فقط.',
      },
      footer: {
        tagline: 'نصلح معًا. نبدأ الآن.',
        rights: '© {year} جميع الحقوق محفوظة لحزب بيَحَد نتاكين.',
      },
      lang: {
        toggleLabel: 'تغيير اللغة',
      },
    },

    en: {
      nav: { skip: 'Skip to main content' },
      brand: { name: 'Beyachad Netaken' },
      site: {
        title: 'Beyachad Netaken | A Civic Movement for Israel',
        description: 'A young political party in Israel. Education, cost of living and unity — no slogans, just action.',
      },
      hero: {
        badge: 'A real grassroots movement',
        titleMain: 'Fixing the country.',
        titleHighlight: 'Starting now.',
        subtitle: 'Education. Cost of living. Unity. No slogans — just action.',
        cta: 'Our plan in 60 seconds',
        pill1: '⚡ Modern education',
        pill2: '📱 Full transparency',
        pill3: '🤝 Real equality',
        imageAlt: 'Beyachad Netaken activists talking with citizens at a community square, around the movement’s stand.',
        imageBadge: 'Straight from the ground',
        imageCaption: 'Real leadership. Today.',
      },
      about: {
        eyebrow: 'In 10 seconds',
        heading: 'Who are we? ⚡',
        card1Title: 'Who we are',
        card1Text: 'Citizens. Not politicians.',
        card2Title: 'Our goal',
        card2Text: "Fix what's broken.",
        card3Title: 'Why us',
        card3Text: '100% transparency. Always.',
      },
      plan: {
        eyebrow: 'Bottom line',
        heading: "3 things we're doing",
        subheading: 'No long manifestos. Just this:',
        card1Title: 'Education that works',
        card1Text: 'Less pressure, real learning.',
        card2Title: 'Fair prices',
        card2Text: 'Breaking monopolies. Lower costs.',
        card3Title: 'A connected society',
        card3Text: 'Less hate, more dialogue.',
      },
      poll: {
        eyebrow: 'Your vote',
        question: 'What matters most to you?',
        subtext: 'Pick one now:',
        option1: '📚 Education',
        option2: '💰 Prices',
        option3: '🤝 Society',
        statusPrefix: 'You picked:',
        statusSuffix: 'Saved on your device only.',
      },
      footer: {
        tagline: 'Fixing it together. Starting now.',
        rights: '© {year} Beyachad Netaken, a political party in Israel. All rights reserved.',
      },
      lang: {
        toggleLabel: 'Change language',
      },
    },

    ru: {
      nav: { skip: 'Перейти к основному содержанию' },
      brand: { name: 'Беяхад Нетакен' },
      site: {
        title: 'Беяхад Нетакен | Гражданское движение в Израиле',
        description: 'Молодая политическая партия Израиля. Образование, дороговизна жизни и единство — без лозунгов, только дела.',
      },
      hero: {
        badge: 'Настоящее движение снизу',
        titleMain: 'Исправить страну.',
        titleHighlight: 'Начинаем сейчас.',
        subtitle: 'Образование. Дороговизна жизни. Единство. Без лозунгов — только дела.',
        cta: 'Наша программа за 60 секунд',
        pill1: '⚡ Современное образование',
        pill2: '📱 Полная прозрачность',
        pill3: '🤝 Настоящее равенство',
        imageAlt: 'Активисты движения «Беяхад Нетакен» общаются с жителями на городской площади у стенда движения.',
        imageBadge: 'Голос с улиц',
        imageCaption: 'Настоящие лидеры. Уже сегодня.',
      },
      about: {
        eyebrow: 'За 10 секунд',
        heading: 'Кто мы? ⚡',
        card1Title: 'Кто мы',
        card1Text: 'Граждане. Не политики.',
        card2Title: 'Наша цель',
        card2Text: 'Исправить то, что сломано.',
        card3Title: 'Почему мы',
        card3Text: '100% прозрачности. Всегда.',
      },
      plan: {
        eyebrow: 'Суть дела',
        heading: '3 главных направления',
        subheading: 'Без длинных манифестов. Вот и всё:',
        card1Title: 'Образование, которое работает',
        card1Text: 'Меньше давления, реальные знания.',
        card2Title: 'Справедливые цены',
        card2Text: 'Ломаем монополии. Снижаем цены.',
        card3Title: 'Единое общество',
        card3Text: 'Меньше ненависти, больше диалога.',
      },
      poll: {
        eyebrow: 'Ваш голос',
        question: 'Что для вас важнее всего?',
        subtext: 'Выберите сейчас:',
        option1: '📚 Образование',
        option2: '💰 Цены',
        option3: '🤝 Общество',
        statusPrefix: 'Вы выбрали:',
        statusSuffix: 'Сохранено только на вашем устройстве.',
      },
      footer: {
        tagline: 'Чиним всё вместе. Начинаем сейчас.',
        rights: '© {year} Политическая партия «Беяхад Нетакен». Все права защищены.',
      },
      lang: {
        toggleLabel: 'Сменить язык',
      },
    },
  };

  function get(lang, key) {
    var node = TRANSLATIONS[lang];
    var parts = key.split('.');
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return undefined;
      node = node[parts[i]];
    }
    return node;
  }

  function interpolate(value) {
    if (typeof value !== 'string') return value;
    return value.indexOf('{year}') === -1
      ? value
      : value.replace('{year}', String(new Date().getFullYear()));
  }

  function detectInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (err) {
      /* Storage unavailable — fall through to detection. */
    }

    var nav = (navigator.language || navigator.userLanguage || 'he').toLowerCase().slice(0, 2);
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'he';
  }

  function applyLanguage(lang, opts) {
    opts = opts || {};
    if (SUPPORTED.indexOf(lang) === -1) lang = 'he';
    var meta = META[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = get(lang, el.getAttribute('data-i18n'));
      if (value !== undefined) el.textContent = interpolate(value);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var bits = pair.split(':');
        var attr = bits[0] && bits[0].trim();
        var key = bits[1] && bits[1].trim();
        if (!attr || !key) return;
        var value = get(lang, key);
        if (value !== undefined) el.setAttribute(attr, interpolate(value));
      });
    });

    var ogLocaleEl = document.querySelector('meta[property="og:locale"]');
    if (ogLocaleEl) ogLocaleEl.setAttribute('content', meta.ogLocale);

    var currentEl = document.querySelector('[data-lang-current]');
    if (currentEl) currentEl.textContent = meta.short;

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-current', isActive ? 'true' : 'false');
      btn.classList.toggle('is-active', isActive);
    });

    if (!opts.silent) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (err) {
        /* Private browsing or blocked storage — language still applies this visit. */
      }
    }

    window.Beyahad.currentLang = lang;
    document.dispatchEvent(new CustomEvent('beyahad:langchange', { detail: { lang: lang } }));
  }

  window.Beyahad = window.Beyahad || {};
  window.Beyahad.supportedLangs = SUPPORTED;
  window.Beyahad.t = get;
  window.Beyahad.applyLanguage = applyLanguage;
  window.Beyahad.currentLang = null;

  document.addEventListener('DOMContentLoaded', function () {
    applyLanguage(detectInitialLang(), { silent: true });

    var switcher = document.querySelector('[data-lang-switcher]');
    if (!switcher) return;

    var toggle = switcher.querySelector('[data-lang-toggle]');
    var menu = switcher.querySelector('[data-lang-menu]');
    if (!toggle || !menu) return;

    function closeMenu() {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
      menu.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', function (event) {
      event.stopPropagation();
      if (menu.hidden) openMenu();
      else closeMenu();
    });

    menu.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
        closeMenu();
        toggle.focus();
      });
    });

    document.addEventListener('click', function (event) {
      if (!switcher.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !menu.hidden) {
        closeMenu();
        toggle.focus();
      }
    });
  });
})();
