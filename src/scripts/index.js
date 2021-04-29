const userNum = document.querySelector("#userInput");
console.log(userNum.value);
/* const resultPass = document.addEventListener("result-container"); */

function makeid(num) {
  num = userNum.value;
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  console.log(num);

  if (12 < num || num < 8) {
    document.querySelector(".result-container").style.marginTop = "1.3rem";
    return (document.querySelector(".result-container").innerHTML =
      "The password should be between 8 and 12 character");
  }

  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    let newEll = document.createElement("h1");
    newEll.innerHTML = result;
    newEll.classList.add("result-container");
  }
  return (document.querySelector(".result-container").innerHTML = result);
}
