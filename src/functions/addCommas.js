export default function addCommas(amount) {
  let a = Math.trunc(amount / 1000000);
  let b = Math.trunc((amount - a * 1000000) / 1000);
  let c = Math.trunc(amount % 1000);
  return `${a},${b},${c}`;
}
