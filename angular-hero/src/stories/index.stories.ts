import { CommonModule } from '@angular/common';

import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';

//import { AppComponent } from '../app/app.component';
import { TestComponent } from '../app/test/test.component';

storiesOf('Welcome', module)

.add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));
storiesOf('TestComponent', module)
  .addDecorator(
    moduleMetadata({
    imports: [CommonModule],
    schemas: [],
    declarations: [TestComponent],
    //providers: [MyDataService],
    })
  )
  //.add('Component with separate template', () => ({
  //  component: AppComponent,
  //  props: {}
  //}))
  .add('TestComponent', () => ({
    component: TestComponent,
    props: {
      text: '333333',
    },
  }));
storiesOf('Button', module)
  
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }))
  )
  .add(
    'with some emoji and action',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }))
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));
