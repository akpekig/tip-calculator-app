import * as React from "react";
import { Link } from "gatsby";
import Logo from "@src/images/logo.svg";

const Header = ({ siteTitle }) => (
  <header className="box-border py-10 desktop:py-0">
    <Link to="/" aria-label={siteTitle}>
      <Logo className="mx-auto w-[5.5rem]" aria-hidden="true" />
    </Link>
  </header>
);

export default Header;
