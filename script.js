// let arr = {
//   vasya: "apple",
//   petya: "banana",
//   valya: "chestnut",
// };

// alert(arr.vasya);
let phrases = [
  [
    "Звучить погано",
    "Так, це безперечно треба зробити",
    "Не думаю, що це хороша ідея",
    "Може, не сьогодні?",
    "Комп'ютер каже: ні!",
  ],
  [
    "Звучить погано",
    "Так, це безперечно треба зробити",
    "Не думаю, що це хороша ідея",
    "Може, не сьогодні?",
    "Комп'ютер каже: ні!",
  ],
  [
    "Звучить погано",
    "Так, це безперечно треба зробити",
    "Не думаю, що це хороша ідея",
    "Може, не сьогодні?",
    "Комп'ютер каже: ні!",
  ],
]; // масив відповідей
while (true) {
  let go = confirm("Вам погадати?");
  if (!go) {
    alert("До побачення!");
    break;
  }
  let question = prompt("Задайте питання ворожці"); // отримати питання

  let randomIndexRow = Math.floor(Math.random() * phrases.length); // отримати випадковий індекс із масиву відповідей
  let randomIndexCell = Math.floor(Math.random() * phrases[1].length); // отримати випадковий індекс із масиву 
  let answer = phrases[randomIndexRow][];
  alert(answer); // показати відповідь
}
