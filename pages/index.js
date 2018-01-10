import React, { Component } from 'react';
import Head from 'next/head';
import { Router } from '../routes';
import _ from 'lodash';
import dynamic from 'next/dynamic';

import Page from '../layouts/main';
import { TOTAL_SKETCHES } from '../constants';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

class IndexPage extends Component {


  renderSketchList = () => {
    return (
      <div>
        {_.range(1, TOTAL_SKETCHES+1).map(ind => {
          const sketch = require(`../sketches/d${ind}`).default;
          return (
            <div key={`sketch-${ind}`} className="sketch-container">
              <a onClick={() => Router.pushRoute(`/s/${ind}`) }>Full {ind}</a>
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
      </div>);
  }
  
  render() { 
    return (
      <Page>
        <Head>
          <title>daily p5</title>          
        </Head>
        <div>
          <h2>Sketches</h2>
          {this.renderSketchList()}
        </div>
      </Page>
    );
  }
}
 
export default IndexPage;
