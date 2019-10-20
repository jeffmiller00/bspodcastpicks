import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { css } from "../styles/nba-picks.css"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
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
        <tr>
          <td><img src="http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/MIL.svg" /></td>
          <td class="over">Over</td>
          <td class="under">Under</td>
          <td class="over">Over</td>
        </tr>
      </tbody>
    </table>
  </Layout>
)

export default IndexPage
