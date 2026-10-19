/* ביחד — translations + language switching.
 *
 * Content reflects the real party platform at be-yahad.org.il (fetched
 * 2026-10-19 — see /materials/ for sourcing). Kept short on purpose: one
 * headline stat + one short line per policy, matching the rest of the site.
 * Every piece of on-page copy lives here, keyed to match the
 * `data-i18n="key.path"` / `data-i18n-attr="attr:key.path"` attributes in
 * index.html (team bios are separate, in team-data.js).
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
      brand: { name: 'ביחד', logoAlt: 'ביחד — בראשות נפתלי בנט' },
      site: {
        title: 'ביחד | רק ביחד נתקן את ישראל',
        description: 'מפלגת ביחד בראשות נפתלי בנט ויאיר לפיד. שוויון בנטל, יוקר מחיה, חינוך ועוד — תוכניות תיקון, לא סיסמאות.',
      },
      hero: {
        dateBadge: 'הבחירות ב-27 באוקטובר 2026',
        titleMain: 'ב-27 באוקטובר',
        titleHighlight: 'מתקנים את ישראל',
        subtitle: 'רק ביחד, בראשות נפתלי בנט, מוכנים עם תוכניות תיקון ונבחרת של ביצועיסטים.',
        ctaJoin: 'להצטרף',
        ctaPlans: 'לתוכניות התיקון',
        pill1: '🪖 שוויון בנטל',
        pill2: '💰 ‎-30% יוקר מחיה',
        pill3: '🏠 100,000 דירות',
      },
      about: {
        eyebrow: 'מי אנחנו',
        heading: 'לא עוד הבטחות. רק ביצוע.',
        card1Title: 'מי אנחנו',
        card1Text: 'מיזוג של בנט ולפיד. מפלגה חדשה שהוקמה באפריל 2026.',
        card2Title: 'המטרה',
        card2Text: 'לתקן את ישראל – לא עוד עסקנות, רק ביצוע.',
        card3Title: 'הנבחרת',
        card3Text: '35 ביצועיסטים עם ניסיון אמיתי בשטח, לא עסקנים.',
      },
      plan: {
        eyebrow: 'תוכניות תיקון',
        heading: '6 התוכניות המרכזיות שלנו',
        subheading: 'בלי מגילות ארוכות. תכל\'ס, עם מספרים:',
        card1Title: 'שוויון בנטל',
        card1Stat: 'מי שמשרת, מקבל',
        card1Text: 'מבטלים את חוק ההשתמטות ביום הראשון. בלי פטורים, בלי מכסות.',
        card2Title: 'יוקר המחיה',
        card2Stat: '-30% על הסל תוך 3 שנים',
        card2Text: 'שוברים את המונופולים על המזון ופותחים את השוק לתחרות.',
        card3Title: 'חינוך',
        card3Stat: '12,000 ₪ שכר התחלתי למורה',
        card3Text: '100% לימודי ליבה או 0% תקצוב. מחזירים סמכות לבתי הספר.',
        card4Title: 'דיור',
        card4Stat: '100,000 דירות להשכרה בעשור',
        card4Text: 'מיליון ₪ הנחה לדירה למשרתי מילואים פעילים.',
        card5Title: 'תחבורה',
        card5Stat: 'רכבת כל 10 דקות',
        card5Text: '200 ק"מ נתיבי תחבורה ציבורית חדשים, בלי עוד פקקים.',
        card6Title: 'בריאות',
        card6Stat: 'מרפאות קהילתיות בכל הארץ תוך 5 שנים',
        card6Text: 'מחזירים רופאים ישראלים הביתה ומקצרים את ההמתנה.',
        sourceNote: 'המספרים מהמצע הרשמי. 24 תוכניות תיקון נוספות באתר הרשמי.',
        sourceLink: 'לכל תוכניות התיקון',
      },
      cta: {
        eyebrow: 'מצטרפים?',
        heading: 'רק ביחד נתקן. בואו גם אתם.',
        text: 'הצטרפות או התנדבות לוקחות דקה, והן באתר הרשמי של המפלגה.',
        joinBtn: 'להצטרף',
        volunteerBtn: 'להתנדב',
      },
      team: {
        eyebrow: 'הנבחרת',
        heading: 'ביצועיסטים, לא עסקנים',
        subheading: '20 מתוך 35 חברי הנבחרת:',
        seeAll: 'לכל 35 חברי הנבחרת',
      },
      footer: {
        tagline: 'רק ביחד נתקן את ישראל.',
        rights: '© {year} כל הזכויות שמורות למפלגת ביחד בראשות נפתלי בנט.',
      },
    },

    ar: {
      nav: { skip: 'تخطَّ إلى المحتوى الرئيسي' },
      brand: { name: 'معًا', logoAlt: 'معًا — بقيادة نفتالي بينيت' },
      site: {
        title: 'معًا | فقط معًا نُصلح إسرائيل',
        description: 'حزب معًا بقيادة نفتالي بينيت ويائير لبيد. المساواة في الخدمة، غلاء المعيشة، التعليم وأكثر — خطط إصلاح حقيقية، لا شعارات.',
      },
      hero: {
        dateBadge: 'الانتخابات في 27 أكتوبر 2026',
        titleMain: 'في 27 أكتوبر',
        titleHighlight: 'نُصلح إسرائيل',
        subtitle: 'فقط معًا، بقيادة نفتالي بينيت، جاهزون بخطط إصلاح وفريق من أهل الإنجاز.',
        ctaJoin: 'انضم إلينا',
        ctaPlans: 'خطط الإصلاح',
        pill1: '🪖 المساواة في الخدمة',
        pill2: '💰 ‎-30% غلاء المعيشة',
        pill3: '🏠 100,000 وحدة سكنية',
      },
      about: {
        eyebrow: 'من نحن',
        heading: 'لا مزيد من الوعود. فقط الإنجاز.',
        card1Title: 'من نحن',
        card1Text: 'اندماج بين بينيت ولبيد. حزب جديد تأسس في أبريل 2026.',
        card2Title: 'هدفنا',
        card2Text: 'إصلاح إسرائيل – لا مزيد من السياسات الحزبية، فقط الإنجاز.',
        card3Title: 'الفريق',
        card3Text: '35 من أهل الإنجاز بخبرة ميدانية حقيقية، لا سياسيين تقليديين.',
      },
      plan: {
        eyebrow: 'خطط الإصلاح',
        heading: '6 خططنا الرئيسية',
        subheading: 'بلا خطابات طويلة. بالأرقام:',
        card1Title: 'المساواة في الخدمة',
        card1Stat: 'من يخدم، يحصل',
        card1Text: 'إلغاء قانون التهرب من الخدمة في اليوم الأول. بلا إعفاءات وبلا حصص.',
        card2Title: 'غلاء المعيشة',
        card2Stat: '‎-30% على سلة الغذاء خلال 3 سنوات',
        card2Text: 'كسر احتكارات الغذاء وفتح السوق أمام المنافسة.',
        card3Title: 'التعليم',
        card3Stat: 'راتب ابتدائي 12,000 ₪ للمعلم',
        card3Text: '100% منهاج أساسي أو 0% تمويل. إعادة الصلاحيات للمدارس.',
        card4Title: 'السكن',
        card4Stat: '100,000 وحدة إيجار خلال عقد',
        card4Text: 'مليون ₪ خصم على شقة لجنود الاحتياط الفعّالين.',
        card5Title: 'النقل',
        card5Stat: 'قطار كل 10 دقائق',
        card5Text: '200 كم من ممرات النقل العام الجديدة — نهاية الازدحام.',
        card6Title: 'الصحة',
        card6Stat: 'عيادات مجتمعية في كل البلاد خلال 5 سنوات',
        card6Text: 'إعادة الأطباء الإسرائيليين وتقليص أوقات الانتظار.',
        sourceNote: 'الأرقام من المنهاج الرسمي. 24 خطة إصلاح إضافية على الموقع الرسمي.',
        sourceLink: 'كل خطط الإصلاح',
      },
      cta: {
        eyebrow: 'هل تنضم؟',
        heading: 'فقط معًا نُصلح. انضم أنت أيضًا.',
        text: 'الانضمام أو التطوع يستغرقان دقيقة واحدة، على الموقع الرسمي للحزب.',
        joinBtn: 'انضم إلينا',
        volunteerBtn: 'تطوع',
      },
      team: {
        eyebrow: 'الفريق',
        heading: 'أهل إنجاز، لا سياسيين تقليديين',
        subheading: '20 من أصل 35 عضوًا في الفريق:',
        seeAll: 'لكل أعضاء الفريق الـ35',
      },
      footer: {
        tagline: 'فقط معًا نُصلح إسرائيل.',
        rights: '© {year} جميع الحقوق محفوظة لحزب معًا بقيادة نفتالي بينيت.',
      },
    },

    en: {
      nav: { skip: 'Skip to main content' },
      brand: { name: 'Together', logoAlt: 'Together — led by Naftali Bennett' },
      site: {
        title: 'Together | Only together will we fix Israel',
        description: 'The Together party, led by Naftali Bennett and Yair Lapid. Equality of burden, cost of living, education and more — real fix-it plans, not slogans.',
      },
      hero: {
        dateBadge: 'Elections on October 27, 2026',
        titleMain: 'On October 27,',
        titleHighlight: 'we fix Israel',
        subtitle: 'Only Together, led by Naftali Bennett, ready with fix-it plans and a team of doers.',
        ctaJoin: 'Join us',
        ctaPlans: 'See the plans',
        pill1: '🪖 Equality of burden',
        pill2: '💰 ‎-30% cost of living',
        pill3: '🏠 100,000 homes',
      },
      about: {
        eyebrow: 'Who we are',
        heading: 'No more promises. Just doing.',
        card1Title: 'Who we are',
        card1Text: 'A merger of Bennett and Lapid. A new party, founded April 2026.',
        card2Title: 'Our goal',
        card2Text: 'Fix Israel — no more politics-as-usual, just execution.',
        card3Title: 'The team',
        card3Text: '35 doers with real field experience, not career politicians.',
      },
      plan: {
        eyebrow: 'Fix-it plans',
        heading: 'Our 6 flagship plans',
        subheading: "No long manifestos. Here's the numbers:",
        card1Title: 'Equality of burden',
        card1Stat: 'Those who serve, get',
        card1Text: 'Abolishing the draft-exemption law on day one. No exemptions, no quotas.',
        card2Title: 'Cost of living',
        card2Stat: '-30% on groceries in 3 years',
        card2Text: 'Breaking food monopolies and opening the market to competition.',
        card3Title: 'Education',
        card3Stat: '₪12,000 starting teacher salary',
        card3Text: '100% core curriculum or 0% funding. Power back to schools.',
        card4Title: 'Housing',
        card4Stat: '100,000 rental homes in a decade',
        card4Text: '₪1 million apartment discount for active reservists.',
        card5Title: 'Transportation',
        card5Stat: 'A train every 10 minutes',
        card5Text: '200km of new public transit lanes — no more gridlock.',
        card6Title: 'Healthcare',
        card6Stat: 'Community clinics nationwide within 5 years',
        card6Text: 'Bringing Israeli doctors home and cutting wait times.',
        sourceNote: 'Figures from the official platform. 24 more fix-it plans on the official site.',
        sourceLink: 'See all fix-it plans',
      },
      cta: {
        eyebrow: 'Join us?',
        heading: 'Only Together will fix it. Join in.',
        text: 'Joining or volunteering takes a minute, on the party\'s official site.',
        joinBtn: 'Join us',
        volunteerBtn: 'Volunteer',
      },
      team: {
        eyebrow: 'The team',
        heading: 'Doers, not career politicians',
        subheading: '20 of our 35 candidates:',
        seeAll: 'See all 35 candidates',
      },
      footer: {
        tagline: 'Only together will we fix Israel.',
        rights: '© {year} All rights reserved to the Together party, led by Naftali Bennett.',
      },
    },

    ru: {
      nav: { skip: 'Перейти к основному содержанию' },
      brand: { name: 'Вместе', logoAlt: 'Вместе — во главе с Нафтали Беннетом' },
      site: {
        title: 'Вместе | Только вместе мы исправим Израиль',
        description: 'Партия «Вместе» во главе с Нафтали Беннетом и Яиром Лапидом. Равенство в служении, дороговизна жизни, образование и другое — реальные планы, а не лозунги.',
      },
      hero: {
        dateBadge: 'Выборы 27 октября 2026',
        titleMain: '27 октября',
        titleHighlight: 'мы исправим Израиль',
        subtitle: 'Только «Вместе», во главе с Нафтали Беннетом, готовы с реальными планами и командой профессионалов.',
        ctaJoin: 'Присоединиться',
        ctaPlans: 'Все планы',
        pill1: '🪖 Равенство в служении',
        pill2: '💰 ‎-30% дороговизна жизни',
        pill3: '🏠 100 000 квартир',
      },
      about: {
        eyebrow: 'Кто мы',
        heading: 'Хватит обещаний. Только дела.',
        card1Title: 'Кто мы',
        card1Text: 'Слияние партий Беннета и Лапида. Новая партия, основанная в апреле 2026.',
        card2Title: 'Наша цель',
        card2Text: 'Исправить Израиль — никакой обычной политики, только исполнение.',
        card3Title: 'Команда',
        card3Text: '35 профессионалов с реальным опытом работы на местах, а не карьерные политики.',
      },
      plan: {
        eyebrow: 'Планы реформ',
        heading: 'Наши 6 ключевых планов',
        subheading: 'Без длинных манифестов. Вот цифры:',
        card1Title: 'Равенство в служении',
        card1Stat: 'Кто служит — получает',
        card1Text: 'Отмена закона об освобождении от призыва в первый же день. Без исключений и квот.',
        card2Title: 'Дороговизна жизни',
        card2Stat: '−30% на продукты за 3 года',
        card2Text: 'Разрушаем продуктовые монополии и открываем рынок конкуренции.',
        card3Title: 'Образование',
        card3Stat: '12 000 ₪ стартовая зарплата учителя',
        card3Text: '100% базовой программы или 0% финансирования. Полномочия — школам.',
        card4Title: 'Жильё',
        card4Stat: '100 000 съёмных квартир за десятилетие',
        card4Text: 'Скидка 1 млн ₪ на квартиру для резервистов.',
        card5Title: 'Транспорт',
        card5Stat: 'Поезд каждые 10 минут',
        card5Text: '200 км новых полос общественного транспорта — конец пробкам.',
        card6Title: 'Здравоохранение',
        card6Stat: 'Общественные клиники по всей стране за 5 лет',
        card6Text: 'Возвращаем израильских врачей домой и сокращаем очереди.',
        sourceNote: 'Цифры из официальной программы. Ещё 24 плана — на официальном сайте.',
        sourceLink: 'Все планы реформ',
      },
      cta: {
        eyebrow: 'Присоединитесь?',
        heading: 'Только вместе мы это исправим. Присоединяйтесь.',
        text: 'Регистрация или волонтёрство занимают минуту — на официальном сайте партии.',
        joinBtn: 'Присоединиться',
        volunteerBtn: 'Стать волонтёром',
      },
      team: {
        eyebrow: 'Команда',
        heading: 'Профессионалы, а не карьерные политики',
        subheading: '20 из 35 кандидатов:',
        seeAll: 'Все 35 кандидатов',
      },
      footer: {
        tagline: 'Только вместе мы исправим Израиль.',
        rights: '© {year} Все права защищены партией «Вместе» во главе с Нафтали Беннетом.',
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
