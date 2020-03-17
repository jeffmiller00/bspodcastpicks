import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { css } from "../styles/nba-picks.css"
// import Image from "../components/image"
import SEO from "../components/seo"

import billImage from "../images/Bill-Simmons.jpg"
import ryenImage from "../images/Ryen-Russillo.png"
import houseImage from "../images/Joe-House.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'


export default ({ data }) => {
  return (
  <Layout>
    <SEO title="2019 NBA Over/Under" />
    <table>
      <thead>
        <tr>
          <th data-type="image"></th>
          <th data-type="text-short"><img className='headshots' src={billImage} alt="Bill Simmons" /></th>
          <th data-type="text-short"><img className='headshots' src={ryenImage} alt="Ryen Russillo" /></th>
          <th data-type="text-short"><img className='headshots' src={houseImage} alt="Joe House" /></th>
        </tr>
      </thead>
      <tbody>
      {data.allPicksJson.edges.map(({ node }) => (
        <tr key={node.id}>
          <td><img src={node.team_src} /><br />{node.line}</td>
          <td className={node.bill + (node.bill_lock ? ' lock' : '')}>
            {(node.bill==='over' ? <FontAwesomeIcon icon={faArrowAltCircleUp} size="3x" /> : <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x" />)}<br />
            {node.bill}{node.bill_lock && (<React.Fragment><br /><FontAwesomeIcon icon={faLock} size="3x" color="goldenrod" /></React.Fragment>)}
          </td>
          <td className={node.ryen + (node.ryen_lock ? ' lock' : '')}>
            {(node.ryen==='over' ? <FontAwesomeIcon icon={faArrowAltCircleUp} size="3x" /> : <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x" />)}<br />
            {node.ryen}{node.ryen_lock && (<React.Fragment><br /><FontAwesomeIcon icon={faLock} size="3x" color="goldenrod" /></React.Fragment>)}
          </td>
          <td className={node.house + (node.house_lock ? ' lock' : '')}>
            {(node.house==='over' ? <FontAwesomeIcon icon={faArrowAltCircleUp} size="3x" /> : <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x" />)}<br />
            {node.house}{node.house_lock && (<React.Fragment><br /><FontAwesomeIcon icon={faLock} size="3x" color="goldenrod" /></React.Fragment>)}
          </td>
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
