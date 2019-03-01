export const CalculatePercent = ({value, total, fix = 2}) => {
  if (total === 0) return 0;

  return ((value / total)*100).toFixed(fix);
}
