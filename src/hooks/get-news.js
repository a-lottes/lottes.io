import { useStaticQuery, graphql } from "gatsby"
export const GetNews = () => {
  const { data } = useStaticQuery(
    graphql`
    query NewsQuery {
        allMarkdownRemark(limit: 5, sort: {order: DESC, fields: [frontmatter___date]}) {
          edges  {
            node {
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `
  )
  return data.siteMetadata
}