import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Const from '../utils/constants';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

class P5Page extends Component {

  static async getInitialProps(ctx) {
    const sketchId = ctx.query.sketchId;
    return {
      sketchId,
    };
  }

  renderP5 = (id) => {
    const TOTAL_SKETCHES = Const.sketchesCount
    const num = parseInt(id)
    if (isNaN(num) || num > TOTAL_SKETCHES || num < 1) {
      return (
        <div>
          <h3>{`Invalid sketch id '${id}'`}</h3>
          <p>{`Please specify a number from 1 to ${TOTAL_SKETCHES }.`}</p>
        </div>
      );
    }
    const sketch = require(`../sketches/d${id}`).default(600, 600);
    return <P5Wrapper sketch={sketch}/>
  }

  render() {    
    return (
      <div>
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
