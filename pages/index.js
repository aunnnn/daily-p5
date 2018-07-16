import React, { Component } from 'react';
import Head from 'next/head';
import { Router } from '../routes';
import _ from 'lodash';
import dynamic from 'next/dynamic';
import fetch from 'isomorphic-unfetch';
import Page from '../layouts/main';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

class IndexPage extends Component {

  static async getInitialProps(ctx) {
    const res = await fetch('http://localhost:3000/sketchesCount')
    const data = await res.json()
    return {
      sketchesCount: data.sketchesCount,
    };
  }

  render() { 
    const TOTAL_SKETCHES = this.props.sketchesCount
    return (
      <Page>
        <Head>
          <title>daily p5</title>          
        </Head>
        <div>
          <h2>Sketches</h2>
          <div>
            {_.range(1, TOTAL_SKETCHES+1).map(ind => {
              const sketch = require(`../sketches/d${ind}`).default;
              return (
                <div key={`sketch-${ind}`} className="sketch-container">
                  <P5Wrapper sketch={sketch(200, 200)}/>
                  <a className="primary-button" onClick={() => Router.pushRoute(`/s/${ind}`) }>View {ind} full</a>
                </div>
              )
            })}
          </div>
        </div>
        <style jsx>{`
          .sketch-container {
            border-color: blue;
            border-style: solid;
            display: inline-block;
            overflow: hidden;
            padding: 8px;
          }
        `}</style>
      </Page>
    );
  }
}
 
export default IndexPage;
