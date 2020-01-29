import { render } from '@testing-library/svelte';
import LayersText from './__mocks__/LayersText.svelte';
import FontAwesomeLayersText from '../src/FontAwesomeLayersText.svelte';

function renderLayersTextMock(props) {
  const result = render(LayersText, {
    props,
  });
  return result.container;
}

describe(`🧱 ${FontAwesomeLayersText.name}`, () => {
  test('correctly composes layers', () => {
    const memeText = 'DABURU KRASHU IKOZE!';
    const container = renderLayersTextMock({ value: memeText });
    const svg = container.querySelector('svg');
    const text = container.querySelector('span');
    expect(svg.dataset.prefix).toBe('fas');
    expect(svg.dataset.icon).toBe('circle');
    expect(text.innerHTML).toBe(memeText);
  });
  test('does apply passed class attribute', () => {
    const CUSTOM_CLASS = 'custom-class';
    const container = renderLayersTextMock({ class: CUSTOM_CLASS });
    const text = container.querySelector('span');
    expect([...text.classList].includes(CUSTOM_CLASS)).toBe(true);
  });
  test('does apply passed style attribute', () => {
    const CUSTOM_STYLE = 'color: red;';
    const container = renderLayersTextMock({ style: CUSTOM_STYLE });
    const text = container.querySelector('span');
    expect(text.getAttribute('style')).toBe(CUSTOM_STYLE);
  });
  describe('correctly handles properties', () => {
    const NOT_PROVIDED_CASE = 'not provided';
    describe('`value` property', () => {
      test('string value', () => {
        const memeText = 'KANSEI DORIFTO';
        const container = renderLayersTextMock({ value: memeText });
        const text = container.querySelector('span');
        expect(text.innerHTML).toBe(memeText);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderLayersTextMock();
        const text = container.querySelector('span');
        expect(text.innerHTML).toBe('');
      });
    });
    describe('`transform` property', () => {
      test('value as string', () => {
        const container = renderLayersTextMock({
          value: 'Misfiringu system',
          transform: 'rotate-95'
        });
        const text = container.querySelector('span');
        expect(
          text.style.getPropertyValue('transform')
            .includes('rotate(95deg)')
        ).toBe(true);
      });
      test('value as object', () => {
        const container = renderLayersTextMock({
          value: 'Gamu tapu desumache',
          transform: {
            rotate: 95
          }
        });
        const text = container.querySelector('span');
        expect(
          text.style.getPropertyValue('transform')
            .includes('rotate(95deg)')
        ).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderLayersTextMock({
          value: 'ULTRA-SUPER-LATE-BRAKING!',
        });
        const text = container.querySelector('span');
        expect(
          text.style.getPropertyValue('transform')
        ).toBe('');
      });
    });
    describe('`counter` property', () => {
      test('false', () => { });
      test('true', () => { });
      test(NOT_PROVIDED_CASE, () => { });
    });
    describe('`position` property', () => {
      test('"top-right"', () => { });
      test('"top-left"', () => { });
      test('"bottom-right"', () => { });
      test('"bottom-left"', () => { });
      test(NOT_PROVIDED_CASE, () => { });
    });
  });
});
