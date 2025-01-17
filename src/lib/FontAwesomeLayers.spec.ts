import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Layers from './__mocks__/Layers.svelte';
import FontAwesomeLayers, { type FontAwesomeLayersProps } from './FontAwesomeLayers.svelte';
import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

function renderLayersMock(props?: FontAwesomeLayersProps) {
	const result = render(Layers, {
		props
	});
	return result.container;
}

describe(`🧱 ${FontAwesomeLayers.name}`, () => {
	test('correctly composes layers', () => {
		const container = renderLayersMock();
		const [svgFirst, svgLast] = [...container.querySelectorAll('svg')];
		expect(svgFirst.dataset.prefix).toBe(faCircle.prefix);
		expect(svgFirst.dataset.icon).toBe(faCircle.iconName);
		expect(svgLast.dataset.prefix).toBe(faTimes.prefix);
		expect(svgLast.dataset.icon).toBe(faTimes.iconName);
	});
	test('does apply passed class attribute', () => {
		const CUSTOM_CLASS = 'custom-class';
		const container = renderLayersMock({ class: CUSTOM_CLASS });
		const layers = container.querySelector('.fa-layers') as HTMLElement;
		expect([...layers.classList].includes(CUSTOM_CLASS)).toBe(true);
	});
	test('does apply passed style attribute', () => {
		const CUSTOM_STYLE = 'color: red;';
		const container = renderLayersMock({ style: CUSTOM_STYLE });
		const layers = container.querySelector('.fa-layers') as HTMLElement;
		expect(layers.getAttribute('style')).toBe(CUSTOM_STYLE);
	});
	describe('correctly handles properties', () => {
		const NOT_PROVIDED_CASE = 'not provided';
		describe('`fixedWidth` property', () => {
			test('false', () => {
				const container = renderLayersMock({ fixedWidth: false });
				const layers = container.querySelector('.fa-layers') as HTMLElement;
				expect([...layers.classList].includes('fa-fw')).toBe(false);
			});
			test('true', () => {
				const container = renderLayersMock({ fixedWidth: true });
				const layers = container.querySelector('.fa-layers') as HTMLElement;
				expect([...layers.classList].includes('fa-fw')).toBe(true);
			});
			test(NOT_PROVIDED_CASE, () => {
				const container = renderLayersMock();
				const layers = container.querySelector('.fa-layers') as HTMLElement;
				expect([...layers.classList].includes('fa-fw')).toBe(false);
			});
		});
	});
});
