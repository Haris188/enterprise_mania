import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>We would really happy to hear from you...</h1>
      <p>
        For any questions or queries, please reach out to <a href="mailto:haris@softwarefactory.ca">haris@softwarefactory.ca</a>
        <br />
        <br />
        <p>
          Twitter👉 <a href="https://twitter.com/tweetharisahmad">https://twitter.com/tweetharisahmad</a> <br />
          LinkedIn👉 <a href="https://www.linkedin.com/in/harisahmadlink/">https://www.linkedin.com/in/harisahmadlink/ </a> <br />
          Instagram👉 <a href="https://www.instagram.com/hariscodes/">https://www.instagram.com/hariscodes/</a>
          </p>
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
