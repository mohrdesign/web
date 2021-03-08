import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function ArticleImage(alt) {
  const data = useStaticQuery(graphql`
    query {
      julynnImage: imageSharp(id: { regex: "/julynn_front/" }) {
        sizes(
          maxWidth: 1200
          duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80  }
          quality: 80
          traceSVG: {
            color: "#A6A8AF"
            turdSize: 0
            background: "#8CFFE6"
          }
        ) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  `)
  return (
      <Img
        sizes={data.julynnImage.sizes}
        alt={this.props.alt}
      />
  )
}
