// import React from 'react';
//
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
//
// import Team from './Team';
// import PlayerCard from '../../components/UI/PlayerCard/PlayerCard';
//
// configure({ adapter: new Adapter() });
//
// let wrapper;
//
// describe('<Team />', () => {
//     beforeEach(() => {
//         wrapper = shallow(<Team />);
//     });
//
//     it('should render <Team /> when receiving player cards', () => {
//         wrapper.setProps({ players: { name: 'Homer' } });
//         expect(wrapper.dive().find(PlayerCard)).toHaveLength(1);
//     });
// });
