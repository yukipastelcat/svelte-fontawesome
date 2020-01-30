export default function normalizeIconArgs(icon) {
  if (icon === null) {
    return icon;
  }

  if (typeof icon === "object" && icon.prefix && icon.iconName) {
    return icon;
  }

  if (Array.isArray(icon) && icon.length === 2) {
    let [prefix, iconName] = icon;
    return {
      prefix,
      iconName
    };
  }

  if (typeof icon === "string") {
    return {
      prefix: "fas",
      iconName: icon
    };
  }
}
