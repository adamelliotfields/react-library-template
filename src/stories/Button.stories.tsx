import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const defaultDisplay = () => <Button>{text('children', 'Click')}</Button>;
