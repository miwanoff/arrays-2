let en = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
let ua = [
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п'ятниця",
  "субота",
  "неділя",
];
let ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];
let lang = prompt("input  'ua' 'en' 'ru'" );
let n = prompt("input n");
switch (lang) {
    case "en": alert(en[n-1]); break;
    // case "ru":... break;
    // case "ua":... break;
    default: alert("Ведіть мову правильно!");
  }