<svelte:options customElement="fontawesome-icon" />

<script lang="ts">
  import {
    type IconDefinition,
    type Transform,
    parse as faParse,
    icon as faIcon,
    findIconDefinition as faFindIconDefinition,
  } from "@fortawesome/fontawesome-svg-core";
  import normalizeIconArgs from "./normalize-icon-args";

  interface FontAwesomeIconProps {
    border?: boolean;
    fixedWidth?: boolean;
    flip?: string | boolean;
    icon: IconDefinition | [string, string] | string;
    mask?: IconDefinition | [string, string] | string;
    listItem?: boolean;
    pull?: "right" | "left";
    pulse?: boolean;
    rotation?: 90 | 180 | 270;
    swapOpacity?: boolean;
    size?:
      | "2xs"
      | "xs"
      | "sm"
      | "lg"
      | "xl"
      | "2xl"
      | "1x"
      | "2x"
      | "3x"
      | "4x"
      | "5x"
      | "6x"
      | "7x"
      | "8x"
      | "9x"
      | "10x";
    spin?: boolean;
    transform?: Transform;
    symbol?: boolean | string;
    title?: string;
    inverse?: boolean;
    bounce?: boolean;
    shake?: boolean;
    beat?: boolean;
    fade?: boolean;
    beatFade?: boolean;
    flash?: boolean;
    spinPulse?: boolean;
    spinReverse?: boolean;
  }

  let {
    border = false,
    fixedWidth = false,
    flip,
    icon,
    mask,
    listItem = false,
    pull,
    pulse = false,
    rotation,
    swapOpacity = false,
    size,
    spin = false,
    transform = {},
    symbol = false,
    title,
    inverse = false,
    bounce = false,
    shake = false,
    beat = false,
    fade = false,
    beatFade = false,
    flash = false,
    spinPulse = false,
    spinReverse = false,
    style = "",
    class: classList = "",
  }: FontAwesomeIconProps & {
    style?: string;
    class?: string;
  } = $props();

  let html = $state("");

  let _faClassList = $derived({
    "fa-spin": spin,
    "fa-pulse": pulse,
    "fa-fw": fixedWidth,
    "fa-border": border,
    "fa-li": listItem,
    "fa-inverse": inverse,
    "fa-flip": flip === true,
    "fa-flip-horizontal": ["both", "horizontal"].includes(flip as string),
    "fa-flip-vertical": ["both", "vertical"].includes(flip as string),
    [`fa-${size}`]: size !== null,
    [`fa-rotate-${rotation}`]: rotation !== null,
    [`fa-pull-${pull}`]: pull !== null,
    "fa-swap-opacity": swapOpacity,
    "fa-bounce": bounce,
    "fa-shake": shake,
    "fa-beat": beat,
    "fa-fade": fade,
    "fa-beat-fade": beatFade,
    "fa-flash": flash,
    "fa-spin-pulse": spinPulse,
    "fa-spin-reverse": spinReverse,
  });

  let _faStyles = $derived(
    (style || "")
      .split(";")
      .filter((item: string) => !!item)
      .map((rule: string) => rule.split(":").map((item) => item.trim()))
      .reduce((accumulator: { [key: string]: string }, current) => {
        const [key, value] = current;
        accumulator[key] = value;
        return accumulator;
      }, {}),
  );

  $effect.pre(() => {
    const iconArgs = normalizeIconArgs(icon);
    if (!iconArgs) return;
    const iconDefinition = faFindIconDefinition(iconArgs);
    const result = faIcon(iconDefinition || icon, {
      symbol,
      title,
      styles: style ? _faStyles : {},
      classes: [
        ...Object.keys(_faClassList)
          .map((key) => (_faClassList[key] ? key : ""))
          .filter((key) => !!key),
        ...(classList || "").split(" "),
      ],
      transform: {
        ...(typeof transform === "string"
          ? faParse.transform(transform)
          : transform),
      },
      mask: normalizeIconArgs(mask),
    });
    if (!result) {
      console.warn(
        "Could not find one or more icon(s)",
        iconDefinition || icon,
        mask,
      );
      return;
    }
    html = result.html.join();
  });
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html html}
