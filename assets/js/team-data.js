/* ביחד — candidate roster.
 *
 * Source: https://be-yahad.org.il/team/ (fetched 2026-10-19). Names, ages,
 * cities and bios condensed from each candidate's own profile page — see
 * /materials/team/ for the raw extracts. Candidates 1–10 get a one-line bio;
 * 11–20 show name + one role tag only (kept short on purpose, matching the
 * rest of the site). Photos are the party's own official headshots.
 */
(function () {
  'use strict';

  var TEAM = [
    {
      id: 1, photo: 'assets/img/team/01.jpg', age: 54,
      city: { he: 'רעננה', ar: 'رعنانا', en: "Ra'anana", ru: 'Раанана' },
      name: { he: 'נפתלי בנט', ar: 'نفتالي بينيت', en: 'Naftali Bennett', ru: 'Нафтали Беннет' },
      tags: {
        he: ['ראש ממשלה לשעבר', 'יזם הייטק'],
        ar: ['رئيس وزراء سابق', 'رائد أعمال تقني'],
        en: ['Former Prime Minister', 'Tech entrepreneur'],
        ru: ['Экс-премьер-министр', 'Техпредприниматель'],
      },
      bio: {
        he: 'לוחם, יזם הייטק וראש ממשלה לשעבר שמביא ניסיון אמיתי בהנהגה ובאיחוד אנשים סביב מטרה אחת.',
        ar: 'مقاتل سابق ورائد أعمال تقني ورئيس وزراء سابق، يملك خبرة حقيقية في القيادة وفي توحيد الناس حول هدف واحد.',
        en: 'A former combat soldier, tech entrepreneur and Prime Minister, bringing real experience leading and uniting people around one goal.',
        ru: 'Бывший боец спецназа, техпредприниматель и экс-премьер-министр с реальным опытом руководства и объединения людей вокруг одной цели.',
      },
    },
    {
      id: 2, photo: 'assets/img/team/02.jpg', age: 62,
      city: { he: 'תל אביב יפו', ar: 'تل أبيب يافا', en: 'Tel Aviv-Yafo', ru: 'Тель-Авив-Яффо' },
      name: { he: 'יאיר לפיד', ar: 'يائير لبيد', en: 'Yair Lapid', ru: 'Яир Лапид' },
      tags: {
        he: ['ראש ממשלה לשעבר', 'שר חוץ ואוצר לשעבר'],
        ar: ['رئيس وزراء سابق', 'وزير خارجية ومالية سابق'],
        en: ['Former Prime Minister', 'Former Foreign & Finance Minister'],
        ru: ['Экс-премьер-министр', 'Экс-министр иностр. дел и финансов'],
      },
      bio: {
        he: 'ראש ממשלה לשעבר ושר חוץ ואוצר לשעבר, שהוביל תרופות חינם לניצולי שואה וחוק פורץ דרך לזכויות אנשים עם מוגבלות.',
        ar: 'رئيس وزراء سابق ووزير خارجية ومالية سابق، قاد توفير أدوية مجانية للناجين من المحرقة وقانونًا رائدًا لحقوق ذوي الإعاقة.',
        en: 'Former Prime Minister and Foreign/Finance Minister, who led free medication for Holocaust survivors and a landmark disability-rights law.',
        ru: 'Экс-премьер-министр и бывший министр иностранных дел и финансов, добившийся бесплатных лекарств для переживших Холокост и закона о правах инвалидов.',
      },
    },
    {
      id: 3, photo: 'assets/img/team/03.jpg', age: 47,
      city: { he: 'מושב הדר עם', ar: 'موشاف هدار عام', en: "Moshav Hadar Am", ru: 'мошав Адар-Ам' },
      name: { he: 'קרן טרנר', ar: 'كيرن تيرنر', en: 'Keren Turner', ru: 'Карен Тёрнер' },
      tags: {
        he: ['מנכ"לית משרד התחבורה לשעבר', 'מנכ"לית משרד האוצר לשעבר'],
        ar: ['مديرة عامة سابقة لوزارة النقل', 'مديرة عامة سابقة لوزارة المالية'],
        en: ['Former Transportation Ministry Director-General', 'Former Finance Ministry Director-General'],
        ru: ['Экс-гендиректор минтранса', 'Экс-гендиректор минфина'],
      },
      bio: {
        he: 'מנכ"לית לשעבר של משרדי התחבורה והאוצר, עם ניסיון עשיר בהובלת רפורמות לאומיות מורכבות.',
        ar: 'مديرة عامة سابقة لوزارتي النقل والمالية، وتملك خبرة واسعة في قيادة إصلاحات وطنية كبرى.',
        en: 'Former Director-General of the Transportation and Finance Ministries, with deep experience leading major national reforms.',
        ru: 'Бывший генеральный директор министерств транспорта и финансов, с большим опытом проведения крупных национальных реформ.',
      },
    },
    {
      id: 4, photo: 'assets/img/team/04.jpg', age: 50,
      city: { he: 'תל אביב', ar: 'تل أبيب', en: 'Tel Aviv', ru: 'Тель-Авив' },
      name: { he: 'מירב בן ארי', ar: 'ميراف بن آري', en: 'Merav Ben Ari', ru: 'Мерав Бен-Ари' },
      tags: {
        he: ['יו"ר ועדת ביטחון פנים', 'יו"ר סיעת יש עתיד'],
        ar: ['رئيسة لجنة الأمن الداخلي', 'رئيسة كتلة يش عتيد'],
        en: ['Chair, Internal Security Committee', 'Yesh Atid Faction Leader'],
        ru: ['Глава комиссии по внутр. безопасности', 'Лидер фракции «Еш Атид»'],
      },
      bio: {
        he: 'ח"כית שהקימה את ועדת ביטחון הפנים והובילה חקיקה פורצת דרך להגנה על נשים ונפגעות עבירה.',
        ar: 'عضو كنيست أسّست وترأست لجنة الأمن الداخلي وقادت تشريعًا رائدًا لحماية النساء وضحايا الجريمة.',
        en: 'MK who established and chaired the Internal Security Committee and led groundbreaking legislation protecting women and crime victims.',
        ru: 'Депутат кнессета, создавшая и возглавившая комиссию по внутренней безопасности и продвинувшая закон о защите женщин и жертв преступлений.',
      },
    },
    {
      id: 5, photo: 'assets/img/team/05.jpg', age: 49,
      city: { he: 'כפר סירקין', ar: 'كفار سيركين', en: 'Kfar Sirkin', ru: 'Кфар-Сиркин' },
      name: { he: 'לירן אבישר בן חורין', ar: 'ليران أبيشار بن حورين', en: 'Liran Avishar Ben Horin', ru: 'Лиран Авишар Бен-Хорин' },
      tags: {
        he: ['מנכ"לית משרד התקשורת לשעבר'],
        ar: ['مديرة عامة سابقة لوزارة الاتصالات'],
        en: ['Former Communications Ministry Director-General'],
        ru: ['Экс-гендиректор минсвязи'],
      },
      bio: {
        he: 'מנכ"לית לשעבר של משרד התקשורת, הובילה את מהפכת הסיבים האופטיים בישראל.',
        ar: 'مديرة عامة سابقة لوزارة الاتصالات، قادت ثورة الألياف الضوئية في إسرائيل.',
        en: "Former Director-General of the Communications Ministry, who led Israel's fiber-optic rollout.",
        ru: 'Бывший генеральный директор министерства связи, руководившая развёртыванием оптоволоконных сетей в Израиле.',
      },
    },
    {
      id: 6, photo: 'assets/img/team/06.jpg', age: 64,
      city: { he: 'תל אביב יפו', ar: 'تل أبيب يافا', en: 'Tel Aviv-Yafo', ru: 'Тель-Авив-Яффо' },
      name: { he: 'נעם תיבון', ar: 'نعام تيفون', en: 'Noam Tivon', ru: 'Ноам Тивон' },
      tags: {
        he: ['אלוף במילואים'],
        ar: ['لواء احتياط'],
        en: ['Reserve Major General'],
        ru: ['Генерал-майор запаса'],
      },
      bio: {
        he: 'אלוף במילואים שלחם בעוטף עזה ב-7 באוקטובר והציל ניצולי נובה, ומוביל כיום את מאבק המשפחות לוועדת חקירה ממלכתית.',
        ar: 'لواء احتياط قاتل في محيط غزة في 7 أكتوبر وأنقذ ناجين من مهرجان نوفا، ويقود اليوم نضال العائلات من أجل لجنة تحقيق رسمية.',
        en: 'A reserve Major General who fought near Gaza on October 7 and rescued Nova festival survivors; now leads families’ fight for a state inquiry.',
        ru: 'Генерал-майор запаса, сражавшийся у границы с сектором Газа 7 октября и спасавший выживших на фестивале Nova; сейчас возглавляет борьбу семей за государственную комиссию по расследованию.',
      },
    },
    {
      id: 7, photo: 'assets/img/team/07.jpg', age: 59,
      city: { he: 'הרצליה', ar: 'هرتسليا', en: 'Herzliya', ru: 'Герцлия' },
      name: { he: 'מיכל נגרי', ar: 'ميخال نجري', en: 'Michal Negri', ru: 'Михаль Негри' },
      tags: {
        he: ['מנכ"לית עיריית רעננה לשעבר'],
        ar: ['مديرة عامة سابقة لبلدية رعنانا'],
        en: ["Former Ra'anana Municipality Director-General"],
        ru: ['Экс-гендиректор мэрии Раананы'],
      },
      bio: {
        he: 'מנכ"לית לשעבר של עיריית רעננה וראש מינהל החינוך בה, שבתקופתה זכתה העירייה בפרס החינוך הארצי על הכלת אוכלוסיות.',
        ar: 'مديرة عامة سابقة لبلدية رعنانا ورئيسة إدارة التعليم فيها، التي فازت بجائزة التعليم الوطنية لدمج الفئات المختلفة في عهدها.',
        en: "Former Director-General of the Ra'anana municipality and head of its education administration, which won the national education prize for inclusion under her.",
        ru: 'Бывший генеральный директор мэрии Раананы и глава управления образования города, получившего национальную премию за инклюзивное образование при ней.',
      },
    },
    {
      id: 8, photo: 'assets/img/team/08.jpg', age: 49,
      city: { he: 'רעננה', ar: 'رعنانا', en: "Ra'anana", ru: 'Раанана' },
      name: { he: 'איתן גינזבורג', ar: 'إيتان غينزبورغ', en: 'Eitan Ginzburg', ru: 'Эйтан Гинзбург' },
      tags: {
        he: ['ראש עיריית רעננה לשעבר', 'שר תקשורת לשעבר'],
        ar: ['رئيس بلدية رعنانا السابق', 'وزير اتصالات سابق'],
        en: ["Former Mayor of Ra'anana", 'Former Communications Minister'],
        ru: ['Экс-мэр Раананы', 'Экс-министр связи'],
      },
      bio: {
        he: 'עורך דין, ראש עיריית רעננה לשעבר ושר התקשורת לשעבר; ראש העיר הגאה המוצהר הראשון בישראל.',
        ar: 'محامٍ، رئيس بلدية رعنانا السابق ووزير اتصالات سابق؛ أول رئيس بلدية معلن مثليته في إسرائيل.',
        en: "An attorney, former Mayor of Ra'anana and former Communications Minister; Israel's first openly gay mayor.",
        ru: 'Адвокат, бывший мэр Раананы и экс-министр связи; первый открыто гей-мэр в Израиле.',
      },
    },
    {
      id: 9, photo: 'assets/img/team/09.jpg', age: 42,
      city: { he: 'ירושלים', ar: 'القدس', en: 'Jerusalem', ru: 'Иерусалим' },
      name: { he: 'מירב כהן', ar: 'ميراف كوهين', en: 'Merav Cohen', ru: 'Мерав Коэн' },
      tags: {
        he: ['שרה לשוויון חברתי לשעבר'],
        ar: ['وزيرة مساواة اجتماعية سابقة'],
        en: ['Former Minister of Social Equality'],
        ru: ['Экс-министр социального равенства'],
      },
      bio: {
        he: 'ח"כית ושרה לשעבר לשוויון חברתי, הורידה את שיעור העוני בקרב הגיל השלישי ומובילה מאבק לצמצום פערים.',
        ar: 'عضو كنيست ووزيرة مساواة اجتماعية سابقة، خفّضت نسبة الفقر بين كبار السن وتقود النضال لتقليص الفجوات الاجتماعية.',
        en: 'MK and former Minister of Social Equality, who lowered poverty among the elderly and leads the fight to close social gaps.',
        ru: 'Депутат кнессета и бывший министр социального равенства, снизившая уровень бедности среди пожилых и борющаяся за сокращение социального разрыва.',
      },
    },
    {
      id: 10, photo: 'assets/img/team/10.jpg', age: 23,
      city: { he: 'זכרון יעקב', ar: 'زخرون يعقوب', en: "Zichron Ya'akov", ru: 'Зихрон-Яаков' },
      name: { he: 'יונתן שלו', ar: 'يوناتان شالو', en: 'Yonatan Shalu', ru: 'Йонатан Шалу' },
      tags: {
        he: ['לוחם ומפקד במגלן', 'מייסד "כתף אל כתף"'],
        ar: ['مقاتل وقائد في وحدة مغلان', 'مؤسس حركة "كتف إلى كتف"'],
        en: ['Maglan fighter & commander', 'Founder, "Shoulder to Shoulder"'],
        ru: ['Боец и командир «Маглан»', 'Основатель «Плечом к плечу»'],
      },
      bio: {
        he: 'המועמד הצעיר ביותר אי פעם לכנסת; לוחם ומפקד במגלן ומייסד תנועת "כתף אל כתף" שבלמה את חוקי ההשתמטות.',
        ar: 'أصغر مرشح للكنيست على الإطلاق؛ مقاتل وقائد في وحدة "مغلان" ومؤسس حركة "كتف إلى كتف" التي أوقفت قوانين التهرب من الخدمة.',
        en: 'The youngest Knesset candidate ever — a Maglan fighter and commander who founded "Shoulder to Shoulder," the movement that stopped the draft-exemption laws.',
        ru: 'Самый молодой кандидат в кнессет за всю историю — боец и командир «Маглан», основатель движения «Плечом к плечу», остановившего законы об уклонении от службы.',
      },
    },
    {
      id: 11, photo: 'assets/img/team/11.jpg', age: 53,
      city: { he: 'ראש העין', ar: 'روش هعاين', en: 'Rosh HaAyin', ru: 'Рош-ха-Аин' },
      name: { he: 'ברוריה נעים ארמן', ar: 'بروريا نعيم أرمان', en: 'Bruria Naim Arman', ru: 'Брурия Наим Арман' },
      tags: {
        he: ['קידום ייצוג נשים'], ar: ['تمثيل المرأة'],
        en: ["Women's representation"], ru: ['Представительство женщин'],
      },
    },
    {
      id: 12, photo: 'assets/img/team/12.jpg', age: 68,
      city: { he: 'נהלל', ar: 'نهلال', en: 'Nahalal', ru: 'Нахалаль' },
      name: { he: 'רם בן ברק', ar: 'رام بن براك', en: 'Ram Ben Barak', ru: 'Рам Бен-Барак' },
      tags: { he: ['ביטחון'], ar: ['الأمن'], en: ['Security'], ru: ['Безопасность'] },
    },
    {
      id: 13, photo: 'assets/img/team/13.jpg', age: 41,
      city: { he: 'קיבוץ כרמים', ar: 'كيبوتس كرميم', en: 'Kibbutz Karmim', ru: 'кибуц Кармим' },
      name: { he: 'אמיר סטרוגו', ar: 'أمير ستروغو', en: 'Amir Strugo', ru: 'Амир Струго' },
      tags: { he: ['חינוך'], ar: ['التعليم'], en: ['Education'], ru: ['Образование'] },
    },
    {
      id: 14, photo: 'assets/img/team/14.jpg', age: 41,
      city: { he: 'הוד השרון', ar: 'هود هشارون', en: 'Hod HaSharon', ru: 'Ход-ха-Шарон' },
      name: { he: 'נאור שירי', ar: 'ناؤور شيري', en: 'Naor Shiri', ru: 'Наор Шири' },
      tags: { he: ['חינוך'], ar: ['التعليم'], en: ['Education'], ru: ['Образование'] },
    },
    {
      id: 15, photo: 'assets/img/team/15.jpg', age: 42,
      city: { he: 'כפר גלעדי', ar: 'كفار جلعادي', en: 'Kfar Giladi', ru: 'Кфар-Гилади' },
      name: { he: 'ניסן זאבי', ar: 'نيسان زئيفي', en: "Nisan Ze'evi", ru: 'Нисан Зееви' },
      tags: {
        he: ['שיקום הצפון והנגב'], ar: ['إعادة إعمار الشمال والنقب'],
        en: ['Rebuilding the North & Negev'], ru: ['Возрождение севера и Негева'],
      },
    },
    {
      id: 16, photo: 'assets/img/team/16.jpg', age: 52,
      city: { he: 'מודיעין מכבים רעות', ar: 'موديعين مكابيم ريعوت', en: "Modi'in-Maccabim-Re'ut", ru: 'Модиин-Маккабим-Реут' },
      name: { he: 'ולדימיר בליאק', ar: 'فلاديمير بلياك', en: 'Vladimir Beliak', ru: 'Владимир Беляк' },
      tags: {
        he: ['רגולציה והגבלים עסקיים'], ar: ['التنظيم ومكافحة الاحتكار'],
        en: ['Regulation & antitrust'], ru: ['Регулирование и антимонополия'],
      },
    },
    {
      id: 17, photo: 'assets/img/team/17.jpg', age: 51,
      city: { he: 'הוד השרון', ar: 'هود هشارون', en: 'Hod HaSharon', ru: 'Ход-ха-Шарон' },
      name: { he: 'אורלי הראל', ar: 'أورلي هاريل', en: 'Orly Harel', ru: 'Орли Харэль' },
      tags: { he: ['ביטחון וחינוך'], ar: ['الأمن والتعليم'], en: ['Security & education'], ru: ['Безопасность и образование'] },
    },
    {
      id: 18, photo: 'assets/img/team/18.jpg', age: 37,
      city: { he: 'תל אביב', ar: 'تل أبيب', en: 'Tel Aviv', ru: 'Тель-Авив' },
      name: { he: 'יוראי להב הרצנו', ar: 'يوراي لاهاف هرتسنو', en: 'Yoray Lahav Hartzno', ru: 'Йорай Лахав Арцено' },
      tags: {
        he: ['איכות סביבה וזכויות להט"ב'], ar: ['البيئة وحقوق المثليين'],
        en: ['Environment & LGBTQ+ rights'], ru: ['Экология и права ЛГБТ+'],
      },
    },
    {
      id: 19, photo: 'assets/img/team/19.jpg', age: 30,
      city: { he: 'לפיד', ar: 'لابيد', en: 'Lapid', ru: 'Лапид' },
      name: { he: 'שחר ורון', ar: 'شاحار فارون', en: 'Shachar Varon', ru: 'Шахар Варон' },
      tags: {
        he: ['שיקום פצועי צה"ל'], ar: ['إعادة تأهيل جرحى الجيش'],
        en: ['IDF wounded rehabilitation'], ru: ['Реабилитация раненых ЦАХАЛ'],
      },
    },
    {
      id: 20, photo: 'assets/img/team/20.jpg', age: 53,
      city: { he: 'באר שבע', ar: 'بئر السبع', en: 'Beer Sheva', ru: 'Беэр-Шева' },
      name: { he: 'יסמין סאקס פרידמן', ar: 'ياسمين ساكس فريدمن', en: 'Yasmin Sachs Friedman', ru: 'Ясмин Сакс Фридман' },
      tags: {
        he: ['בריאות וצמצום פערים בנגב'], ar: ['الصحة وتقليص الفجوات في النقب'],
        en: ['Health & closing Negev gaps'], ru: ['Здравоохранение и Негев'],
      },
    },
  ];

  window.Beyahad = window.Beyahad || {};
  window.Beyahad.team = TEAM;
})();
