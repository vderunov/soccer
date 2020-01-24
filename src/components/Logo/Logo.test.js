import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Logo from './Logo';

configure({ adapter: new Adapter() });
let wrapper;

beforeEach(() => {
    wrapper = shallow(<Logo />);
});

describe('<Logo />', () => {
    it('should render <img />', () => {
        expect(wrapper.find('img'));
    });

    it('should render <div />', () => {
        expect(wrapper.find('div'));
    });
});
