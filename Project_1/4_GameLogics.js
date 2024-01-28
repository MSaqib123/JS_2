let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;
let totalScore = 0;

//=================================
// click on Check
//=================================
document.querySelector(".check").addEventListener("click",gameFun);
document.querySelector(".reset").addEventListener("click", resetFn);


//================================
// Game Function
//=================================
let gameFun= function() {
  var guessValue = Number(changeDOM(".guesstxt",'input',true,true));
  if (!guessValue)
  {
    changeDOM(".message","🚫 No Number!");
  }
  else if (guessValue == secretNumber)
  {
    changeDOM(".number",`${secretNumber}`);

    if (score > heighScore)
    {
      heighScore = score;
      changeDOM(".highscore",`${heighScore}`);
    }
    let lastValue = Number(changeDOM(".totalScore",'text',true,true));
    lastValue += score;
    changeDOM(".totalScore",lastValue);

    changeDOM(".message","😃🙋‍♂️ Number Match -- Good");
    changeDOM("body","Green",false,false,true,`backgroundColor`);
    changeDOM("body","White",false,false,true,`color`);
  }
  else if (guessValue > secretNumber)
  {
    if (score > 1) {
      changeDOM(".message","📈 To Heigh");
      score--;
      changeDOM(".score",score);
    } else {
      changeDOM(".message","💥🧨 You lost Game");
      changeDOM(".score",0);
    }
  } else if (guessValue < secretNumber) {
    if (score > 1) {
      changeDOM(".message","📉 To Low");
      score--;
      changeDOM(".score",score);
    } else {
      changeDOM(".message","💥🧨 You lost Game");
      changeDOM(".score",0);
    }
  }
}

//=================================
// Reset Function
//=================================
let resetFn = function ()
{
  changeDOM("body","white",false,false,true,"backgroundColor");
  changeDOM("body","white",false,false,true,"color");
  changeDOM(".guesstxt","");
  changeDOM(".message","Select ....");
  changeDOM(".number","?");
  changeDOM(".score","20");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
}

//=================================
// Refectering don't repeat your self
//=================================
//___ TextContent ___
let changeDOM = function (selecter, values , number , returns,isStyle,propertis) {
  if(number == true && returns == true && values == "input"){
    return Number(document.querySelector(selecter).value);
  }
  else if(number == true && returns == true && values == "text"){
    return Number(document.querySelector(selecter).textContent);
  }
  else if(isStyle == true){
    document.querySelector(selecter).style.propertis = values;
  }
  else{
    document.querySelector(selecter).textContent = values;
  }
};
