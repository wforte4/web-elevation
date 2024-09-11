import TransitionLink from '../TransitionLink/TransitionLink';
import {
  Menu, MenuButton,
} from '@chakra-ui/react';
import Image from 'next/image';
import './Navigation.scss';

const Navigation = () => (
  <div className='navigation-header'>
    <div className='navigation-header__logo'>
      <Image
        src='/logo.png'
        alt='Elevation Media'
        width={50}
        height={50}
      />
      <h1>Elevation Media</h1>
    </div>
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
