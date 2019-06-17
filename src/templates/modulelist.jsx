import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import ModuleListing from "../components/ModuleListing/ModuleListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default ({ data, pageContext: { moduleCurrentPage, moduleNumPages } }) => {
  const postEdges = data.allMarkdownRemark.edges;
  const prefix = "/modules/"
  const isFirst = moduleCurrentPage === 1
  const isLast = moduleCurrentPage === moduleNumPages
  const prevPage = moduleCurrentPage - 1 ===  1  ? "/" : (moduleCurrentPage - 1).toString()
  const nextPage = (moduleCurrentPage + 1).toString()

  return (
    <Layout>
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO />
        <ModuleListing postEdges={postEdges} />
      </div>
      {!isFirst && (
        <Link to={`${prefix}${prevPage}`} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={`${prefix}${nextPage}`} rel="next">
          Next Page →
        </Link>
      )}
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const moduleQuery = graphql`
  query moduleQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/modules/.*\\.md$/"}}
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;