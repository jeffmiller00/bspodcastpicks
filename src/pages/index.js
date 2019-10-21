import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { css } from "../styles/nba-picks.css"
import Image from "../components/image"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'


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
          <td><img src={node.team_src} /><br />{node.line}</td>
          <td className={node.bill}>
            {node.bill}{node.bill_lock && (<React.Fragment><br /><FontAwesomeIcon icon={faLock} /></React.Fragment>)}
          </td>
          <td className={node.ryen}>{node.ryen}{node.ryen_lock && (<React.Fragment><br /><FontAwesomeIcon icon={faLock} /></React.Fragment>)}</td>
          <td className={node.house}>{node.house}{node.house_lock && (<React.Fragment><br /><FontAwesomeIcon icon={faLock} /></React.Fragment>)}</td>
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
        bill_lock
        house
        house_lock
        ryen
        ryen_lock
        team_src
        line
      }
    }
  }
}
`
