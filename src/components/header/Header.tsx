import React from 'react';
import Logo from '../logo/Logo'
import Toggle from './Toggle';
import HeaderItemList from './HeaderItemList';
import HeaderContainer from './HeaderContainer';

interface HeaderProps {
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <HeaderContainer {...props}>
      <Logo w={"2rem"}/>
      <Toggle toggle={toggle} isOpen={isOpen} />
      <HeaderItemList isOpen={isOpen} />
    </HeaderContainer>
  )
}

export default Header;