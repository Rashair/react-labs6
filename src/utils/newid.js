export default function(prefix = "id") {
  return `${prefix}${Math.random()
    .toString(36)
    .substring(7)}`;
}
