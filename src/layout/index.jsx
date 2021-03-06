import React from "react";
import Helmet from "react-helmet";
import { Container } from "reactstrap";
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.scss";
import favicon from "../../static/logos/logo.png";

// eslint-disable-next-line no-unused-vars
export default ({ children, location }) => (
  <body>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon shortcut" href={favicon} type="image/png" />
    </Helmet>
    <Header />
    <Container className="main">{children}</Container>
    <Footer />
  </body>
);
