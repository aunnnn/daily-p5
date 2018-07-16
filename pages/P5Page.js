import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Meta from '../components/meta';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

import fetch from 'isomorphic-unfetch';

class P5Page extends Component {

  static async getInitialProps(ctx) {
    const sketchId = ctx.query.sketchId;
    const res = await fetch('http://localhost:3000/sketchesCount')
    const data = await res.json()
    return {
      sketchId,
      sketchesCount: data.sketchesCount,
    };
  }

  renderP5 = (id) => {
    const TOTAL_SKETCHES = this.props.sketchesCount
    if (id > TOTAL_SKETCHES || id < 1) {
      return (
        <div>
          <h3>{`Invalid sketch id (${id}).`}</h3>
          <p>{`Please specify a number between 1 and ${TOTAL_SKETCHES }.`}</p>
        </div>
      );
    }
    const sketch = require(`../sketches/d${id}`).default(600, 600);
    return <P5Wrapper sketch={sketch}/>
  }

  render() {    
    return (
      <div>
        <Meta />
        <div className="container">
          {this.renderP5(this.props.sketchId)}
        </div>
        <style jsx>{`
          .container {
            margin: 8px;
          }
        `}</style>
      </div>
    );
  }
}

export default P5Page;
