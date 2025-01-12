<script>
	import FontAwesomeLayers from '../FontAwesomeLayers.svelte';
	import FontAwesomeIcon from '../FontAwesomeIcon.svelte';

	import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

	const props = $props();
</script>

<FontAwesomeLayers {...props}>
	<FontAwesomeIcon icon={faCircle} style="color: tomato" />
	<FontAwesomeIcon icon={faTimes} transform="shrink-6" inverse={true} />
</FontAwesomeLayers>
