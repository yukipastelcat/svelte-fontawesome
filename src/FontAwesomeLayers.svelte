<script>
import { config } from '@fortawesome/fontawesome-svg-core';

export let fixedWidth = false;

const { familyPrefix } = config;
$: classList = [
  `${familyPrefix}-layers`,
  ...(fixedWidth ? [`${familyPrefix}-fw`] : [])
].join(' ');
</script>

<div
  {...$$props}
  class={`${classList} ${$$props.class}`}
>
  <slot />
</div>
