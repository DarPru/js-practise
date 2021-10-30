let num = 253;

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

function combChecker(str) {
  switch (str) {
    case "a0":
      return "0a";
      break;
    case "a1":
      return "1b";
      break;
    case "b0":
      return "1a";
      break;
    case "b1":
      return "0b";
      break;
    default:
      return "";
  }
  return "";
}
let str = "a" + dec2bin(num).toString();

for (let i = 0; i < 8; i++) {
  str =
    str.substring(0, i) +
    combChecker(str.substring(i, i + 2)) +
    str.substring(i + 2);
}

console.log(parseInt(str.substring(0, str.length - 1), 2));
