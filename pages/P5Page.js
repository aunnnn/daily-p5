import React, { Component } from 'react';
import dynamic from 'next/dynamic';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

import { TOTAL_SKETCHES } from '../constants';

class P5Page extends Component {

  static async getInitialProps(ctx) {
    const sketchId = ctx.query.sketchId;
    return {
      sketchId,
    };
  }

  renderP5 = (id) => {
    if (id > TOTAL_SKETCHES) {
      return (
        <div>
          <h3>{`Invalid sketch id (${id}).`}</h3>
          <p>{`Please specify a number between 1 and ${TOTAL_SKETCHES }.`}</p>
        </div>
      );
    }
    const sketch = require(`../sketches/d${id}`).default(500, 400);
    return <P5Wrapper sketch={sketch}/>
  }

  render() {    
    return (
      <div>      
        {this.renderP5(this.props.sketchId)}
      </div>
    );
  }
}

export default P5Page;
