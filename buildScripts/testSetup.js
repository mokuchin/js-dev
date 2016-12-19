// This file isn't transpiled, so much use CommonJS and ES5

// Register bable to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand/
// Tells Mocha that if see .css then thread as empty function
require.extensions['.css'] = function() {};
