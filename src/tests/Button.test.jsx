import React from 'react';
import { mount } from 'enzyme';

import Button from '../components/Button';

test('renders a button', () => {
  const wrapper = mount(<Button>Click</Button>);
  expect(wrapper.find('button')).toExist();
});
