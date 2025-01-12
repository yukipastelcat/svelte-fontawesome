<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Layers from './Layers.svelte';
	import { library } from '@fortawesome/fontawesome-svg-core';
	import { fas } from '@fortawesome/free-solid-svg-icons';
	import { far } from '@fortawesome/free-regular-svg-icons';
	import { fab } from '@fortawesome/free-brands-svg-icons';
	library.add(fas, far, fab);

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Example/FontAwesomeLayers',
		component: Layers,
		tags: ['autodocs']
	});
</script>

<Story name="Example" args={{ fixedWidth: true }} />
