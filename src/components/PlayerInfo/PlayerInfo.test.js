// import React from 'react';
//
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
//
// import PlayerInfo from './PlayerInfo';
// import Button from '../UI/Button/Button';
//
// configure({ adapter: new Adapter() });
//
// let wrapper;
//
// beforeEach(() => {
//     wrapper = shallow(<PlayerInfo />);
// });
//
// describe('<PlayerInfo />', () => {
//     it('should render one <Button /> component', () => {
//         wrapper.setProps({ name: 'homer' });
//         expect(wrapper.find(Button)).toHaveLength(0);
//     });
// });
