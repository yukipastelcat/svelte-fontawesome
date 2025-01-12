<script lang="ts">
	import { library } from '@fortawesome/fontawesome-svg-core';
	import { fas } from '@fortawesome/free-solid-svg-icons';
	import { far } from '@fortawesome/free-regular-svg-icons';
	import { fab } from '@fortawesome/free-brands-svg-icons';
	import FontAwesomeIcon from '../lib/FontAwesomeIcon.svelte';
	import FontAwesomeLayers from '../lib/FontAwesomeLayers.svelte';
	import FontAwesomeLayersText from '../lib/FontAwesomeLayersText.svelte';
	import IconDisplay from './components/IconDisplay.svelte';

	const props = $props();

	library.add(fas, far, fab);
</script>

<IconDisplay>
	<FontAwesomeLayers class="fa-6x" {...props}>
		<FontAwesomeIcon icon={['fas', 'circle']} style="color: tomato" />
		<FontAwesomeIcon icon={['fas', 'times']} transform="shrink-6" inverse={true} />
	</FontAwesomeLayers>
</IconDisplay>
<IconDisplay>
	<FontAwesomeLayers class="fa-6x" {...props}>
		<FontAwesomeIcon icon={['fas', 'bookmark']} />
		<FontAwesomeIcon
			icon={['fas', 'heart']}
			transform="shrink-10 up-2"
			inverse={true}
			style="color: tomato"
		/>
	</FontAwesomeLayers>
</IconDisplay>
<IconDisplay>
	<FontAwesomeLayers class="fa-6x" {...props}>
		<FontAwesomeIcon icon={['fas', 'play']} transform="rotate--90 grow-2" />
		<FontAwesomeIcon icon={['fas', 'sun']} inverse={true} transform="shrink-10 up-2" />
		<FontAwesomeIcon icon={['fas', 'moon']} inverse={true} transform="shrink-11 down-4.2 left-4" />
		<FontAwesomeIcon icon={['fas', 'star']} inverse={true} transform="shrink-11 down-4.2 right-4" />
	</FontAwesomeLayers>
</IconDisplay>
<IconDisplay>
	<FontAwesomeLayers class="fa-6x" {...props}>
		<FontAwesomeIcon icon={['fas', 'calendar']} />
		<FontAwesomeLayersText
			class="fa-inverse"
			transform="shrink-8 down-3"
			style="font-weight: 800; font-family: sans-serif;"
			value="10"
		/>
	</FontAwesomeLayers>
</IconDisplay>
<IconDisplay>
	<FontAwesomeLayers class="fa-6x" {...props}>
		<FontAwesomeIcon icon={['fas', 'certificate']} />
		<FontAwesomeLayersText
			class="fa-inverse"
			transform="shrink-11.5 rotate--30"
			style="font-weight: 900; font-family: sans-serif;"
			value="NEW"
		/>
	</FontAwesomeLayers>
</IconDisplay>
<IconDisplay>
	<FontAwesomeLayers class="fa-6x" {...props}>
		<FontAwesomeIcon icon={['fas', 'envelope']} />
		<FontAwesomeLayersText
			counter={true}
			style="background: tomato; font-family: sans-serif;"
			value="1,419"
		/>
	</FontAwesomeLayers>
</IconDisplay>
