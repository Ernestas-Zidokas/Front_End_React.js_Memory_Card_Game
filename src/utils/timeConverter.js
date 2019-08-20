function timeConvert(num) {
  let min = Math.floor(num / 60);
  let sec = ('0' + (num % 60)).substr(-2);
  return { min, sec };
}
export default timeConvert;
