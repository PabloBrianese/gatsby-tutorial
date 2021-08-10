import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
    const { title, date } = data.mdx.frontmatter
    const { body } = data.mdx
    return (
        <Layout pageTitle={title}>
            <p>{date}</p>
            <MDXRenderer>{body}</MDXRenderer>
        </Layout>
    )
}

export const blogPostQuery = graphql`
  query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost
