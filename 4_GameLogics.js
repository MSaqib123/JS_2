const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  document.querySelector(".number").textContent = `${secretNumber}`;
  var guessValue = Number(document.querySelector(".guesstxt").value);

  console.log(guessValue, typeof guessValue);
  if (!guessValue) {
    document.querySelector(".message").textContent = "🚫 No Number!";
  } else if (guessValue == secretNumber) {
    document.querySelector(".message").textContent =
      "😃🙋‍♂️ Number Match -- Good";
  } else if (guessValue > secretNumber) {
    document.querySelector(".message").textContent = "📈 To Heigh";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guessValue < secretNumber) {
    document.querySelector(".message").textContent = "📉 To Low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
