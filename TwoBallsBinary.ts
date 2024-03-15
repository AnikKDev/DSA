export default function two_cystal_balls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jmpAmount;
  for (; i < jmpAmount; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }
  for (let j = 0; j < jmpAmount && i <= breaks.length; ++j, ++i) {
    if (breaks[i]) return i;
  }
  return -1;
}
