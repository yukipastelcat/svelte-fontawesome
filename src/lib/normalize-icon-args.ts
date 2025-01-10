import type {
  IconDefinition,
  IconLookup,
} from "@fortawesome/fontawesome-svg-core";

export default function normalizeIconArgs(
  icon?: IconDefinition | [string, string] | string,
): IconLookup | undefined {
  if (!icon && icon !== "") {
    return void 0;
  }

  if (Array.isArray(icon) && icon.length === 2) {
    const [prefix, iconName] = icon;
    return {
      prefix,
      iconName,
    } as IconLookup;
  }

  if (typeof icon === "object" && icon.prefix && icon.iconName) {
    return icon as IconLookup;
  }

  if (typeof icon === "string") {
    return {
      prefix: "fas",
      iconName: icon,
    } as IconLookup;
  }

  return undefined;
}
