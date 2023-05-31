import * as React from "react";
import { Link } from "gatsby";
import Logo from "@src/images/logo.svg";

const Header = ({ siteTitle }) => (
  <header className="py-10 box-border">
    <Link to="/" aria-label={siteTitle}>
      <Logo className="w-[5.5rem] mx-auto" aria-hidden="true" />
    </Link>
  </header>
);

export default Header;
