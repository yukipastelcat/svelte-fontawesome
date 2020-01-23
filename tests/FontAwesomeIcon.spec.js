import { cleanup, render } from '@testing-library/svelte';
import FontAwesomeIcon from '../src/FontAwesomeIcon.svelte';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
library.add(faLaptop);

const weirdIconDefinition = {
  reallyWeird: null,
};

describe('FontAwesomeIcon', () => {
  test("does not render component if passed icon wasn't found", () => {
    const { container: containerA } = render(FontAwesomeIcon, {
      props: {
        icon: ['fal', 'book']
      }
    });
    const { container: containerB } = render(FontAwesomeIcon, {
      props: {
        icon: weirdIconDefinition
      }
    });
    const { container: containerC } = render(FontAwesomeIcon, {
      props: {
        icon: 'john-cena'
      }
    });

    expect([containerA, containerB, containerC].every(container => container.querySelector("[data-icon]") === null))
        .toBe(true);
  });
  test("fallbacks to 'fas' prefix if prefix not specified", () => {
    const { container } = render(FontAwesomeIcon, {
      props: {
        icon: 'laptop'
      }
    });
    expect(container.querySelector('[data-icon="laptop"]')).not.toBe(null);
  });
  test("does render component if icon passed directly", () => {
    const { container } = render(FontAwesomeIcon, {
      props: {
        icon: faAddressBook
      }
    });
    expect(container.querySelector('[data-icon=\"address-book\"]')).not.toBe(null);
  });
  test("does render component if icon passed from library in [prefix, icon] format", () => {
    library.add(faFacebook);
    const { container } = render(FontAwesomeIcon, {
      props: {
        icon: ['fab', 'facebook']
      }
    });
    expect(container.querySelector('[data-icon="facebook"]')).not.toBe(null);
  });
});
