<svelte:options customElement="fontawesome-layerstext" />

<script lang="ts" module>
	interface FontAwesomeLayersTextProps {
		value?: string;
		transform?: Transform;
		counter?: boolean;
		position?: string;
	}
</script>

<script lang="ts">
	import {
		config,
		parse as faParse,
		text as faText,
		counter as faCounter,
		type Transform
	} from '@fortawesome/fontawesome-svg-core';

	let {
		value = '',
		transform = {},
		counter = false,
		position,
		style = '',
		class: classList = ''
	}: FontAwesomeLayersTextProps & {
		style?: string;
		class?: string;
	} = $props();

	const { familyPrefix } = config;

	let _faClassList = $derived([...(position ? [`${familyPrefix}-layers-${position}`] : [])]);
	let _faStyles = $derived(
		(style || '')
			.split(';')
			.filter((item: string) => !!item)
			.map((rule: string) => rule.split(':').map((item) => item.trim()))
			.reduce((accumulator: { [key: string]: string }, current) => {
				const [key, value] = current;
				accumulator[key] = value;
				return accumulator;
			}, {})
	);

	let renderedText = $state('');

	$effect.pre(() => {
		const renderMethod = counter ? faCounter : faText;
		renderedText = renderMethod(value.toString(), {
			styles: style ? _faStyles : {},
			classes: [..._faClassList, ...(classList || '').split(' ')],
			transform: {
				...(typeof transform === 'string' ? faParse.transform(transform) : transform)
			}
		}).html.join('');
	});
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html renderedText}
