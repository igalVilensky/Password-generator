function makeid(num) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  if (12 < num || num < 8)
    return "THe password should be between 8 and 12 character";

  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

console.log("-----------------------------");
console.log(makeid(1));
console.log(makeid(200));
console.log(makeid(12));
