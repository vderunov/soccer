import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Toolbar from './Toolbar';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';

configure({ adapter: new Adapter() });
let wrapper;

beforeEach(() => {
    wrapper = shallow(<Toolbar />);
});

describe('<Toolbar />', () => {
    it('should render one <NavigationItems />  element', () => {
        expect(wrapper.find(NavigationItems)).toHaveLength(1);
    });

    it('should render one <Logo />  element', () => {
        expect(wrapper.find(Logo)).toHaveLength(1);
    });

    it('should render <header />  element', () => {
        expect(wrapper.find('header'));
    });
});
