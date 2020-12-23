<script>
  import { config } from "@fortawesome/fontawesome-svg-core/index.es";

  export let fixedWidth = false;

  const { familyPrefix } = config;
  $: classList = [
    `${familyPrefix}-layers`,
    ...(fixedWidth ? [`${familyPrefix}-fw`] : [])
  ].join(" ");
</script>

<svelte:options tag={null} />
<div {...$$props} class={`${classList} ${$$props.class}`}>
  <slot />
</div>
