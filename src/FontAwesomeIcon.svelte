<script>
  import {
    parse as faParse,
    icon as faIcon,
    findIconDefinition as faFindIconDefinition
  } from "@fortawesome/fontawesome-svg-core";
  import { beforeUpdate } from "svelte";
  import normalizeIconArgs from "./normalize-icon-args";

  export let border = false;
  export let fixedWidth = false;
  export let flip = null;
  export let icon = null;
  export let mask = null;
  export let listItem = false;
  export let pull = null;
  export let pulse = false;
  export let rotation = null;
  export let swapOpacity = false;
  export let size = null;
  export let spin = false;
  export let transform = {};
  export let symbol = false;
  export let title = null;
  export let inverse = false;

  let html = "";

  $: _classList = {
    "fa-spin": spin,
    "fa-pulse": pulse,
    "fa-fw": fixedWidth,
    "fa-border": border,
    "fa-li": listItem,
    "fa-inverse": inverse,
    "fa-flip-horizontal": ["both", "horizontal"].includes(flip),
    "fa-flip-vertical": ["both", "vertical"].includes(flip),
    [`fa-${size}`]: size !== null,
    [`fa-rotate-${rotation}`]: rotation !== null,
    [`fa-pull-${pull}`]: pull !== null,
    "fa-swap-opacity": swapOpacity
  };

  $: _styles = ($$props.style || "")
    .split(";")
    .filter(item => !!item)
    .map(rule => rule.split(":").map(item => item.trim()))
    .reduce((accumulator, current) => {
      const [key, value] = current;
      accumulator[key] = value;
      return accumulator;
    }, {});

  beforeUpdate(() => {
    const iconArgs = normalizeIconArgs(icon);
    if (!iconArgs) return;
    const iconDefinition = faFindIconDefinition(iconArgs);
    const result = faIcon(iconDefinition || icon, {
      symbol,
      title,
      styles: $$props.style ? _styles : {},
      classes: [
        ...Object.keys(_classList)
          .map(key => (_classList[key] ? key : null))
          .filter(key => !!key),
        ($$props.class || "").split(" ")
      ],
      transform: {
        ...(typeof transform === "string"
          ? faParse.transform(transform)
          : transform)
      },
      mask: normalizeIconArgs(mask)
    });
    if (!result) {
      console.warn(
        "Could not find one or more icon(s)",
        iconDefinition || icon,
        mask
      );
      return;
    }
    html = result.html;
  });
</script>

<svelte:options tag={null} />
{@html html}
