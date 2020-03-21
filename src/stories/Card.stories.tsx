import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Card from '../components/Card';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs],
};

export const defaultDisplay = () => (
  <Card
    avatar={text('avatar', 'https://material.angular.io/assets/img/examples/shiba1.jpg')}
    title={text('title', 'Shiba Inu')}
    subtitle={text('subtitle', 'Dog Breed')}
    image={text('image', 'https://material.angular.io/assets/img/examples/shiba2.jpg')}
    content={text(
      'content',
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    )}
  />
);
