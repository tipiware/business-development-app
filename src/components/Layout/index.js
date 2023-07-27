/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Nav from '../Nav';
import Footer from '../Footer';

const Layout = ({ children, title, description }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={`${description}`} />
      <meta property="og:title" content="Business App" />
      <meta property="og:description" content="" />
      <meta property="og:url" content="" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Business App" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="" />
      <meta property="twitter:image" content="" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta property="twitter:image:alt" content="" />
    </Head>
    <div sx={{ position: 'relative' }}>
      <Nav />
      {children}
      <Footer />
    </div>
  </React.Fragment>
);

Layout.defaultProps = {
  title: 'Business App',
  description: 'Business App',
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
};

export default Layout;
