// import { configure } from '@storybook/angular';
// // import * as index  from '../src/stories/index.stories';
// // import * as test from '../src/stories/test.stories';
// // automatically import all files ending in *.stories.ts
// const req = require.context('../src/stories', true, /.stories.ts$/);
// function loadStories() {
// 	// return [index,test]
// 	  req.keys().forEach(filename => req(filename));

// }

// configure(loadStories, module);


import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';
// import addCssWarning from '../src/cssWarning';

// addCssWarning();

setOptions({
  hierarchyRootSeparator: /\|/,
});

function loadStories() {
  // put welcome screen at the top of the list so it's the first one displayed
  // require('../src/stories');

  // automatically import all story ts files that end with *.stories.ts
  // const req = require.context('../src/stories', true, /\.stories\.ts$/);
  const req = require.context('../src/stories/', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);