import React from 'react';

import {
    FooterContainer,
    Copyrightt,
    OptionLink
} from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <Copyrightt>Copyright © 2020 LMS, Ltd.</Copyrightt>
        <OptionLink to='/'>
          About us
        </OptionLink>
        <OptionLink to='/'>
          Privacy Policy
        </OptionLink>
        <OptionLink to='/'>
          Terms
        </OptionLink>
        <OptionLink to='/'>
          Help and Support
        </OptionLink>
    </FooterContainer>
  );
};

export default Footer;
