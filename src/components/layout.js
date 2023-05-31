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
    <div className="box-border flex h-full min-h-screen flex-col flex-nowrap bg-neutral-200 desktop:items-center desktop:justify-center desktop:gap-20 desktop:pb-24 desktop:pt-10">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="box-border flex h-full flex-grow items-stretch rounded-t-2xl bg-white px-6 py-8 font-body text-2xl desktop:max-h-[25.75rem] desktop:w-[50rem] desktop:rounded-2xl desktop:shadow-2xl desktop:shadow-primary/40">
        {children}
      </main>
    </div>
  );
};

export default Layout;
