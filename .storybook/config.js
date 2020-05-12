import { configure, addParameters } from '@storybook/react'
import mytheme from './mytheme';

// Option defaults.
addParameters({
  options: {
    theme: mytheme,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/', true, /\.stories\.js$/), module);
