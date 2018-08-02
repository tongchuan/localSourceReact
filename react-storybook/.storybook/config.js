import { configure } from '_@storybook_react@3.4.8@@storybook/react/dist/client';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}
configure(loadStories, module)