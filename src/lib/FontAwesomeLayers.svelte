<svelte:options customElement="fontawesome-layers" />

<script lang="ts">
  import { config } from "@fortawesome/fontawesome-svg-core";

  interface FontAwesomeLayersProps {
    fixedWidth?: boolean;
  }

  const { familyPrefix } = config;

  let {
    fixedWidth = false,
    class: _class,
    ...restProps
  }: FontAwesomeLayersProps & {
    class?: string;
  } = $props();

  let classList = $derived(
    [
      `${familyPrefix}-layers`,
      ...(fixedWidth ? [`${familyPrefix}-fw`] : []),
    ].join(" "),
  );
</script>

<div {...restProps} class={`${classList} ${_class}`}>
  <slot />
</div>
