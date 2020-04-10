import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

export const Layout = ({ title, subtitle, children }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>{title} | MovieMon🍿</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      {children}
    </Fragment>
  );
};
