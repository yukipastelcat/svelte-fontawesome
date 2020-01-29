<script>
  import {
    config,
    parse as faParse,
    text as faText,
    counter as faCounter,
  } from "@fortawesome/fontawesome-svg-core";
  import { beforeUpdate } from "svelte";
  export let value = "";
  export let transform = {};
  export let counter = false;
  export let position = null;

  const { familyPrefix } = config;
  $: _classList = [
    ...(counter ? [`${familyPrefix}-layers-counter`] : []),
    ...(position ? [`${familyPrefix}-layers-${position}`] : [])
  ];

  $: _styles = ($$props.style || "")
    .split(";")
    .filter(item => !!item)
    .map(rule => rule.split(":").map(item => item.trim()))
    .reduce((accumulator, current) => {
      const [key, value] = current;
      accumulator[key] = value;
      return accumulator;
    }, {});

  let renderedText = "";

  beforeUpdate(() => {
    const renderMethod = counter ? faCounter : faText;
    renderedText = renderMethod(value.toString(), {
      styles: $$props.style ? _styles : {},
      classes: [_classList, ($$props.class || "").split(" ")],
      transform: {
        ...(typeof transform === "string"
          ? faParse.transform(transform)
          : transform)
      }
    }).html.join('');
  });
</script>

{@html renderedText}
