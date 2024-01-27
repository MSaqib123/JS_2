const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//=================================
// click on Check
//=================================
document.querySelector(".check").addEventListener("click", function () {
  var guessValue = Number(document.querySelector(".guesstxt").value);
  //   console.log(secretNumber, typeof guessValue);
  //When There is no value
  if (!guessValue) {
    document.querySelector(".message").textContent = "🚫 No Number!";
  } else if (guessValue == secretNumber) {
    //When number is Correct
    document.querySelector(".number").textContent = `${secretNumber}`;
    document.querySelector(".message").textContent =
      "😃🙋‍♂️ Number Match -- Good";
    document.querySelector("body").style.backgroundColor = "Green";
    document.querySelector("body").style.color = "white";
  } else if (guessValue > secretNumber) {
    //When number is Heigher then secretnumber
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 To Heigh";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥🧨 You lost Game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessValue < secretNumber) {
    //When number is Lower then secretnumber
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 To Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥🧨 You lost Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//=================================
// click on Reset
//=================================
document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
  document.querySelector(".guesstxt").value = "";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".message").textContent = "Select ....";
  document.querySelector(".number").textContent = "?";
  score = 20;
});
