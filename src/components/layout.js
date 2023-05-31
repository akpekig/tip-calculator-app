/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="box-border flex h-full min-h-screen flex-col flex-nowrap bg-neutral-200 desktop:items-center desktop:justify-center desktop:gap-20 desktop:pb-64 desktop:pt-40">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="box-border flex h-full flex-grow items-stretch rounded-t-3xl bg-white p-10 desktop:max-h-[30rem] desktop:w-[57.5rem] desktop:rounded-3xl">
        {children}
      </main>
    </div>
  );
};

export default Layout;
