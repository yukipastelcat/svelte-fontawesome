<script>
    import FontAwesomeLayers from "../FontAwesomeLayers.svelte";
    import FontAwesomeLayersText from "../FontAwesomeLayersText.svelte";
    import FontAwesomeIcon from "../FontAwesomeIcon.svelte";

    import { faCircle } from "@fortawesome/free-solid-svg-icons";

    const props = $props();
</script>

<FontAwesomeLayers>
    <FontAwesomeIcon icon={faCircle} />
    <FontAwesomeLayersText {...props} />
</FontAwesomeLayers>
