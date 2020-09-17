import React from 'react';

import {
    FooterContainer,
    LogoImage,
    OptionContainer,
    OptionLinkContainer,
    OptionLink
} from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <LogoImage/>
      <OptionContainer>
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
            Privacy and Policy
          </OptionLink><div/>
          <OptionLink to='/'>
            Terms
          </OptionLink>
        </OptionLinkContainer>
      </OptionContainer>
    </FooterContainer>
  );
};

export default Footer;
