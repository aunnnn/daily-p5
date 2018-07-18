

// Constants calculated from server, check out `next.config.js`
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

// Constants
const myConstants = {

}

export default {
  ...myConstants,
  ...publicRuntimeConfig,
};