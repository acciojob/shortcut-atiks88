function shortcut(s1, s2) {
  // your code here
  let x = '';
  if (s1.length > 0 && s2.length > 0) {
    x = s1[0] + s2[0];
  } else {
    return x;
  }
  return x;
}
// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
