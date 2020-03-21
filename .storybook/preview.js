import centered from '@storybook/addon-centered/react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: DEFAULT_VIEWPORT,
  },
});

addDecorator(centered);
