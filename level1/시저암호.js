function solution(s, n) {
  return s
    .split("")
    .map(function(item) {
      if (item === " ") {
        return " ";
      } else if (item.toUpperCase() === item) {
        return String.fromCharCode(((item.charCodeAt() + n - 65) % 26) + 65);
      } else {
        return String.fromCharCode(((item.charCodeAt() + n - 97) % 26) + 97);
      }
    })
    .join("");
}
