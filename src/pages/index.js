import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { css } from "../styles/nba-picks.css"
import Image from "../components/image"
import SEO from "../components/seo"


export default ({ data }) => {
  return (
  <Layout>
    <SEO title="2019 NBA Over/Under" />
    <table>
      <thead>
        <tr>
          <th data-type="image">Team</th>
          <th data-type="text-short">Bill</th>
          <th data-type="text-short">Ryen</th>
          <th data-type="text-short">House</th>
        </tr>
      </thead>
      <tbody>
      {data.allPicksJson.edges.map(({ node }) => (
        <tr key={node.id}>
          <td><img src={node.team_src} /></td>
          <td className={node.bill}>{node.bill}</td>
          <td className={node.ryen}>{node.ryen}</td>
          <td className={node.house}>{node.house}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </Layout>
  )
}

export const query = graphql`
query {
  allPicksJson {
    edges {
      node {
        id
        bill
        house
        ryen
        team_src
      }
    }
  }
}
`
