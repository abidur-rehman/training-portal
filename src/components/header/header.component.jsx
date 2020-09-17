import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMenuOpen } from '../../redux/menu/menu.actions';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    MenuContainer,
    OptionLink,
    SingInUpDiv,
    LogoUser,
    LogoText,
    DivLeft,
    MenuToggle,
    RotateContainer,
    LogoImage,
} from './header.styles';

const Header = () => {
  // const [open, setOpen] = useState(false);
  const open = useSelector(state => state.menu.open);
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    // setOpen(!open);
    dispatch(setMenuOpen(!open));
  };

  return (
    <HeaderContainer>
      <LogoContainer to={'/'}>
        <LogoImage/>
      </LogoContainer>
      {currentUser ? (
        <MenuContainer>
          <MenuToggle onClick={toggleMenu} open={open}>
            <RotateContainer>
              <span  />
              <span  />
              <span  />
            </RotateContainer>
          </MenuToggle>
        </MenuContainer>
      ) : (
        <OptionsContainer>
          <DivLeft/>
          <SingInUpDiv>
            <OptionLink to='/signin'>
              <LogoUser/><LogoText>LOGIN / SIGN UP</LogoText>
            </OptionLink>
          </SingInUpDiv>
        </OptionsContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
