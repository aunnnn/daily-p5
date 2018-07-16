module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/sketchesCount': { page: '/' },
      ...defaultPathMap
    }
  }
}