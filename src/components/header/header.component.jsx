import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    LogoUpdated,
    LoggedInDiv
} from './header.styles';

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <LogoUpdated />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/'>
          VIEW ALL
        </OptionLink>
        <OptionLink to='/'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <LoggedInDiv>
            <OptionLink to='/'>
              PROFILE
            </OptionLink>
            <OptionLink as='div' onClick={() => dispatch(setCurrentUser(null))}>
              SIGN OUT
            </OptionLink>
          </LoggedInDiv>
        ) : (
          <div>
            <OptionLink to='/signin'>
              SIGN IN
            </OptionLink>
            <OptionLink to='/signup'>
              SIGN UP
            </OptionLink>
          </div>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
