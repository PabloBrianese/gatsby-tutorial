import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  const blogPostNames = data.allFile.edges.map(edge => edge.node.name)
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {blogPostNames.map(name => <li key={name}>{name}</li>)}
      </ul>
    </Layout>
  )
}

export const blogPostName = graphql`
  {
    allFile {
      edges {
        node {
          name
        }
      }
    }
  }
`

export default BlogPage
