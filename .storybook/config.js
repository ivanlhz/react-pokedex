import { configure, addParameters } from '@storybook/react'
import MyTheme from './mytheme'

// Option defaults.
addParameters({
  options: {
    theme: MyTheme,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/', true, /\.stories\.js$/), module);
