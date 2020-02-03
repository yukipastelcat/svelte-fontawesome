import { withKnobs, text, boolean, select, object } from "@storybook/addon-knobs";
import Basic from './Basic.story.svelte';
import Mask from './Mask.story.svelte';
import Layers from './Layers.story.svelte';
import { withTests } from "@storybook/addon-jest";
import results from './.jest-test-results.json';

export default {
  title: 'FontAwesome',
  decorators: [
    withKnobs,
    withTests({
      results,
      filesExt: '.spec.js'
    })
  ],
};

const ICON_KNOBS_GROUP = 'Icon';
const MASK_ICON_KNOBS_GROUP = 'Mask';

export const basic = () => ({
  Component: Basic,
  props: {
    iconPrefix: text('Icon prefix', 'fas', ICON_KNOBS_GROUP),
    iconName: text('Icon name', 'smile-wink', ICON_KNOBS_GROUP),
    border: boolean('🔳 Border', false),
    fixedWidth: boolean('📏 Fixed width', false),
    flip: select('🔁 Flip', [null, 'horizontal', 'vertical', 'both'], null),
    listItem: boolean('📃 List item', false),
    pull: select('🏋️ Pull', [null, 'left', 'right'], null),
    pulse: boolean('💫 Pulse', false),
    rotation: select('🔄 Rotation', [null, 90, 180, 270], null),
    swapOpacity: boolean('🔀 Swap opacity', false),
    size: select('📐 Size', [
      'xs',
      'sm',
      'lg',
      '1x',
      '2x',
      '3x',
      '4x',
      '5x',
      '6x',
      '7x',
      '8x',
      '9x',
      '10x'
    ], '6x'),
    spin: boolean('🔄 Spin', false),
    title: text('🔤 Title', 'wink'),
    inverse: boolean('⬜ Inverse', false),
    transform: text('⚡ Power transforms', ''),
    symbol: text('💠 Symbol', '')
  },
});

basic.story = {
  parameters: {
    jest: ['FontAwesomeIcon']
  }
};

export const masking = () => ({
  Component: Mask,
  props: {
    iconPrefix: text('Icon prefix', 'fas', ICON_KNOBS_GROUP),
    iconName: text('Icon name', 'pencil-alt', ICON_KNOBS_GROUP),
    border: boolean('🔳 Border', false),
    fixedWidth: boolean('📏 Fixed width', false),
    flip: select('🔁 Flip', [null, 'horizontal', 'vertical', 'both'], null),
    listItem: boolean('📃 List item', false),
    pull: select('🏋️ Pull', [null, 'left', 'right'], null),
    pulse: boolean('💫 Pulse', false),
    rotation: select('🔄 Rotation', [null, 90, 180, 270], null),
    swapOpacity: boolean('🔀 Swap opacity', false),
    size: select('📐 Size', [
      'xs',
      'sm',
      'lg',
      '1x',
      '2x',
      '3x',
      '4x',
      '5x',
      '6x',
      '7x',
      '8x',
      '9x',
      '10x'
    ], '6x'),
    spin: boolean('🔄 Spin', false),
    title: text('🔤 Title', 'wink'),
    inverse: boolean('⬜ Inverse', false),
    transform: text('⚡ Power transforms', 'shrink-10 up-.5'),
    maskIconPrefix: text('Icon prefix', 'fas', MASK_ICON_KNOBS_GROUP),
    maskIconName: text('Icon name', 'comment', MASK_ICON_KNOBS_GROUP),
  }
});

masking.story = {
  parameters: {
    jest: ['FontAwesomeIcon']
  }
};

export const layers = () => ({
  Component: Layers,
  props: {
    fixedWidth: boolean('Fixed width', true),
  }
});

layers.story = {
  parameters: {
    jest: ['FontAwesomeLayers', 'FontAwesomeLayersText']
  }
}
