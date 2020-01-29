import { render } from '@testing-library/svelte';
import Layers from './__mocks__/Layers.svelte';
import FontAwesomeLayers from '../src/FontAwesomeLayers.svelte';

function renderLayersMock(props) {
  const result = render(Layers, {
    props,
  });
  return result.container;
}

describe(`🧱 ${FontAwesomeLayers.name}`, () => {
  test('correctly composes layers', () => {
    const container = renderLayersMock();
    const [svgFirst, svgLast] = [...container.querySelectorAll('svg')];
    expect(svgFirst.dataset.prefix).toBe('fas');
    expect(svgFirst.dataset.icon).toBe('circle');
    expect(svgLast.dataset.prefix).toBe('fas');
    expect(svgLast.dataset.icon).toBe('times');
  });
  test('does apply passed class attribute', () => {
    const CUSTOM_CLASS = 'custom-class';
    const container = renderLayersMock({ class: CUSTOM_CLASS });
    const layers = container.querySelector('.fa-layers');
    expect([...layers.classList].includes(CUSTOM_CLASS)).toBe(true);
  });
  test('does apply passed style attribute', () => {
    const CUSTOM_STYLE = 'color: red;';
    const container = renderLayersMock({ style: CUSTOM_STYLE });
    const layers = container.querySelector('.fa-layers');
    expect(layers.getAttribute('style')).toBe(CUSTOM_STYLE);
  });
  describe('correctly handles properties', () => {
    const NOT_PROVIDED_CASE = 'not provided';
    describe('`fixedWidth` property', () => {
      test('false', () => {
        const container = renderLayersMock({ fixedWidth: false });
        expect([...container.querySelector('.fa-layers').classList].includes("fa-fw")).toBe(false);
      });
      test('true', () => {
        const container = renderLayersMock({ fixedWidth: true });
        expect([...container.querySelector('.fa-layers').classList].includes("fa-fw")).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderLayersMock();
        expect([...container.querySelector('.fa-layers').classList].includes("fa-fw")).toBe(false);
      })
    });
  })
});
