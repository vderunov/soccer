import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });
let wrapper;

beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
});

describe('<NavigationItems />', () => {
    it('should render two <NavigationItem /> element if not authentication', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render four <NavigationItem /> element if authentication', () => {
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.find(NavigationItem)).toHaveLength(4);
    });
});
