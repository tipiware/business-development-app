/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

import Link from '../Link';
import FooterLink from './FooterLink';

const Footer = () => (
  <div sx={{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    py: 4,
    px: 3,
    backgroundColor: 'text',
  }}
  >
    <div sx={{
      display: 'flex',
      width: '100%',
      p: 3,
      justifyContent: 'space-between',
      alignItems: ['flex-start', 'center'],
      maxWidth: (theme) => theme.maxWidth,
      borderRadius: 0,
      flexDirection: ['column', 'row'],
    }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          height: '100%',
          color: 'textLight',
          width: ['100%', 'auto'],
        }}
      >
        <div sx={{ mb: [3, 0] }}>
          <Styled.p sx={{
            fontFamily: 'heading',
            fontWeight: 700,
            fontSize: [1, 2],
          }}
          >
            Pages
          </Styled.p>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
            }}
          >

            <div sx={{ mr: 2 }}>
              <FooterLink to="/" text="Home" />
            </div>
            <div sx={{ mr: 2 }}>
              <FooterLink to="/options" text="Service" />
            </div>
            <div sx={{ mr: 2 }}>
              <FooterLink to="/gallery" text="Gallery" />
            </div>
            <div sx={{ mr: 2 }}>
              <FooterLink to="/contact" text="Contact" />
            </div>
          </div>
        </div>

        <div sx={{ ml: [0, 8] }}>
          <Styled.p sx={{
            fontFamily: 'heading',
            fontWeight: 700,
            fontSize: [1, 2],
          }}
          >
            Contact
          </Styled.p>

          <div>
            <FooterLink to="tel:60123456789" text="+60123456789" />
          </div>
          <div>
            <FooterLink to="mailto:info@gmail.com" text="info@gmail.com" />
          </div>

        </div>
      </div>
    </div>
    <p sx={{ textAlign: 'center', color: 'textLight', fontSize: [12, 14] }}>
    Copyright is all rights reserved. Creative Commons is some rights reserved.
    </p>
  </div>
);

Footer.propTypes = {
};

export default Footer;
