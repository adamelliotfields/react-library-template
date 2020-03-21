module.exports = {
  stories: ['../src/stories/**/*.stories.{js,jsx,ts,tsx}'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
  ],
};
