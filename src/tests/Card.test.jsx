import React from 'react';
import { mount } from 'enzyme';

import Card from '../components/Card';

test('renders a div', () => {
  const wrapper = mount(<Card />);
  expect(wrapper.find('div')).toExist();
});
