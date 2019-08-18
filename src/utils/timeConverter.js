function timeConvert(num) {
  let min = Math.floor(num / 60);
  let sec = num % 60;
  return { min, sec };
}
export default timeConvert;
