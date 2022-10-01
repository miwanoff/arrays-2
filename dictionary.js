"use strict";
let words = {
  apple: "яблуко",
  house: "будинок",
  mouse: "миша",
};
let word; // слово
let ball = 0; // лічильник правильних відповідей
let errors = 0; // лічильник помилок
let translate; // Змінна для зберігання того, що ввів користувач
// for (let key in words) {
//   document.write(key + " зберігає " + words[key] + "<br />");
// }
label: while (true) {
  for (word in words) {
    alert("Слово:" + word);
    translate = prompt("Введіть переклад для завершення -'!'");
    if (translate == "!") {
      break label;
    }
    if (translate == words[word]) {
      alert("Правильно!");
      ball++;
    } else {
      alert("Неправильно!");
      errors++;
    }
  }
}

alert("Правильно: " + ball + ", неправильно: " + errors); // выводим сообщение и значения счетчиков правильных и неправильных ответов
for (word in words) {
  document.write(word + ": " + words[word] + "<br>"); // выводим в цикле все слова словаря
}
