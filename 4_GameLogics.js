let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;
let totalScore = 0;
//=================================
// click on Check
//=================================
document.querySelector(".check").addEventListener("click", function () {
  // var guessValue = Number(document.querySelector(".guesstxt").value);
  var guessValue = Number(changeDOM(".guesstxt",'input',true,true));
  // console.log(secretNumber, typeof guessValue);
  // When There is no value
  if (!guessValue)
  {
    // document.querySelector(".message").textContent = "🚫 No Number!";
    changeDOM(".message","🚫 No Number!");
  }
  else if (guessValue == secretNumber)
  {
    //When number is Correct
    // document.querySelector(".number").textContent = `${secretNumber}`;
    changeDOM(".number",`${secretNumber}`);

    if (score > heighScore)
    {
      heighScore = score;
      // document.querySelector(".highscore").textContent = `${heighScore}`;
      changeDOM(".highscore",`${heighScore}`);
    }
    // let lastValue = Number(document.querySelector(".totalScore").textContent);
    let lastValue = Number(changeDOM(".totalScore",'text',true,true));
    lastValue += score;
    // document.querySelector(".totalScore").textContent = ;
    changeDOM(".totalScore",lastValue);

    // document.querySelector(".message").textContent = "😃🙋‍♂️ Number Match -- Good";
    changeDOM(".message","😃🙋‍♂️ Number Match -- Good");

    // document.querySelector("body").style.backgroundColor = "Green";
    // document.querySelector("body").style.color = "white";
    changeDOM("body","Green",false,false,true,`backgroundColor`);
    changeDOM("body","White",false,false,true,`color`);
  }
  else if (guessValue > secretNumber)
  {
    //When number is Heigher then secretnumber
    if (score > 1) {
      changeDOM(".message","📈 To Heigh");
      // document.querySelector("").textContent = "📈 To Heigh";
      score--;
      changeDOM(".score",score);
      // document.querySelector(".score").textContent = score;
    } else {
      changeDOM(".message","💥🧨 You lost Game");
      changeDOM(".score",0);
      // document.querySelector(".message").textContent = "💥🧨 You lost Game";
      // document.querySelector(".score").textContent = 0;
    }
  } else if (guessValue < secretNumber) {
    //When number is Lower then secretnumber
    if (score > 1) {
      changeDOM(".message","📉 To Low");
      score--;
      changeDOM(".score",score);
      // document.querySelector(".message").textContent = "📉 To Low";
      // score--;
      // document.querySelector(".score").textContent = score;
    } else {
      changeDOM(".message","💥🧨 You lost Game");
      changeDOM(".score",0);
      // document.querySelector(".message").textContent = "💥🧨 You lost Game";
      // document.querySelector(".score").textContent = 0;
    }
  }
});

//=================================
// click on Reset
//=================================
document.querySelector(".reset").addEventListener("click", function ()
{
  changeDOM("body","white",false,false,true,"backgroundColor");
  changeDOM("body","white",false,false,true,"color");
  changeDOM(".guesstxt","");
  changeDOM(".message","Select ....");
  changeDOM(".number","?");
  changeDOM(".score","20");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // query("body").style.backgroundColor = "white";
  // query("body").style.color = "black";
  // query(".guesstxt").value = "";
  // query(".score").textContent = "20";
  // query(".message").textContent = "Select ....";
  // query(".number").textContent = "?";
});

//=================================
// Refectering don't repeat your self
//=================================
//___ TextContent ___
let changeDOM = function (selecter, values , number , returns,isStyle,property) {
  if(number == true && returns == true && values == "input"){
    return Number(document.querySelector(selecter).value);
  }
  else if(number == true && returns == true && values == "text"){
    return Number(document.querySelector(selecter).textContent);
  }
  else if(isStyle == true){
    document.querySelector(selecter).style.property = values;
  }
  else{
    document.querySelector(selecter).textContent = values;
  }
};
