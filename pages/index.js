import React, { Component } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Main from '../layouts/main';
import { Router } from '../routes';
import { range } from '../utils/utils';
import Const from '../utils/constants';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  ssr: false,
  loading: () => (
    <div className="sketch-holder">Loading...</div>
  ),
});

class IndexPage extends Component {

  render() { 
    const TOTAL_SKETCHES = Const.sketchesCount
    return (
      <Main>
        <Head>
          <title>daily p5</title>          
        </Head>
        <div>
          <h2>Sketches</h2>
          <div>
            {range(TOTAL_SKETCHES).map(i => {
              const ind = i + 1
              const sketch = require(`../sketches/d${ind}`).default;
              return (
                <div key={`sketch-${ind}`} className="sketch-container">
                  <div className="sketch-holder">
                    <P5Wrapper sketch={sketch(200, 200)}/>
                  </div>
                  <a className="primary-button" onClick={() => Router.pushRoute(`/s/${ind}`) }>View {ind}</a>
                </div>
              )
            })}
          </div>
        </div>
        <style jsx>{`
          .sketch-container {
            border-width: 1px;
            border-style: solid;
            display: inline-block;
            margin: 8px;
          }
          .sketch-holder {
            width: 200px;
            height: 200px;
            display: -webkit-flex;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </Main>
    );
  }
}
 
export default IndexPage;
