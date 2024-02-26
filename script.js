
const calculate = () => {
  
  let chemistry = document.querySelector("#chemistry").value;
  let computer = document.querySelector("#computer").value;
  let maths = document.querySelector("#maths").value;
  let phy = document.querySelector("#phy").value;
  let grades = "";
  
  let totalgrades =
    parseFloat(chemistry) +
    parseFloat(computer) +
    parseFloat(maths) +
    parseFloat(phy);
  
  let percentage = (totalgrades / 400) * 100;
  if (percentage <= 100 && percentage >= 80) {
    grades = "A";
  } else if (percentage <= 79 && percentage >= 60) {
    grades = "B";
  } else if (percentage <= 59 && percentage >= 40) {
    grades = "C";
  } else {
    grades = "F";
  }

  if (chemistry == "" || computer == "" 
            || maths == "" || phy == "") {
    document.querySelector("#showdata").innerHTML
         = "PLEASE ALL THE SUBJECT FIELDS";
  } else {
  
    if (percentage >= 39.5) {
      document.querySelector(
        "#showdata"
      ).innerHTML = 
        ` Out of 400<br> your total is  ${totalgrades} 
        <br> your percentage is ${percentage}%. <br> 
        Your grade is ${grades}<br> You are Pass. `;
    } else {
      document.querySelector(
        "#showdata"
      ).innerHTML = 
        ` Out of 400 <br> your total is  ${totalgrades} 
        <br> your percentage is ${percentage}%. <br> 
        Your grade is ${grades}<br> You are Fail. `;
    }
  }
};