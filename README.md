# fontawesome-svelte

![npm](https://img.shields.io/npm/v/fontawesome-svelte)
![npm bundle size](https://img.shields.io/bundlephobia/min/fontawesome-svelte)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/yukipastelcat/svelte-fontawesome/CI/master?label=CI)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/yukipastelcat/svelte-fontawesome/CI/develop?label=CI%20%28beta%29)
![David](https://img.shields.io/david/yukipastelcat/svelte-fontawesome)
![David](https://img.shields.io/david/dev/yukipastelcat/svelte-fontawesome)

## Introduction

This package is for integrating [FontAwesome](https://fontawesome.com/) with Svelte.
Inspired by [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome).

Under the hood this package uses `@fortawesome/fontawesome-svg-core` library. You can find API docs [here](https://fontawesome.com/how-to-use/with-the-api/setup/getting-started).

## Usage

This package relies on [`@fortawesome/fontawesome-svg-core`](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core).

Maybe you're looking for ["Add more styles or Pro icons"](https://github.com/FortAwesome/vue-fontawesome#add-more-styles-or-pro-icons).

Keep in mind that using Pro packages requires [additional configuration](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers).

```html
<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSmileWink as fasSmileWink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from 'fontawesome-svelte';

library.add(faSmileWink);
</script>

<FontAwesomeIcon icon={fasSmileWink} />
<FontAwesomeIcon icon={['fas', 'smile-wink']} />
<!-- The solid style is implicit -->
<FontAwesomeIcon icon="smile-wink" />
```

## Features

### Basic

#### [Size](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons)

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} size="xs" />
<FontAwesomeIcon icon={['fas', 'smile-wink']} size="lg" />
<FontAwesomeIcon icon={['fas', 'smile-wink']} size="6x" />
```

#### [Fixed width](https://fontawesome.com/how-to-use/on-the-web/styling/fixed-width-icons)

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} fixedWidth={true} />
```

#### [Rotate](https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons)

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} rotation={180} />
```

#### Flip

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} flip="horizontal" />
```

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} flip="vertical" />
```

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} flip="both" />
```

#### Spin and pulse [animation](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons)

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} spin={true} />
```

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} pulse={true} />
```

#### [Border](https://fontawesome.com/how-to-use/on-the-web/styling/bordered-pulled-icons)

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} border={true} />
```

#### [Pull](https://fontawesome.com/how-to-use/on-the-web/styling/bordered-pulled-icons) left or right

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} pull="left" />
<FontAwesomeIcon icon={['fas', 'smile-wink']} pull="right" />
```

#### [Invert](https://fontawesome.com/how-to-use/on-the-web/styling/stacking-icons)

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} inverse={true} />
```

#### [Swap opacity](https://fontawesome.com/how-to-use/on-the-web/styling/duotone-icons#swapping-layers)

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} swapOpacity={true} />
```

### Advanced

#### [Power transforms](https://fontawesome.com/how-to-use/on-the-web/styling/power-transforms)

```html
<FontAwesomeIcon icon={['fas', 'smile-wink']} transform="shrink-6 left-4" />
<FontAwesomeIcon icon={['fas', 'smile-wink']} transform={ { rotate: 45 } } />
```

#### [Masking](https://fontawesome.com/how-to-use/on-the-web/styling/masking)

```html
<FontAwesomeIcon icon={['fas', 'pencil-alt']} mask={['fas', 'comment']} transform="shrink-10 up-.5" />
<FontAwesomeIcon icon={fasPencilAlt} mask={fasComment} transform="shrink-10 up-.5">
```

#### [Symbols](https://fontawesome.com/how-to-use/on-the-web/advanced/svg-symbols)

```html
<FontAwesomeIcon icon={['fas', 'pencil-alt']} symbol={true} />
<FontAwesomeIcon icon={['fas', 'pencil-alt']} symbol="pencil-alt" />
```

#### [Layers](https://fontawesome.com/how-to-use/on-the-web/styling/layering)

```html
<FontAwesomeLayers class="fa-6x">
  <FontAwesomeIcon icon={['fas', 'circle']} style="color: tomato" />
  <FontAwesomeIcon icon={['fas', 'times']} transform="shrink-6" inverse={true} />
</FontAwesomeLayers>
<FontAwesomeLayers class="fa-6x">
  <FontAwesomeIcon icon={['fas', 'certificate']} />
  <FontAwesomeLayersText class="fa-inverse" transform="shrink-11.5 rotate--30" style="font-weight: 900; font-family: sans-serif;" value="NEW" />
</FontAwesomeLayers>
<FontAwesomeLayers class="fa-6x">
  <FontAwesomeIcon icon={['fas', 'envelope']} />
  <FontAwesomeLayersText counter={true} style="background: tomato; font-family: sans-serif;" value="1,419" />
</FontAwesomeLayers>
```
