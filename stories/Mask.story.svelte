<script>
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { fas } from "@fortawesome/free-solid-svg-icons";
  import { far } from "@fortawesome/free-regular-svg-icons";
  import { fab } from "@fortawesome/free-brands-svg-icons";
  import FontAwesomeIcon from "../src/FontAwesomeIcon.svelte";
  import IconDisplay from "./commons/IconDisplay.svelte";

  library.add(fas, far, fab);

  export let iconName;
  export let iconPrefix;
  export let maskIconName;
  export let maskIconPrefix;
</script>

<IconDisplay>
  <FontAwesomeIcon
    icon={[iconPrefix, iconName]}
    mask={[maskIconPrefix, maskIconName]}
    {...$$props} />
</IconDisplay>
