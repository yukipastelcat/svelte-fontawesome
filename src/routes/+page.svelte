<script lang="ts">
	import { library } from '@fortawesome/fontawesome-svg-core';
	import { fas } from '@fortawesome/free-solid-svg-icons';
	import { far } from '@fortawesome/free-regular-svg-icons';
	import { fab } from '@fortawesome/free-brands-svg-icons';
	import FontAwesomeIcon from '$lib/FontAwesomeIcon.svelte';
	import { onMount } from 'svelte';

	library.add(fas, far, fab);

	let icon: [string, string] = $state(['', '']);

	type FaLibraryRuntime = {
		definitions: {
			[key: string]: [];
		};
	};

	onMount(async () => {
		console.log(library);
		for (const libPrefix in (library as unknown as FaLibraryRuntime).definitions) {
			for (const libIcon in (library as unknown as FaLibraryRuntime).definitions[libPrefix]) {
				icon = [libPrefix, libIcon];
				await new Promise((resolve) => setTimeout(resolve, 1000));
			}
		}
	});
</script>

<div class="demo-root">
	<FontAwesomeIcon {icon} size="6x" />
	<p>Current icon: [{icon}]</p>
</div>

<style>
	:global(body) {
		margin: 0;
	}
	.demo-root {
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-family: sans-serif;
	}
</style>
