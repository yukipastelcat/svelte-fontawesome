import { cleanup, render } from '@testing-library/svelte';
import FontAwesomeIcon from '../src/FontAwesomeIcon.svelte';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLaptop, faSmileWink } from '@fortawesome/free-solid-svg-icons';
library.add(faLaptop);

const weirdIconDefinition = {
  youExpectedAnIconDefinitionHere: 'But it was me, Dio!',
};

function createIcon(props) {
  const { container } = render(FontAwesomeIcon, {
    props,
  });
  return container;
}

function renderWink(props = {}) {
  return createIcon({ icon: faSmileWink, ...props });
}

describe('FontAwesomeIcon', () => {
  test('does not render component if passed icon wasn\'t found', () => {
    const containerA = createIcon({ icon: ['fal', 'book'] });
    const containerB = createIcon({ icon: weirdIconDefinition });
    const containerC = createIcon({ icon: 'john-cena' });
    const everyContainerIsNull = [containerA, containerB, containerC]
      .every(container => container.querySelector("[data-icon]") === null);

    expect(everyContainerIsNull).toBe(true);
  });
  test('fallbacks to \'fas\' prefix if prefix not specified', () => {
    const container = createIcon({ icon: 'laptop' });
    expect(container.querySelector('[data-icon="laptop"]')).not.toBe(null);
  });
  test('does render component if icon passed directly', () => {
    const container = createIcon({ icon: faAddressBook });
    expect(container.querySelector('[data-icon="address-book"]')).not.toBe(null);
  });
  test('does render component if icon passed from library in [prefix, icon] format', () => {
    library.add(faFacebook);
    const container = createIcon({ icon: ['fab', 'facebook'] });
    expect(container.querySelector('[data-icon="facebook"]')).not.toBe(null);
  });
  describe('correctly handles properties', () => {
    const NOT_PROVIDED_CASE = 'not provided';
    describe('`border` property', () => {
      test('false', () => {
        const container = renderWink({ border: false });
        expect([...container.querySelector('svg').classList].includes("fa-border")).toBe(false);
      });
      test('true', () => {
        const container = renderWink({ border: true });
        expect([...container.querySelector('svg').classList].includes("fa-border")).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderWink();
        expect([...container.querySelector('svg').classList].includes("fa-border")).toBe(false);
      })
    });
    describe('`fixedWidth` property', () => {
      test('false', () => {
        const container = renderWink({ fixedWidth: false });
        expect([...container.querySelector('svg').classList].includes("fa-fw")).toBe(false);
      });
      test('true', () => {
        const container = renderWink({ fixedWidth: true });
        expect([...container.querySelector('svg').classList].includes("fa-fw")).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderWink();
        expect([...container.querySelector('svg').classList].includes("fa-fw")).toBe(false);
      });
    });
    describe('`flip` property', () => {
      const VERTICAL_FLIP_CLASS = 'fa-flip-vertical';
      const HORIZONTAL_FLIP_CLASS = 'fa-flip-horizontal';
      test('"vertical"', () => {
        const container = renderWink({ flip: 'vertical' });
        expect([...container.querySelector('svg').classList].includes(VERTICAL_FLIP_CLASS)).toBe(true);
      });
      test('"horizontal"', () => {
        const container = renderWink({ flip: 'horizontal' });
        expect([...container.querySelector('svg').classList].includes(HORIZONTAL_FLIP_CLASS)).toBe(true);
      });
      test('"both"', () => {
        const container = renderWink({ flip: 'both' });
        expect([HORIZONTAL_FLIP_CLASS, VERTICAL_FLIP_CLASS].every(item => [...container.querySelector('svg').classList].includes(item))).toBe(true);
      });
      test('null', () => {
        const container = renderWink({ flip: null });
        expect([HORIZONTAL_FLIP_CLASS, VERTICAL_FLIP_CLASS].every(item => ![...container.querySelector('svg').classList].includes(item))).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderWink();
        expect([HORIZONTAL_FLIP_CLASS, VERTICAL_FLIP_CLASS].every(item => ![...container.querySelector('svg').classList].includes(item))).toBe(true);
      });
    });
    describe('`mask` property', () => {
      test('[\'fas\', \'laptop\'] (added in library)', () => {
        const container = renderWink({ mask: ['fas', 'laptop'] });
        expect(container.querySelector('svg mask')).not.toBe(null);
      });
      test('import { faFacebook } from \'@fortawesome/free-brands-svg-icons\'', () => {
        const container = renderWink({ mask: faFacebook });
        expect(container.querySelector('svg mask')).not.toBe(null);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderWink();
        expect(container.querySelector('svg mask')).toBe(null);
      });
    });
    describe('`listItem` property', () => {
      test('false', () => {
        const container = renderWink({ listItem: false });
        expect([...container.querySelector('svg').classList].includes('fa-li')).toBe(false);
      });
      test('true', () => {
        const container = renderWink({ listItem: true });
        expect([...container.querySelector('svg').classList].includes('fa-li')).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderWink();
        expect([...container.querySelector('svg').classList].includes('fa-li')).toBe(false);
      });
    });
    describe('`pull` property', () => {
      const PULL_LEFT_CLASS = 'fa-pull-left';
      const PULL_RIGHT_CLASS = 'fa-pull-right';
      test('"left"', () => {
        const container = renderWink({ pull: 'left' });
        expect([...container.querySelector('svg').classList].includes(PULL_LEFT_CLASS)).toBe(true);
      });
      test('"right"', () => {
        const container = renderWink({ pull: 'right' });
        expect([...container.querySelector('svg').classList].includes(PULL_RIGHT_CLASS)).toBe(true);
      });
      test('null', () => {
        const container = renderWink({ pull: null });
        const noneOfClassesIsPresent = [PULL_LEFT_CLASS, PULL_RIGHT_CLASS]
          .every(item => ![...container.querySelector('svg').classList].includes(item));
        expect(noneOfClassesIsPresent).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderWink();
        const noneOfClassesIsPresent = [PULL_LEFT_CLASS, PULL_RIGHT_CLASS]
          .every(item => ![...container.querySelector('svg').classList].includes(item));
        expect(noneOfClassesIsPresent).toBe(true);
      });
    });
    describe('`pulse` property', () => {
      test('false', () => {
        const container = renderWink({ pulse: false });
        expect([...container.querySelector('svg').classList].includes('fa-pulse')).toBe(false);
      });
      test('true', () => {
        const container = renderWink({ pulse: true });
        expect([...container.querySelector('svg').classList].includes('fa-pulse')).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderWink();
        expect([...container.querySelector('svg').classList].includes('fa-pulse')).toBe(false);
      });
    });
    describe('`rotation` property', () => {
      const [ROTATE_90_CLASS, ROTATE_180_CLASS, ROTATE_270_CLASS] = [90, 180, 270]
        .map(item => `fa-rotate-${item}`)
      test('90', () => {
        const container = renderWink({ rotation: 90 });
        const svg = container.querySelector('svg');
        expect([...svg.classList].includes(ROTATE_90_CLASS)).toBe(true);
      });
      test('180', () => {
        const container = renderWink({ rotation: 180 });
        const svg = container.querySelector('svg');
        expect([...svg.classList].includes(ROTATE_180_CLASS)).toBe(true);
      });
      test('270', () => {
        const container = renderWink({ rotation: 270 });
        const svg = container.querySelector('svg');
        expect([...svg.classList].includes(ROTATE_270_CLASS)).toBe(true);
      });
      test('null', () => {
        const container = renderWink({ rotation: null });
        const svg = container.querySelector('svg');
        const noneOfClassesIsPresent = [ROTATE_90_CLASS, ROTATE_180_CLASS, ROTATE_270_CLASS]
          .every(item => ![...svg.classList].includes(item));
        expect(noneOfClassesIsPresent).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderWink();
        const svg = container.querySelector('svg');
        const noneOfClassesIsPresent = [ROTATE_90_CLASS, ROTATE_180_CLASS, ROTATE_270_CLASS]
          .every(item => ![...svg.classList].includes(item));
        expect(noneOfClassesIsPresent).toBe(true);
      });
    });
    describe('`swapOpacity` property', () => {
      const SWAP_OPACITY_CLASS = 'fa-swap-opacity';
      test('false', () => {
        const container = renderWink({ swapOpacity: false });
        const svg = container.querySelector('svg'); 
        expect([...svg.classList].includes(SWAP_OPACITY_CLASS)).toBe(false);
      });
      test('true', () => {
        const container = renderWink({ swapOpacity: true });
        const svg = container.querySelector('svg'); 
        expect([...svg.classList].includes(SWAP_OPACITY_CLASS)).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderWink();
        const svg = container.querySelector('svg'); 
        expect([...svg.classList].includes(SWAP_OPACITY_CLASS)).toBe(false);
      });
    });
    describe('`size` property', () => {
      const cases = [
        ...['xs', 'sm', 'lg', ...[...Array(10).keys()]
          .map(i => `${i + 1}x`)]
          .map(i => [i, `fa-${i}`]),
      ];
      test.each(cases)('"%s"', (value, className) => {
        const container = renderWink({ size: value });
        const svg = container.querySelector('svg');
        expect([...svg.classList].includes(className)).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderWink();
        const svg = container.querySelector('svg');
        const classes = cases.map(([value, className]) => className);
        expect(classes.every(item => ![...svg.classList].includes(item))).toBe(true);
      });
    });
    describe('`spin` property', () => {
      const SPIN_CLASS = 'fa-spin';
      test('false', () => {
        const container = renderWink({ spin: false });
        const svg = container.querySelector('svg');
        expect([...svg.classList].includes(SPIN_CLASS)).toBe(false);
      });
      test('true', () => {
        const container = renderWink({ spin: true });
        const svg = container.querySelector('svg');
        expect([...svg.classList].includes(SPIN_CLASS)).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderWink();
        const svg = container.querySelector('svg');
        expect([...svg.classList].includes(SPIN_CLASS)).toBe(false);
      });
    });
  });
});
