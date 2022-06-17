/* eslint-disable prettier/prettier */
'use strict';
const path = require('path');
const Funnel = require('broccoli-funnel');

const styleDir = path.join( __dirname, 'addon', 'styles');

module.exports = {
  name: require('./package').name,

  options: {
    postcssOptions: {

      compile: {
        enabled: false,
      },

      filter: {
        enabled: true,
        includePaths: [styleDir],
        plugins: [
          require('tailwindcss')(path.join( __dirname, 'addon', 'tailwind.config.js'))
        ]
      },
    },
  },

  treeForPublic() {
    return new Funnel(path.join(this.root, 'public'));
  },
};
