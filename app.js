const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Please fill out the input fields");
    return;
  }

  // BMI = need to convert weight to kilo/meter to calculate
  // weight = pounds/2.2046 in kilos
  // height = inches *2.54 height in cm
  // bmi = weight/(height/100*height/100);

  weight = weight / 2.2046;
  height = height * 2.54;

  let BMI = weight / (((height / 100) * height) / 100);
  BMI = BMI.toFixed(2);

  console.log(BMI);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Underweight or skinny fat";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Healthy as a horse";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "You fat";
  }
  if (BMI >= 30) {
    status = "You really really fat";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `Comment: you are <span id="comment">${status}</span>`;
});
