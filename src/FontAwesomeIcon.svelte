<script>
  import {
    parse as faParse,
    icon as faIcon,
    findIconDefinition as faFindIconDefinition
  } from "@fortawesome/fontawesome-svg-core";
  import {
    beforeUpdate
  } from 'svelte';

  export let border = false;
  export let fixedWidth = false;
  export let flip = false;
  export let icon;
  export let mask = null;
  export let listItem = false;
  export let pull = null;
  export let pulse = false;
  export let rotation = null;
  export let swapOpacity = false;
  export let size = null;
  export let spin = false;
  export let transform;
  export let symbol = false;
  export let title = null;
  export let inverse = false;

  function _normalizeIconArgs(icon) {
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

  let html = '';

  $: _classList = ({
    'fa-spin': spin,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-border': border,
    'fa-li': listItem,
    'fa-inverse': inverse,
    'fa-flip-horizontal': ['both', 'horizontal'].includes(flip),
    'fa-flip-vertical': ['both', 'vertical'].includes(flip),
    [`fa-${size}`]: size !== null,
    [`fa-rotate-${rotation}`]: rotation !== null,
    [`fa-pull-${pull}`]: pull !== null,
    'fa-swap-opacity': swapOpacity
  });
  
  $: _styles = ($$props.style || '').split(';').filter(item => !!item)
    .map(rule => rule.split(':')
    .map(item => item.trim()))
    .reduce((accumulator, current) => {
      const [key, value] = current;
      accumulator[key] = value;
      return accumulator;
    }, {});

  beforeUpdate(() => {
    const iconDefinition = faFindIconDefinition(_normalizeIconArgs(icon));
    if (!iconDefinition) {
      console.warn('Could not find one or more icon(s)', iconDefinition, mask);
      return;
    }
    html = faIcon(iconDefinition, {
      styles: $$props.style ? _styles : {},
      classes: [...Object.keys(_classList).map(key => _classList[key] ? key : null).filter(key => !!key), ($$props.class || '').split(' ')],
      ...transform,
      ...mask,
      symbol,
      title
    }).html;
  })
</script>

{@html html}
