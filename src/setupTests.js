const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({
  adapter: new Adapter(),
});

// This simply instructs `jest-enzyme` that we already configured the adapter.
global.bootstrapEnzymeEnvironment = false;

require('jest-enzyme');
