import React from 'react';

import {
    FooterContainer,
    LogoImage,
    OptionLinkContainer,
    OptionLink
} from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <LogoImage/>
      <OptionLinkContainer>
        <OptionLink to='/'>
          About us
        </OptionLink><div/>
        <OptionLink to='/'>
          Contact us
        </OptionLink>
      </OptionLinkContainer>
      <OptionLinkContainer>
        <OptionLink to='/'>
          Help and Support
        </OptionLink><div/>
        <OptionLink to='/'>
          Blog
        </OptionLink>
      </OptionLinkContainer>
      <OptionLinkContainer>
        <OptionLink to='/'>
          Help and Policy
        </OptionLink><div/>
        <OptionLink to='/'>
          Terms
        </OptionLink>
      </OptionLinkContainer>
    </FooterContainer>
  );
};

export default Footer;
