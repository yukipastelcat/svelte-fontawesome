import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import Default from './Default.story.svelte';

export default {
  title: 'FontAwesome',
  decorators: [withKnobs]
}

export const basic = () => ({
  Component: Default,
  props: {
    iconPrefix: text('Icon prefix', 'fas'),
    iconName: text('Icon name', 'smile-wink'),
    size: select('Size', [
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
    ], '1x')
  }
})
