export const NumberFormat = ({value, local, type, currency}) => value.toLocaleString(local, {style: type, currency});
