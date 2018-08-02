import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Welcome, Button } from '@storybook/angular/demo';
import { AppComponent } from '../app/app.component';
import { FormComponent } from '../app/form/form.component';
import { ClickMeComponent } from '../app/click-me/click-me.component';
import { KeyupComponent } from '../app/keyup/keyup.component';
import { LoopBackComponent } from '../app/loop-back/loop-back.component';
import { LittleTourComponent } from '../app/little-tour/little-tour.component';
import { AnimationComponent } from '../app/animation/animation.component';

storiesOf('AppComponent', module).add('my AppComponent', () => ({
  component: AppComponent,
  props: {},
})).add('my Form', () => ({
  component: FormComponent,
  props: {name: '张彤川'}
})).add('click me', () => ({
  component: ClickMeComponent,
  props: {clickMessage: 'clickMessage'}
})).add('key up', () => ({
  component: KeyupComponent,
  props: {}
})).add('loop back', () => ({
  component: LoopBackComponent,
  props: {}
})).add('little tour', () => ({
  component: LittleTourComponent,
  props: {}
})).addDecorator(
  moduleMetadata({
    imports: [BrowserAnimationsModule],
    schemas: [],
    declarations: [],
    providers: [],
  })).add('animation', () => ({
  component: AnimationComponent,
  props: {}
}));

// storiesOf('Welcome', module).add('to Storybook', () => ({
//   component: Welcome,
//   props: {},
// }));

// storiesOf('Button', module)
//   .add('with text', () => ({
//     component: Button,
//     props: {
//       text: 'Hello Button',
//     },
//   }))
//   .add(
//     'with some emoji',
//     withNotes({ text: 'My notes on a button with emojis' })(() => ({
//       component: Button,
//       props: {
//         text: '😀 😎 👍 💯',
//       },
//     }))
//   )
//   .add(
//     'with some emoji and action',
//     withNotes({ text: 'My notes on a button with emojis' })(() => ({
//       component: Button,
//       props: {
//         text: '😀 😎 👍 💯',
//         onClick: action('This was clicked OMG'),
//       },
//     }))
//   );

// storiesOf('Another Button', module).add('button with link to another story', () => ({
//   component: Button,
//   props: {
//     text: 'Go to Welcome Story',
//     onClick: linkTo('Welcome'),
//   },
// }));
