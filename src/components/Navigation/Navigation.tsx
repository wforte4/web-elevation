import TransitionLink from '../TransitionLink/TransitionLink';
import {
  Menu, MenuButton,
} from '@chakra-ui/react';
import './Navigation.scss';

const Navigation = () => (
  <div className='navigation-header'>
    <div>Web Elevation</div>
    <div className='navigation-header__menu'>
      <Menu>
        <TransitionLink href='/portfolio'>
          <MenuButton>
            Portfolio
          </MenuButton>
        </TransitionLink>
      </Menu>
      <Menu>
        <TransitionLink href='/services'>
          <MenuButton>
            Services
          </MenuButton>
        </TransitionLink>
      </Menu>
    </div>
  </div>
);

export default Navigation;
