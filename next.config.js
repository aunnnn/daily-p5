function getSketchesCount() {
  const fs = require('fs')
  const sketchesCount = fs.readdirSync('./sketches').length - 1
  return sketchesCount
}

const sketchesCount = getSketchesCount()

const nextConfigs = {
  // Will be available on both server and client
  publicRuntimeConfig: {
    sketchesCount,
  },

  exportPathMap: async function (defaultPathMap) {
    const myPathMap = {}
    const range = (n) => Array.from({length: n}, (v, k) => k);
    for(const _i of range(sketchesCount)) {
      const i = _i+1
      myPathMap[`/s/${i}`] = {
        page: 'p5page',
        query: {
          sketchId: i,
        }
      }
    }
    return {
      '/': { page: '/' },
      ...myPathMap
    }
  }
}

module.exports = nextConfigs