import React, { Component } from 'react';
import Head from 'next/head'
import Page from '../layouts/main'
import _ from 'lodash'

class IndexPage extends Component {

  // dynamically load sketches d1, d2, d3, ...
  TOTAL_SKETCHES = 2

  render() { 
    let sketchComponents = <div>Loading</div>
    if (typeof(window) !== 'undefined') {       
      const P5Wrapper = require('react-p5-wrapper')

      sketchComponents = (
        <div>
          {_.range(1, this.TOTAL_SKETCHES+1).map(ind => {
            const sketch = require(`../sketches/d${ind}`).default
            return (
              <div className="sketch-container">
                <P5Wrapper sketch={sketch(200, 300)}/>
              </div>
            )
          })}
          <style jsx>{`
          .sketch-container {
            border-color: blue;
            border-style: solid;
            display: inline-block;
            overflow: hidden;
            padding: 10px;
          }
        `}</style>
        </div>)
    }

    return (
      <Page>
        <Head>
          <title>daily p5</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.min.js" />
        </Head>
        <div>Home</div>
        {sketchComponents}
      </Page>
    )
  }
}
 
export default IndexPage;
