import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';
import { setMenuOpen } from '../../redux/menu/menu.actions';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    LogoUpdated,
    LoggedInDiv,
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

  const doLogout = () => {
    dispatch(setCurrentUser(null));
    dispatch(setMenuOpen(false));
  }

  return (
    <HeaderContainer>
      {currentUser ? (
        <MenuToggle onClick={toggleMenu} open={open}>
          <RotateContainer>
            <span  />
            <span  />
            <span  />
          </RotateContainer>
        </MenuToggle>
      ):(
        <LogoContainer to={currentUser ? '/dashboard' : '/'}>
          <LogoImage/>
        </LogoContainer>
      )}
      <OptionsContainer>
        {currentUser ? (
          <LoggedInDiv>
            <OptionLink as='div' onClick={doLogout}>
              SIGN OUT
            </OptionLink>
          </LoggedInDiv>
        ) : (
          <div>
            <DivLeft/>
            <SingInUpDiv>
              <OptionLink to='/signin'>
                <LogoUser/><LogoText>LOGIN / SIGN UP</LogoText>
              </OptionLink>
            </SingInUpDiv>
          </div>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
