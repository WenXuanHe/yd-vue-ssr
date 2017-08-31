// requires all tests in `./specs/**/index.js` 

const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
 
// requires all components in `project/src/components/**/index.js` 
const components = require.context('../../src/webapp/libs/', true, /\.js$/);
 
components.keys().forEach(components);